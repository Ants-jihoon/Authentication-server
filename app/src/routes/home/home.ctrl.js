"use strict"

const User = require("../../models/User");

const user = {
  id : ["wlgns","aabb","abcd"],
  psword : ["0413","0219","1234"]
}; 

const pages = {
  home : (req,res)=>{
    res.render("home/index")
  },

  login : (req,res)=>{
    res.render("home/login");
  },

  register : (req,res)=>{
    res.render("home/register");
  }
};

const process = {
  login : (req,res) =>{
    const id = req.body.id;
    const psword = req.body.psword;

    if(user.id.includes(id)){
      const idx = user.id.indexOf(id);
      if(psword === user.psword[idx]){
        return res.json({success: true});}
        return res.json({
          success : false,
          msg : "비밀번호가 틀렸습니다."
        })
    }
    return res.json({
      success : false,
      msg : "아이디가 존재하지 않습니다."
    })
  
  },

  register : async(req,res)=>{
    const user = new User(req.body);
    const response = await user.register()
    return res.json(response);
  }

}

 module.exports = {
   pages,
   process
 }