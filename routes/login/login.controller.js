const bcrypt = require("bcrypt");
const pool = require("../../db");

async function postLogin(req, res) {
  // TODO => FIND A USER AND RETURN THE USER DATA WHEN
  // A USER LOG IN WITH USERNAME AND PASSWORD

  try {
    const { password, username } = req.body;

    // Fetch user data based on the provided username
    const fetchUser = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    // Check if the user was found
    if (fetchUser.rows.length === 0) {
      res.json({
        code: 404,
        message: "User not found",
        data: null,
      });
      return; // Return to exit the function
    }

    // Compare the entered password with the hashed password from the database
    const hashedPasswordFromDB = fetchUser.rows[0].password;
    const passwordMatch = await bcrypt.compare(password, hashedPasswordFromDB);

    if (passwordMatch) {
      // Password is correct
      const userData = fetchUser.rows[0];
      res.json({
        code: 200,
        message: "User found",
        data: userData,
      });
    } else {
      // Password is incorrect
      res.json({
        code: 401,
        message: "Incorrect password",
      });
    }
  } catch (error) {
    console.error(error); // Log the error, but avoid exposing details in production
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  postLogin,
};
