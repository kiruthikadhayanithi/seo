'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('banners', 'endpoint_url', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('banners', 'endpoint_type', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('banners', 'endpoint_token', {
        type: Sequelize.TEXT,
      }),
      queryInterface.addColumn('banners', 'endpoint_tokentype', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('banners', 'username', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('banners', 'password', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'banners',
        'endpoint_url',
        'endpoint_type',
        'endpoint_token',
        'endpoint_tokentype',
        'username',
        'password'
      ),
    ]);
  },
};
