module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('champions', [
      {
        name: 'BSG Marketing',
        slug: null,
        icon_image: '/default/image/bsg.png',
        short_description:
          '<ul><li>Builds and promotes our Broadcom Software brand and identity</li><li> Aligns and engages with sales as our strategic internal customer</li><li> Supports our divisional marketing efforts to drive new growth, renewals, capacity, and adoption</li> <li>Engages with our strategic external customers</li><li> Attains and fosters industry/market recognition from Industry Analysts</li></ul>',
        is_active: true,
        is_link: 2,
        link_page: 'https://sites.google.com/broadcom.com/sales-resource-center/bsg-marketing',
        script_dynamic: null,
        page_type: 1,
        order: 9,
        group: 'OM_SEO_BSGMarketing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('champions', null, {});
  },
};
