"use strict"

const Userstorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    async login () {
        const client = this.body;
        try{
            const user = await Userstorage.getUserInfo(client.id);
            if(user){
                if(client.id === user.id && client.psword === user.psword) {
                    return { success : true};
                } 
                return {success : false , msg : "비밀번호가 일치하지 않습니다."};
            }
            return {success : false , msg : "아이디가 존재하지 않습니다."};
        }    
            catch (err) {
                return {success : false , err};
           }
    }
    

    async register() {
        const client = this.body;
        try{
            const response = await Userstorage.save(client);
            return response;
        }
        catch (err){
            return {success : false, err};
        }
    }

}

module.exports = User;