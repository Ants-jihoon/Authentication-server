"use strict"

const express = require("express");
const parse = require("body-parser");
const app = express();
require("dotenv").config();

const home = require("./src/routes/home");

app.set("views","./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(parse.json());
app.use(parse.urlencoded ({extended : true }));
app.use("/",home);

module.exports = app;

