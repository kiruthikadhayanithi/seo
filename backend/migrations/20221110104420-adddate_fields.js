module.exports = {
  async up(queryInterface) {
    return Promise.all([
      queryInterface.addColumn('banners', 'start_date', {
        type: 'TIMESTAMP WITH TIME ZONE',
      }),
      queryInterface.addColumn('banners', 'end_date', {
        type: 'TIMESTAMP WITH TIME ZONE',
      }),
    ]);
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('banners', 'start_date'),
      queryInterface.removeColumn('banners', 'end_date'),
    ]);
  },
};
