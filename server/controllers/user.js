const jwt = require("jsonwebtoken");
const models = require("../models");
const UserModel = models.user;

exports.user = async (req, res) => {
  try {
    const getuser = await UserModel.findOne({
      where: { id: req.user }
    });
    res.status(200).json({ data: getuser });
  } catch (err) {
    console.log(err);
  }
};
