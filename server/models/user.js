"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female"),
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      level: DataTypes.ENUM("user", "admin")
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
