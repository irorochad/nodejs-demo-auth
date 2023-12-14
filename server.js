const express = require("express");

const registerRouter = require('./routes/register/register.router')
const loginRouter = require('./routes/login/login.router')


// Middlewares
const app = express();
app.use(express.json());

// Create New User
app.use(registerRouter)
// login users
app.use(loginRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
