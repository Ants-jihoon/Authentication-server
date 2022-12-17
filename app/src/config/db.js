const mysql = require("mysql");

const cont =mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD ,
    database : process.env.DB_DATABASE
});

cont.connect();

module.exports = cont;