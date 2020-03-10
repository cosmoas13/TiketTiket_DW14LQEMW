const { Op } = require("sequelize");
const models = require("../models");
const Station = models.stations;
const Type = models.type;

exports.index = async (req, res) => {
  try {
    const data = await Station.findAll({
      attributes: ["name"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.type = async (req, res) => {
  try {
    const data = await Type.findAll({
      attributes: ["name"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.train = async (req, res) => {
  try {
    const data = await Type.findAll({
      attributes: ["name"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
