module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'SaaS Platform Services (SPS)',
          slug: 'saas-platform-services',
          icon_image: '/default/image/saasservices.png',
          short_description:
            ' Provides common subscription lifecycle and tenant management,supportability, identity services and business operation tools for allSaaS products.<ul><li>Auto Provisioning</li><li>Tenant Management</li><li>Subscription Lifecycle Enforcement</li><li>Renewal Reminders</li><li>Customer Onboarding</li><li>Business Operations Portal</li><li>Product “News” Notifications</li></ul>',
          is_active: true,
          is_link: 1,
          link_page: '',
          script_dynamic: null,
          page_type: 1,
          order: 7,
          group: 'OM_SEO_SaaSPlatformService',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'SaaS Platform Services (SPS)';`
    );

    const championRows = champions[0];

    return queryInterface.bulkInsert('blocks', [
      {
        block_name: 'Banner',
        block_order: 0,
        block_icon: '/default/image/Home.png',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial: 'SaaS Platform Services (SPS)',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: null,
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
        block_name: 'Videos',
        block_order: 3,
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
        block_name: 'Meet The Team',
        block_order: 5,
        block_icon: 'meet.svg',
        status: false,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial: '',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Useful Links',
        block_order: 4,
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
        block_name: 'Features',
        block_order: 2,
        block_icon: null,
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial: '',
        block_detial_json:
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Subscription Provisioning and Lifecycle",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/sps1.png",\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"margin-bottom:15px; margin-left:0px; margin-right:0px; margin-top:15px\\">Provide resilience and visibility on subscription related events, ensuring compliance with respect to data retention. Drive towards a consistent entitlement experience for all BSG customers.</div>\\n\\n<ul style=\\"margin-left:0px; margin-right:0px\\">\\n\\t<li>Standardized and auditable customer onboarding through welcome emails and login tracking</li>\\n\\t<li>Subscription renewal reminders</li>\\n\\t<li>Standard data retention compliance workflow</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "0",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 2,\r\n"block_detial_json_name": "Customer Self-Service",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/sps2.png",\r\n"block_detial_json_order": "2",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"margin-bottom:15px; margin-left:0px; margin-right:0px; margin-top:15px\\">Improve the customer experience and reduce support costs by providing end users with the tools to perform general tenant and subscription management and exercise their data privacy rights.</div>\\n\\n<ul style=\\"margin-left:0px; margin-right:0px\\">\\n\\t<li>Basic subscription and tenant management</li>\\n\\t<li>IDP registeration and management</li>\\n\\t<li>User profile and notification settings</li>\\n\\t<li>Granting Broadcom Support access</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "0",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 3,\r\n"block_detial_json_name": "Business Operations",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/sps3.png",\r\n"block_detial_json_order": "3",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"margin-bottom:15px; margin-left:0px; margin-right:0px; margin-top:15px\\">Empower support providers with the tools to troubleshoot and rectify tenant and subscription issues. To provide product stakeholders with business insights and user communication channels.</div>\\n\\n<ul style=\\"margin-left:0px; margin-right:0px\\">\\n\\t<li>Provisioning dashboard with ticketing integration</li>\\n\\t<li>Subscription and tenant management</li>\\n\\t<li>Partner support console (aggregator)</li>\\n\\t<li>Product news</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "0",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 4,\r\n"block_detial_json_name": "Identity and Authorization",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/sps4.png",\r\n"block_detial_json_order": "4",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"margin-bottom:15px; margin-left:0px; margin-right:0px; margin-top:15px\\">Provide product teams a standardized mechanism to manage users and access, while driving consistent access behavior between products and adhering to industry standards.</div>\\n\\n<ul style=\\"margin-left:0px; margin-right:0px\\">\\n\\t<li>User identity and profile management</li>\\n\\t<li>Role-based access control lists</li>\\n\\t<li>IDP-based just-in-time user creation</li>\\n</ul>\\n\\n<p style=\\"margin-top: 40px;\\"><a href=\\"https://bsg-confluence.broadcom.net/pages/viewpage.action?pageId=369577762\\" style=\\"color:#FFF;text-decoration:none;\\" target=\\"_blank\\"><span style=\\"marginTop: 25px; background-color:#CC092F;width:120px;padding:10px;\\">Learn More ➜</span></a></p>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "0",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
