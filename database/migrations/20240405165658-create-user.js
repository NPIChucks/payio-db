'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, STRING, ENUM, DATE } = Sequelize;
    await queryInterface.createTable('users', {
      userId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: STRING(10),
      },
      firstname: {
        type: STRING(30),
        allowNull: false,
      },
      lastname: {
        type: STRING(30),
        allowNull: false,
      },
      sex: {
        type: ENUM(['Male', 'Female']),
      },
      passwordHash: {
        type: STRING(250),
      },
      email: {
        type: STRING(50),
        unique: true,
      },
      phone: {
        type: STRING(14),
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
      permissionId: {
        name: 'staff_permission_fkey',
        type: INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'permissions',
          },
          key: 'permissionId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staffs');
  },
};
