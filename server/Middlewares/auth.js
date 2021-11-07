const jwt = require("jsonwebtoken");

const generateToken = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token.toString();
};

module.exports = {
  generateToken,
};
