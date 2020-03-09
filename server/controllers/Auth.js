const jwt = require("jsonwebtoken");
const models = require("../models");
const UserModel = models.user;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Login
exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ where: { username, password } });
    if (user) {
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
  try {
    const {
      username,
      email,
      name,
      password,
      gender,
      phone,
      address
    } = req.body;
    const level = "user";
    const check = await UserModel.findOne({
      where: { [Op.or]: [{ email }, { username }] }
    });
    if (check) {
      res.status(401).send({
        status: false,
        message: "The email or username is already login"
      });
    } else {
      const user = await UserModel.create({
        name,
        username,
        email,
        password,
        gender,
        phone,
        address,
        level
      });
      if (user) {
        const token = jwt.sign(
          {
            user_id: user.id,
            level: user.level
          },
          process.env.SECRET_KEY
        );
        res
          .status(200)
          .send({ status: true, message: "Register Success", token });
      } else {
        res.status(401).send({ status: false, message: "Invalid Register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
