'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('banners', 'start_date', {
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn('banners', 'end_date', {
        type: Sequelize.DATE,
      }),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('banners', 'start_date'),
      queryInterface.removeColumn('banners', 'end_date'),
    ]);
  },
};
