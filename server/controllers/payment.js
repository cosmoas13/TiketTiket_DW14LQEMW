const models = require("../models");
const Payment = models.payment;
const User = models.user;
const Ticket = models.ticket;
const Station = models.stations;

exports.index = async (req, res) => {
  try {
    const data = await Payment.findAll({
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
              attributes: ["name"]
            },
            {
              model: Station,
              as: "destination",
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
        }
      ]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
