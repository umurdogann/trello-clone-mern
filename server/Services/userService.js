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

const login = async (email, callback) => {
  try {
    let user = await userModel.findOne({ email });
    if (!user) return callback({ errMessage: "Your email/password is wrong!" });
    return callback(false, user);
  } catch (err) {
    return callback({ errMsg: "Something went wrong", details: err.message });
  }
};

module.exports = {
  register,
  login,
};
