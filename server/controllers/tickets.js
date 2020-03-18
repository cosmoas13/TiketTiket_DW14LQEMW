const { Op } = require("sequelize");
const models = require("../models");
const Ticket = models.ticket;
const Station = models.stations;
const Train = models.train;
const Type = models.type;
const User = models.user;
const Payment = models.payment;

exports.index = async (req, res) => {
  const { from, to } = req.query;

  try {
    const f = await Station.findOne({
      where: { name: { [Op.like]: `${from}` } }
    });
    const t = await Station.findOne({
      where: { name: { [Op.like]: `${to}` } }
    });
    if (f === null && t === null) {
      const fx = "";
      const tx = "";
      const data = await Ticket.findAll({
        where: {
          depart_station: { [Op.like]: `%${fx}` },
          destination_station: { [Op.like]: `%${tx}` }
        },
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
    } else {
      const fx = f.id;
      const tx = t.id;
      const data = await Ticket.findAll({
        where: {
          depart_station: { [Op.like]: `%${fx}` },
          destination_station: { [Op.like]: `%${tx}` }
        },
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
    }
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

exports.search = async (req, res) => {
  try {
    // const {}
    const data = await Payment.findAll({
      where: { user_id: req.user },
      include: [
        {
          model: User,
          as: "user"
        },
        {
          model: Ticket,
          as: "ticket",
          include: [
            {
              model: Station,
              as: "start",
              attributes: ["name", "city"]
            },
            {
              model: Station,
              as: "destination",
              attributes: ["name", "city"]
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
        }
      ]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
