"user strict"

const UserStorage = require("./UserStorage");
const Encrption = require("./Encrypt");
const jwt = require("jsonwebtoken");


class User{
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client);
        if(user){
            const compare = await Encrption.compare(client.psword, user.psword);
            if(compare) {
                return {success: true};
            }
            return { success : false, msg:"비밀번호가 틀렸습니다."};
        }
            return { success: false, msg: "아이디가 존재하지 않습니다."};
        }
         catch (err){    
            return { success: false, err};
        }
    }

    async register() {
        const client = this.body;
        client.psword = await Encrption.encrpty(client);
        try{
            const response = await UserStorage.save(client);
        return response;
        } catch (err) {
        return {success : false, err};
        }

    }

}

module.exports=User;