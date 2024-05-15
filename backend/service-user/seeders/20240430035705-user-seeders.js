'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Daniel Siahaan',
        profession: "Admin Micro",
        role: "admin",
        email: "dsiahaan581@gmail.com",
        password: await bcrypt.hash('secretLife11', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Niel S',
        profession: "Front End Developer",
        role: "student",
        email: "niel08@gmail.com",
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
