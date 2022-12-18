"use strict"

const db = require("../config/db");

class Userstorage{
    static async getUserInfo(id){
      return new Promise((resolve,reject)=>{
        const sql = "SELECT*FROM users WHERE id=?;"
        db.query(sql,[id],(err,data)=>{
          if(err) reject(`${err}`);
          else resolve(data[0]);
        })

      })

    }


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