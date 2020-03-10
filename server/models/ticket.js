"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      train: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      depart_station: DataTypes.INTEGER,
      start_date: DataTypes.DATEONLY,
      start_time: DataTypes.TIME,
      destination_station: DataTypes.INTEGER,
      arrival_date: DataTypes.DATEONLY,
      arrival_time: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
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
      foreignKey: "depart_station",
      as: "start"
    });
    ticket.belongsTo(models.stations, {
      foreignKey: "destination_station",
      as: "destination"
    });
  };
  return ticket;
};
