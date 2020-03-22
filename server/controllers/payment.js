const models = require("../models");
const Payment = models.payment;
const User = models.user;
const Ticket = models.ticket;
const Station = models.stations;
const Train = models.train;
const Type = models.type;

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
              attributes: ["name", "city", "code"]
            },
            {
              model: Station,
              as: "destination",
              attributes: ["name", "city", "code"]
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
        }
      ]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const data = await Payment.findOne({
      where: { id }
    });
    if (data) {
      await data.update({
        status
      });
      res.send({ data });
    } else {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Wrong ID"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const delPayment = await Payment.destroy({ where: { id } });
    // res.send({ message: "Delete order", data, id });
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
              attributes: ["name", "city", "code"]
            },
            {
              model: Station,
              as: "destination",
              attributes: ["name", "city", "code"]
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
        }
      ]
    });
    res.status(200).send({ status: true, message: "delete success", data, id });
  } catch (err) {
    console.log(err);
  }
};

exports.attach = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.body;

    if (!filename) {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Please upload file"
      });
    } else {
      const photo = await Payment.update(
        {
          attachment: filename
        },
        { where: { id } }
      );
      res.status(200).json({
        status: "success",
        code: "200",
        message: "file has been upload",
        data: filename,
        photo
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.order = async (req, res) => {
  const { train_id, qty, total, depart, destination, date } = req.body;
  try {
    const harga = qty;
    const data2 = await Ticket.findOne({
      where: { id: train_id }
    });
    await data2.update({
      qty: data2.qty - harga
    });

    const data = await Payment.create({
      user_id: req.user,
      train_id,
      qty,
      total: data2.price * qty,
      depart,
      destination,
      date,
      status: "Pending"
    });
    if (data) {
      const payment = await Payment.findOne({
        where: { id: data.id },
        include: [
          {
            model: Ticket,
            as: "ticket",
            attributes: [
              "train",
              "type",
              "depart_station",
              "start_date",
              "start_time",
              "destination_station",
              "arrival_date",
              "arrival_time",
              "price",
              "qty"
            ],
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
            ]
          }
        ]
      });
      res.send({ data: payment });
    }

    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.myticket = async (req, res) => {
  try {
    const data = await Payment.findAll({
      where: { user_id: req.user },
      order: [["createdAt", "DESC"]],
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
              attributes: ["name", "city", "code"]
            },
            {
              model: Station,
              as: "destination",
              attributes: ["name", "city", "code"]
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
        }
      ]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.detailticket = async (req, res) => {
  try {
    const data = await Payment.findAll({
      order: [["createdAt", "DESC"]],
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
              attributes: ["name", "city", "code"]
            },
            {
              model: Station,
              as: "destination",
              attributes: ["name", "city", "code"]
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
        }
      ]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
