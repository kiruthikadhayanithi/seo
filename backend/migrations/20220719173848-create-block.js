'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      block_name: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      block_order: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      block_icon: {
        type: Sequelize.STRING(150),
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      card: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      show_header: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      layout_size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      block_detial: {
        type: Sequelize.TEXT,
      },
      block_detial_json: {
        type: Sequelize.TEXT,
      },
      championid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'champions',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blocks');
  },
};
