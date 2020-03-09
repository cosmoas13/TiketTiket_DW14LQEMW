"use strict";
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define(
    "train",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING
    },
    {}
  );
  train.associate = function(models) {
    train.belongsTo(models.type, {
      foreignKey: "type",
      as: "train_type"
    });
  };
  return train;
};
