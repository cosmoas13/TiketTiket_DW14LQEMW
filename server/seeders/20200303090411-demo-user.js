"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id_card: "1603030335353223",
          name: "Nafas",
          username: "john",
          email: "john@email.com",
          password:
            "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG", //1234
          gender: "Male",
          phone: "+69 380 788",
          address: "Address john",
          level: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_card: "13030302253223223",
          name: "Smith",
          username: "smith",
          email: "smith@email.com",
          password:
            "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG", //1234
          gender: "Male",
          phone: "+69 980 788",
          address: "Address smith",
          level: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
