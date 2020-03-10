const { Op } = require("sequelize");
const models = require("../models");
const Ticket = models.ticket;
const Station = models.stations;
const Train = models.train;
const Type = models.type;

exports.index = async (req, res) => {
  try {
    const data = await Ticket.findAll({
      include: [
        {
          model: Station,
          as: "start",
          attributes: ["name"]
        },
        {
          model: Station,
          as: "destination",
          attributes: ["name"]
        },
        {
          model: Train,
          as: "train_name",
          attributes: ["name"]
        },
        {
          model: Type,
          as: "train_type",
          attributes: ["name"]
        }
      ],
      attributes: {
        exclude: [
          "depart_station",
          "destination_station",
          "createdAt",
          "updatedAt"
        ]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.store = async (req, res) => {
  try {
    const {
      train,
      type,
      depart_station,
      start_date,
      start_time,
      destination_station,
      arrival_date,
      arrival_time,
      price,
      qty
    } = req.body;
    const tickets = await Ticket.create({
      train,
      type,
      depart_station,
      start_date,
      start_time,
      destination_station,
      arrival_date,
      arrival_time,
      price,
      qty
    });
    res.status(201).send({
      status: true,
      message: "ticket has been add",
      data: tickets
    });
  } catch (err) {
    console.log(err);
  }
};
