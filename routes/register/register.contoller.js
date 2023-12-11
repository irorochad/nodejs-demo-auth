const bcrypt = require("bcrypt");
const pool = require('../../db')

async function postRegister(req, res) {
  try {
    const { password, username } = req.body;
    const harshedPassword = await bcrypt.hash(password, 10); // harshpassword.
    const createUser = await pool.query(
      `INSERT INTO users (password, username) VALUES($1, $2)`,
      [harshedPassword, username]
    );

    if (createUser) {
      // If the user account was created, then first fetch users before rendering the JSON
      const fetchData = await pool.query("SELECT * FROM users");
      res.json({
        code: 200,
        message: "User created",
        data: fetchData.rows, // Use .rows to access the result rows
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
    postRegister,
};
