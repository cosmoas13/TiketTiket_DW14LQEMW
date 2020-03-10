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
        },
        {
          train: 2,
          type: 2,
          depart_station: 1,
          start_date: new Date(),
          start_time: new Date(),
          destination_station: 2,
          arrival_date: new Date(),
          arrival_time: new Date(),
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
          start_time: new Date(),
          destination_station: 11,
          arrival_date: new Date(),
          arrival_time: new Date(),
          price: 600000,
          qty: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          train: 1,
          type: 1,
          depart_station: 5,
          start_date: new Date(),
          start_time: new Date(),
          destination_station: 6,
          arrival_date: new Date(),
          arrival_time: new Date(),
          price: 600000,
          qty: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          train: 2,
          type: 1,
          depart_station: 8,
          start_date: new Date(),
          start_time: new Date(),
          destination_station: 5,
          arrival_date: new Date(),
          arrival_time: new Date(),
          price: 600000,
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
