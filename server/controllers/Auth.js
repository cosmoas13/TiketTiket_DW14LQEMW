const jwt = require("jsonwebtoken");
const models = require("../models");
const bcrypt = require("bcrypt");
const UserModel = models.user;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const saltRounds = 10;

//Login
exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ where: { username } });
    const result = await bcrypt.compare(password, user.password);
    if (user && result) {
      const token = jwt.sign(
        { user_id: user.id, level: user.level },
        process.env.SECRET_KEY
      );
      res.status(200).send({
        status: true,
        message: "Login Success",
        jabatan: user.level,
        username,
        token
      });
    } else {
      res.status(401).send({ status: false, message: "Invalid Login" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.Register = async (req, res) => {
  const {
    id_card,
    name,
    username,
    email,
    password,
    gender,
    phone,
    address
  } = req.body;
  const level = "user";
  const salt = await bcrypt.genSalt(saltRounds);

  try {
    if (
      id_card === "" ||
      password === "" ||
      email === "" ||
      name === "" ||
      username === "" ||
      gender === "" ||
      phone === "" ||
      address === ""
    ) {
      res.status(401).json({
        status: false,
        message: "Data cannot be empty"
      });
    } else {
      const check = await UserModel.findOne({
        where: { [Sequelize.Op.or]: { email, username } }
      });
      if (check) {
        res.status(401).json({
          status: false,
          message: "Email or Username Already Registered"
        });
      } else {
        const hash = await bcrypt.hash(password, salt);
        const regUser = await UserModel.create({
          id_card,
          name,
          username,
          email,
          password: hash,
          gender,
          phone,
          address,
          level: "user"
        });
        if (regUser) {
          const token = jwt.sign(
            { user_id: regUser.id },
            process.env.SECRET_KEY
          );
          res.send({
            email,
            token,
            username,
            status: true,
            message: "Register Success"
          });
        } else {
          res.status(401).json({ status: false, message: "Invalid Register" });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
