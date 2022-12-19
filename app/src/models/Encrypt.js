"use strict"

const bcrpty = require("bcrypt");


class Encrption{
    static encrpty(userInfo) {
        return new Promise((resolve,reject)=>{
            const salt = 10;
            bcrpty.hash(userInfo.psword, salt , (err,encrptyedPW)=>{
                if (err) reject(`${err}`);
                return resolve(encrptyedPW);
            });
        })    
    }

    static compare(client, db){
        return new Promise(async (resolve)=>{
            const isEqualPw = await bcrpty.compare(client, db);
            return resolve(isEqualPw);
        });
        


    }    
}

module.exports = Encrption;