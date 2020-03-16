const models = require("../models");
const Station = models.stations;
const Type = models.type;
const Train = models.train;

exports.index = async (req, res) => {
  try {
    const data = await Station.findAll({
      attributes: ["id", "code", "name", "city"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.type = async (req, res) => {
  try {
    const data = await Type.findAll({
      attributes: ["id", "name"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.train = async (req, res) => {
  try {
    const data = await Train.findAll({
      attributes: ["id", "name", "type"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
