"use strict"

const Userstorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
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