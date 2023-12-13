const passport = require("passport");
const localStragy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// function initializePassport(getUserByUserName) {
//   const authenticateUser = async (username, password, done) => {
//     const user = getUserByUserName(username);

//     if (user === null) {
//       return done(null, false, { message: "No User found!" });
//     }

//     try {
//       // if the password the user typed and the one on our DB matches, return the user object
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Incorrect Password Entered" });
//       }
//     } catch (e) {
//       return done(e);
//     }
//   };

//   passport.use(new localStragy({}, authenticateUser));
//   passport.serializeUser((user, done) => {});
//   passport.deserializeUser((user, done) => {});
// }

// module.exports = {
//   initializePassport,
// };

// function initializePassport() {
//   passport.use(
//     new LocalStrategy(function verify(username, password, cb) {
//       db.get(
//         "SELECT * FROM users WHERE username = ?",
//         [username],
//         function (err, row) {
//           if (err) {
//             return cb(err);
//           }
//           if (!row) {
//             return cb(null, false, {
//               message: "Incorrect username or password.",
//             });
//           }

//           crypto.pbkdf2(
//             password,
//             row.salt,
//             310000,
//             32,
//             "sha256",
//             function (err, hashedPassword) {
//               if (err) {
//                 return cb(err);
//               }
//               if (
//                 !crypto.timingSafeEqual(row.hashed_password, hashedPassword)
//               ) {
//                 return cb(null, false, {
//                   message: "Incorrect username or password.",
//                 });
//               }
//               return cb(null, row);
//             }
//           );
//         }
//       );
//     })
//   );
// }

// module.exports = {
//   initializePassport,
// };
