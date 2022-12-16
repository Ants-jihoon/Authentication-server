"use strict"

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



 module.exports = {
   pages
 }