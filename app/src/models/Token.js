const jwt = require("jsonwebtoken");

let token = (req, res, next) => {
    let token = req.cookies.accessToken;
    jwt.verify(token,'accesstoken',(err, decoded)=>{
        if(err) throw err;
        console.log(decoded);
        req.tokenid = decoded.id
       // console.log(decoded.id);
        next();
    });



}
module.exports = { token }