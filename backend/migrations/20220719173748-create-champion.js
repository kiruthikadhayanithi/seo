'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('champions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING(150),
      },
      icon_image: {
        type: Sequelize.STRING(150),
      },
      short_description: {
        type: Sequelize.TEXT,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      is_link: {
        type: Sequelize.INTEGER,
      },
      link_page: {
        type: Sequelize.STRING(150),
      },
      script_dynamic: {
        type: Sequelize.TEXT,
      },
      page_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      order: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      group: {
        type: Sequelize.STRING,
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
  async down(queryInterface) {
    await queryInterface.dropTable('champions');
  },
};
