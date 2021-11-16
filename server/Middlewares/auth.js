const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");
const generateToken = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token.toString();
};

const verifyToken = async(req, res, next) => {
  try {
    if (!req.headers["authorization"])
      return res
        .status(401)
        .send({ errMessage: "Authorization token not found!" });

    const header = req.headers["authorization"];
    const token = header.split(" ")[1];

    await jwt.verify(token, process.env.JWT_SECRET, async(err, verifiedToken) => {
      if (err)
        return res
          .status(401)
          .send({ errMessage: "Authorization token invalid", details: err });
      const user = await userModel.findById(verifiedToken.id);
      console.log(verifiedToken);
      req.user = user;
      next();
    });
  } catch (error) {
    return res
      .status(500)
      .send({
        errMesage: "Internal server error occured!",
        details: error.message,
      });
  }
};

module.exports = {
  generateToken,
  verifyToken
};
