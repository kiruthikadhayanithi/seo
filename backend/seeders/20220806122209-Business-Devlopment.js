module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Business Development',
          slug: 'business-devlopment',
          icon_image: '/default/image/business.png',
          short_description:
            '<p>Enables product teams to deliver on roadmap requirements, perform build/buy/partner analysis, and maximize profitability &amp; efficiency forour 3rd Party licensing products and services</p>\n',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: '',
          page_type: 1,
          order: 6,
          group: 'OM_SEO_BusinessDevelopment',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'Business Development'`
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
        block_detial: 'Business Development',
        block_detial_json: null,
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 2,
        block_icon: '/default/image/businessDevelopmentbg.png',
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<p>Business Development manages the overall process connected to the inbound licensing of third party technologies distributed within Broadcom solutions. Responsibilities include:</p>\n\n<ul>\n\t<li>Buy, Build, Partner analysis in concert with Product Management</li>\n\t<li>Managing entire deal lifecycle of inbound technology licenses, OEM &amp; resell\n\t<ul>\n\t\t<li>Coordinating the deal process with Product Management, Finance, Legal, Engineering, Business Operations, and Management</li>\n\t</ul>\n\t</li>\n\t<li>Managing partner relationship</li>\n\t<li>Focused on maximizing profitability, productivity and minimizing liabilities</li>\n</ul>\n',
        block_detial_json: null,
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
        layout_size: 1,
        block_detial:
          '<div style="font-family:gotham_book_webfont; font-size:20px; padding-bottom:2rem"><strong><span style="color:#cc092f; margin-right: 10px;">Inbound Licensing Team</span></strong><a href="mailto:kris.bugbee@broadcom.com" style="text-decoration:none;" target="_blank"> Kris Bugbee</a> (VP, Operations Shared Services)</div><div style="display:flex"><div>&nbsp;</div><div style="display:flex"><div><p style="text-align:center"><a href="mailto:jean-claude.beneventi@broadcom.com" style="text-decoration:none;" target="_blank">Jean-Claude Beneventi</a></p><div style="background:#f9f9f9; border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:15px; margin-right:15px; margin-top:10px; padding:5px; width:280px"><div style="padding:2px 0px">SED &amp; IMS (split)</div><div style="padding:2px 0px">Deal Management from explore to execution &amp; hand-off</div><div style="padding:2px 0px">Supporting the <strong>End Point</strong> <strong>Security</strong> and <strong>Endpoint</strong> <strong>Management</strong> as well as<strong> Network Protection</strong></div></div></div><div><p style="text-align:center"><a href="mailto:kenneth.jensen@broadcom.com" style="text-decoration:none;" target="_blank">Ken Jensen</a></p><div style="background:#f9f9f9; border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:15px; margin-right:15px; margin-top:10px; padding:5px; width:280px"><div style="padding:2px 0px">SED &amp; IMS (split)</div><div style="padding:2px 0px">Deal Management from explore to execution &amp; hand-off</div><div style="padding:2px 0px">Supporting the <strong>Information Security, Identity Security</strong> and <strong>STAR/GIN</strong> Teams</div></div></div><div><p style="text-align:center"><a href="mailto:jeffrey.brown@broadcom.com" style="text-decoration:none;" target="_blank">Jeff Brown</a></p><div style="background:#f9f9f9; border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:15px; margin-right:15px; margin-top:10px; padding:5px; width:280px"><div style="padding:2px 0px">AOD</div><div style="padding:2px 0px">Deal Management from explore to execution &amp; hand-off</div><div style="padding:13px 0px">Supporting <strong>NetOps, ValueOps,</strong> and <strong>Essential Products</strong> Teams</div></div></div></div></div>',
        block_detial_json: null,
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Useful Links',
        block_order: 5,
        block_icon: 'links.svg',
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
        block_name: 'Getting Support',
        block_order: 6,
        block_icon: 'support.svg',
        status: false,
        card: 0,
        show_header: false,
        layout_size: 2,
        block_detial: '',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Videos',
        block_order: 7,
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
        block_order: 3,
        block_icon: null,
        status: true,
        card: 1,
        show_header: false,
        layout_size: 1,
        block_detial: '',
        block_detial_json:
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Engagement Process",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/bd1.png",\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div><img alt=\\"image1\\" src=\\"/default/image/business2.png\\" style=\\"width:100%\\" /></div>\\n\\n<p>&nbsp;</p>\\n\\n<div><img alt=\\"image1\\" src=\\"/default/image/business1.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
