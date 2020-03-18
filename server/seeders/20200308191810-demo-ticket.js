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
          start_time: "02:00:00",
          destination_station: 2,
          arrival_date: new Date(),
          arrival_time: "04:00:00",
          price: 300000,
          qty: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          train: 2,
          type: 2,
          depart_station: 1,
          start_date: new Date(),
          start_time: "04:00:00",
          destination_station: 2,
          arrival_date: new Date(),
          arrival_time: "06:00:00",
          price: 600000,
          qty: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          train: 3,
          type: 3,
          depart_station: 10,
          start_date: new Date(),
          start_time: "06:00:00",
          destination_station: 11,
          arrival_date: new Date(),
          arrival_time: "08:00:00",
          price: 900000,
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
