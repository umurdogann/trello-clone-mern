const bcrypt = require("bcryptjs");
const userService = require("../Services/userService");

const register = async (req, res) => {
  const { name, surname, email, password } = req.body;
  if (!(name && surname && email && password))
    return res.status("400").send({ msg: "Please fill all required areas!" });

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  req.body.password = hashedPassword;

  await userService.register(req.body, (err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(201).send(result);
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password))
    return res.status(400).send({ errMsg: "Please fill all required areas!" });

  await userService.login(email, (err, result) => {
    if (err) return res.status(400).send(err);

    const hashedPassword = result.password;
    if (!bcrypt.compareSync(password, hashedPassword))
      return res
        .status(400)
        .send({ errMessage: "Your email/password is wrong!" });

    result.password = undefined;
    result.__v = undefined;
    return res
      .status(200)
      .send({ msg: "User login successful!", user: result });
  });
};

module.exports = {
  register,
  login,
};
