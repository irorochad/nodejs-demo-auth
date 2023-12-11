const express = require("express");
// const bcrypt = require("bcrypt");
// const pool = require("./db");

const registerRouter = require('./routes/register/register.router')
// Middlewares
const app = express();
app.use(express.json());

// Routes
// get Routes
// app.get("/",  (req, res) => {});

// Create New User
app.use(registerRouter)

// login user
app.post("/login", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
