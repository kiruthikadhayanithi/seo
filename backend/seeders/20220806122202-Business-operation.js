module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Business Operations',
          slug: 'business-Operations',
          icon_image: '/default/image/businessoper.png',
          short_description:
            '<ul>\n\t<li>Procurement</li>\n\t<li>Budget &amp; Forecast</li>\n\t<li>Licensing</li>\n\t<li>CRM</li>\n\t<li>ISO 9000</li>\n</ul>\n\n<ul>\n</ul>\n',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: '',
          page_type: 1,
          order: 8,
          group: 'OM_SEO_BusinessOperation',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'Business Operations';`
    );

    const championRows = champions[0];

    return queryInterface.bulkInsert('blocks', [
      {
        block_name: 'Banner',
        block_order: 1,
        block_icon: '/default/image/Home.png',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial: 'Business Operations',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 2,
        block_icon: null,
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<p>Business Operations Areas of Responsibility:</p><ul><li>Manages vendor contracts</li><li>Owns SEO budget and forecast</li><li>SED network product license management</li><li>Customer Engagement (CRM, Telemetry, Support Portal)</li><li>ISO 9001 Program</li><li>GTO liaison for for customer support/education/services tools and technology</li></ul>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Meet The Team',
        block_order: 4,
        block_icon: 'meet.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<div><ul><li>Director - SW Ops Mgmt: Jumbunathan Padmanabhan</li><li>SEO Business Operations: Stefanie Bisignano</li><li>Licensing: Housseine Rejouan</li><li>CRM: Trayshawn Hayes </li></ul></div>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Useful Links',
        block_order: 3,
        block_icon: 'links.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<p><img src="/default/image/link.png" />&nbsp;&nbsp; <a href="https://ent.box.com/s/9pkn4grl13j4ioz6ittmqv560kf1amq3" target="_blank"> BSG ISO 9001</a></p><p><img src="/default/image/link.png" />&nbsp;&nbsp; <a href="https://docs.google.com/presentation/d/1msN8CG4pEK71iCCDQUK-6ezG_IWWaEHG/edit?usp=sharing&amp;ouid=116502878534266887871&amp;rtpof=true&amp;sd=true" target="_blank"> Licensing</a></p>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Getting Support',
        block_order: 5,
        block_icon: 'support.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial:
          '<div class="cab-table"><table><tbody><tr><th>Getting Help</th><th>Name</th><th style="width:600px">Email / More Info</th></tr><tr><td>Budget &amp; Forecast</td><td>Jumbunathan Padmanabhan</td><td><div style="align-items:center; display:flex"><img src="/default/image/mail.png" /><a href="mailto:padmanabhan.jumbunathan@broadcom.com" style="margin: 0px 10px" target="_blank">padmanabhan.jumbunathan@broadcom.com</a></div></td></tr><tr><td>ISO 9001</td><td>Stefanie Bisignano</td><td><div style="align-items:center; display:flex"><img src="/default/image/mail.png" /><a href="mailto:stefanie.bisignano@broadcom.com" style="margin: 0px 10px" target="_blank">stefanie.bisignano@broadcom.com</a></div></td></tr><tr><td>Licensing</td><td>Housseine Rejouan</td><td><div style="align-items:center; display:flex"><img src="/default/image/mail.png" style="margin-top:5px" /><a href="mailto:housseine.rejouan@broadcom.com" style="margin: 0px 10px" target="_blank">housseine.rejouan@broadcom.com</a></div></td></tr><tr><td>CRM</td><td>Trayshawn Hayes</td><td><div style="align-items:center; display:flex"><img src="/default/image/mail.png" style="margin-top:5px" /><a href="mailto:trayshawn.hayes@broadcom.com" style="margin: 0px 10px" target="_blank">trayshawn.hayes@broadcom.com</a></div></td></tr></tbody></table></div>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Videos',
        block_order: 4,
        block_icon: 'video.svg',
        status: false,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial: '',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Features',
        block_order: 6,
        block_icon: null,
        status: false,
        card: 1,
        show_header: false,
        layout_size: 1,
        block_detial: '',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('blocks', null, {});
    await queryInterface.bulkDelete('champions', null, {});
  },
};
