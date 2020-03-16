"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "payments",
      [
        {
          user_id: 1,
          train_id: 1,
          qty: 1,
          total: 300000,
          status: "Approved",
          attachment: "bca.jpg"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  }
};
