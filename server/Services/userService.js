const userModel = require("../Models/userModel");

const register = async (user, callback) => {
  const newUser = userModel({ ...user });
  await newUser
    .save()
    .then((result) => {
      return callback(false, { message: "User created successfuly!" });
    })
    .catch((err) => {
      return callback({ errMessage: "Email already in use!", details: err });
    });
};

module.exports = {
    register,
}