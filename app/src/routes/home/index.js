"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.pages.home);
router.get("/login",ctrl.pages.login);
router.get("/register", ctrl.pages.register);

module.exports = router;