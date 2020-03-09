const jwt = require("jsonwebtoken");
const models = require("../models");
const UserModel = models.user;
// const Sequelize = require("sequelize");

exports.getUser = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const getuser = await UserModel.findOne({
      where: { id: user.user_id }
    });
    res.status(200).json({ data: getuser });
  } catch (err) {
    console.log(err);
  }
};
