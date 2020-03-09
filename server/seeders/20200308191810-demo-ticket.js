"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tickets",
      [
        {
          train: 1,
          type: 1,
          depart_station: 1,
          start_date: new Date(),
          start_time: new Date(),
          destination_station: 2,
          arrival_date: new Date(),
          arrival_time: new Date(),
          price: 300000,
          qty: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tickets", null, {});
  }
};
