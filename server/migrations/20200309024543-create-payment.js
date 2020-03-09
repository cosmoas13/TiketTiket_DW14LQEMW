'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      train_id: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      depart: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      },
      total: {
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
    return queryInterface.dropTable('payments');
  }
};