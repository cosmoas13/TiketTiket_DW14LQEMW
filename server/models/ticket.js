"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      train: DataTypes.STRING,
      startStation: DataTypes.STRING,
      type: DataTypes.STRING,
      dateStart: DataTypes.DATEONLY,
      startTime: DataTypes.DATEONLY,
      arrivalTime: DataTypes.TIME,
      destination: DataTypes.STRING,
      price: DataTypes.STRING,
      qty: DataTypes.STRING
    },
    {}
  );
  ticket.associate = function(models) {
    ticket.belongsTo(models.train, {
      foreignKey: "train",
      as: "train_name"
    });
    ticket.belongsTo(models.type, {
      foreignKey: "type",
      as: "train_type"
    });
    ticket.belongsTo(models.stations, {
      foreignKey: "startStation",
      as: "asal"
    });
    ticket.belongsTo(models.stations, {
      foreignKey: "destination",
      as: "tujuan"
    });
  };
  return ticket;
};
