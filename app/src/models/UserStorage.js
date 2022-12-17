"use strict"

const db = require("../config/db");

class Userstorage{
    static async save(userInfo) {
        return new Promise((resolve, reject)=>{
            const sql = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
            db.query(sql,[userInfo.id, userInfo.name, userInfo.psword],(err)=>{
              if(err) reject(`${err}`);
              else resolve({success : true}); 
            });
          });
    }
}

module.exports=Userstorage;