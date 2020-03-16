"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      user_id: DataTypes.STRING,
      train_id: DataTypes.STRING,
      qty: DataTypes.STRING,
      total: DataTypes.INTEGER,
      status: DataTypes.ENUM(
        "Waiting Payment",
        "Pending",
        "Approved",
        "Declined"
      ),
      attachment: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "user"
    });
    payment.belongsTo(models.ticket, {
      foreignKey: "train_id",
      as: "ticket"
    });
  };
  return payment;
};
