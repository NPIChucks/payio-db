'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = createdAt;
    const permissions = [
      { code: 'rd', label: 'Read' },
      { code: 'wrt', label: 'Write' },
      { code: 'udt', label: 'Update' },
      { code: 'del', label: 'Delete' },
      { code: 'adm', label: 'Admin' },
      { code: 'sadm', label: 'Super Admin' },
    ].map((item) => ({
      ...item,
      createdAt,
      updatedAt,
    }));
    await queryInterface.bulkInsert('permissions', permissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permissions', null, {});
  },
};
