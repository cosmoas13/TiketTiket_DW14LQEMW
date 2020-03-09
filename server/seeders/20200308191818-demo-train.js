"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trains",
      [
        {
          name: "Argo Wilis",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      [
        {
          name: "Wilis Argo",
          type: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      [
        {
          name: "Shinkansen",
          type: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trains", null, {});
  }
};
