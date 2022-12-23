"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors"); 

const app = express();
dotenv.config();

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cookieParser());        
app.use(cors({                  
    origin : "http://localhost:3000",
    methods : ["GET","POST"],
    credentials : true,
}));

app.use("/", home);

module.exports = app;
