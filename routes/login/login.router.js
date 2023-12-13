const express = require("express");
const { postLogin } = require("./login.controller");

const loginRouter = express.Router();

loginRouter.post("/login", postLogin);

module.exports = loginRouter;
