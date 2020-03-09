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
    // associations can be defined here
  };
  return payment;
};
