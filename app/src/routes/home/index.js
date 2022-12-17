"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.pages.home);
router.get("/login",ctrl.pages.login);
router.get("/register", ctrl.pages.register);

router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);

module.exports = router;