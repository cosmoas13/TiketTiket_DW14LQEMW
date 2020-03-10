"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "types",
      [
        {
          name: "Ekonomi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bisnis",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eksekutif",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("types", null, {});
  }
};
