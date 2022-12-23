"use strict";

const express = require("express");
const {token} = require("../../models/Token");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", token , ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register",ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register",ctrl.process.register);


//router.post("/createtoken", ctrl.process.createToken);
router.post("/refreshToken", ctrl.process.refreshToken);
router.post("/logout", ctrl.process.logout);


module.exports = router;