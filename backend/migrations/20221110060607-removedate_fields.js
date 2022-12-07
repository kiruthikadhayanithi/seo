module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('banners', 'start_date', {
        type: Sequelize.DATE,
      }),
      queryInterface.removeColumn('banners', 'end_date', {
        type: Sequelize.DATE,
      }),
    ]);
  },

  down(queryInterface) {
    return Promise.all([queryInterface.addColumn('banners', 'start_date'), queryInterface.addColumn('banners', 'end_date')]);
  },
};
