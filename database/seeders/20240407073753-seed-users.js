'use strict';

require('dotenv').config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { PASS_HASH1, PASS_HASH2 } = process.env;
    const created_at = new Date();
    const updated_at = created_at;
    await queryInterface.bulkInsert(
      'users',
      [
        {
          title: 'Mr',
          firstname: 'Chucks',
          lastname: 'Nwachukwu',
          sex: 'Male',
          passwordHash: PASS_HASH2,
          email: 'me@tochukwu.xyz',
          phone: '08037663423',
          permissionId: 1,
        },
        {
          title: 'Dr',
          firstname: 'Chukwudi',
          lastname: 'Nwachukwu',
          sex: 'Male',
          passwordHash: PASS_HASH1,
          email: 'chukwuzi@yahoo.com',
          phone: '08068508675',
          permissionId: 2,
        },
      ].map((item) => ({ ...item, created_at, updated_at })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
