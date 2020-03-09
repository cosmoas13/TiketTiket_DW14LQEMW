'use strict';
module.exports = (sequelize, DataTypes) => {
  const stations = sequelize.define('stations', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  stations.associate = function(models) {
    // associations can be defined here
  };
  return stations;
};