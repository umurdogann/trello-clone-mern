const bcrypt = require("bcryptjs");
const userService = require("../Services/userService");

const register = async(req, res) => {
  const { name, surname, email, password } = req.body;
  if (!(name && surname && email && password))
    return res.status("400").send({ msg: "Please fill all required areas!" });
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password,salt);
    req.body.password = hashedPassword;

    await userService.register(req.body, (err, result)=>{
        if(err) return res.status(400).send(err);
        return res.status(201).send(result);
    })
};

module.exports = {
  register,
};
