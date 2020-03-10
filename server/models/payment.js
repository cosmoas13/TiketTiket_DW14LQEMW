"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      user_id: DataTypes.STRING,
      train_id: DataTypes.STRING,
      qty: DataTypes.STRING,
      depart: DataTypes.STRING,
      destination: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      status: DataTypes.STRING,
      total: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.user, {
      foreign_key: "user_id",
      as: "user"
    });
    payment.belongsTo(models.ticket, {
      foreign_key: "train_id",
      as: "ticket"
    });
  };
  return payment;
};
