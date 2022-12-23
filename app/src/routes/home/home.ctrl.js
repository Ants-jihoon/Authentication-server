"use strict";

const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const output ={
    home : (req, res) => {
        res.render("home/index",{idInfo:req.tokenid});
    },

    login : (req, res) => {
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    },
}

const process ={
    login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if(response){ 
            try{ 
                const accessToken = jwt.sign(
                        {
                        id : req.body.id,
                        psword : req.body.psword,
                        name : req.body.name
                    }, "accesstoken",{ 
                    expiresIn : "1m",
                    })

                const refreshToken = jwt.sign(
                    {
                        id : req.body.id,
                        psword : req.body.psword,
                        name : req.body.name
                    }, "refreshToken",{ 
                    expiresIn : "40m",
                    })

                res.cookie("accessToken",accessToken,{
                    secure : false,
                    httpOnly : true
                })

                res.cookie("refreshToken",refreshToken,{
                    secure : false,
                    httpOnly : true
                })
                return res.json(response);
            }
            catch(err){
                res.json(`${err}`);
            }
        }
    },

    register : async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },


    refreshToken : (req,res) => {
        const token = req.cookies.refreshToken;

        const check = jwt.verify(token,"refreshToken")
        
        if(check){
      const accessToken = jwt.sign(
            {
                id : req.body.idInfo,
            }, "accesstoken",{ 
            expiresIn : "1m",
            })

            res.cookie("accessToken",accessToken,{
                secure : false,
                httpOnly : true
            })

            return res.json({success : true});
        }
        
    },


    logout : (req,res) => {
      res.cookie("accessToken","").cookie("refreshToken","");
      return res.json({ logoutSuccess: true });

    },




}


module.exports = {
    output,
    process,
};