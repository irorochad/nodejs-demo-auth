const express = require("express");
const { postRegister } = require("./register.contoller");

const registerRouter = express.Router();

registerRouter.post("/register", postRegister);

module.exports = registerRouter;
