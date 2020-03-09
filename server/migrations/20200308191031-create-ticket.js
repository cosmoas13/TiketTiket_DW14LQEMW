"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      train: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      depart_station: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      start_time: {
        type: Sequelize.TIME
      },
      destination_station: {
        type: Sequelize.STRING
      },
      arrival_date: {
        type: Sequelize.DATEONLY
      },
      arrival_time: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tickets");
  }
};
