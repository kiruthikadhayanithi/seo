module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Platform Data Engineering',
          slug: 'platform-data-engineering',
          is_active: true,
          page_type: 2,
          is_link: 1,
          link_page: null,
          order: 0,
          group: 'OM_SEO_PlatformEngineering',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'Platform Data Engineering';`
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
        block_detial: 'Platform Data Engineering',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: null,
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<p>Platform Data Engineering provides services and support to Broadcom product teams who need to deploy data specific backend applications to a cloud native environment. This covers data services such as SQL databases, Search and Message Streaming applications. Services available to product teams include, but not limited to:</p><ul><li style="margin-bottom: 10px;">Database Architecture and Design, covering reliability and high-availability</li><li style="margin-bottom: 10px;">Data Platform and Cloud Migrations</li><li dir="ltr"><p dir="ltr">Deployment using Kubernetes Operators, Stateful Sets</p></li><li dir="ltr"><p dir="ltr">Migration from legacy/expensive databases to more cost-effective Open Source DB technologies</p></li><li dir="ltr"><p dir="ltr">Support for FedRamp requirements</p></li><li dir="ltr"><p dir="ltr">Labs</p></li></ul>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Videos',
        block_order: 5,
        block_icon: 'video.svg',
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
      {
        block_name: 'Meet The Team',
        block_order: 4,
        block_icon: 'meet.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<div style="padding:0px 15px"><div>&nbsp;</div></div><div style="padding:0px 0px"><div style="float:left"><img src="/default/image/meet.png" style="width:150px" /></div><div style="margin-left:15px; padding-top:3px"><h3 style="margin-left:160px">&nbsp;SPDE Lead:</h3><h3 style="margin-left:160px">&nbsp;<a href="mailto:sumit.aneja@broadcom.com" target="_blank">Sumit Aneja</a> (US PDT)</h3><p>&nbsp;</p><p>&nbsp;</p><ul><li style="margin-bottom: 7px;"><a href="mailto:vinay.kamble@broadcom.com" target="_blank">Vinay Kamble</a> (US PDT)</li><li style="margin-bottom: 7px;"><a href="mailto:irina.tchernakova@broadcom.com" target="_blank">Irina Tchernakova</a> (US PDT)</li><li style="margin-bottom: 7px;"><a href="mailto:pothuraju.pappula@broadcom.com" target="_blank">Poturaju Pappula</a> (US EDT)</li><li style="margin-bottom: 7px;"><a href="mailto:ravikanth.thandi@broadcom.com" target="_blank">Ravi Kanth Sivangala Thandi</a> (India IST)</li><li style="margin-bottom: 7px;"><a href="mailto:ramakrishnavs.veturi@broadcom.com" target="_blank">Ramakrishna Veturi</a> (India IST)</li><li style="margin-bottom: 7px;"><a href="mailto:saloni.srivastava@broadcom.com" target="_blank">Saloni Srivastava</a> (India IST)</li></ul></div></div>',
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
        layout_size: 1,
        block_detial:
          '<div style="display:flex; flex-direction:row"><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/learn.png" /></div><div style="flex:2; padding:0px 10px"><h3>Learn More</h3></div></div><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/quick.png" /></div><div style="flex:2; padding:0px 10px"><h3>Quick Links</h3></div></div><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/reference.png" /></div><div style="flex:2; padding:0px 10px"><h3>Support &amp; Reference</h3></div></div></div><div style="display:flex; flex-direction:row"><div style="border-radius:4px; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px">&nbsp;</div><div style="border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; display:flex; flex-direction:row"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/link.png" /></div><div style="flex:2; padding:0px 10px"><a href="https://sites.google.com/broadcom.com/saas-platform-cd-pipeline/operators" target="_blank">Kubernetes Operators</a>&nbsp;</div></div><div style="flex:2; padding:0px 10px"><img src="/default/image/link.png" style="padding-left:5px;" />&nbsp; &nbsp; &nbsp; &nbsp;<a href="https://sites.google.com/broadcom.com/saas-platform-cd-pipeline/home" target="_blank">CD Pipeline</a>&nbsp;&nbsp;</div></div><div style="border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; display:flex; flex-direction:row"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/link.png" style="padding-left:5px" /></div><div style="flex:2; padding:0px 10px"><a href="mailto:saas-platform-data.pdl@broadcom.com" target="_blank">Email the Team</a>&nbsp;</div></div><div style="flex:2; padding:0px 10px">&nbsp; <img src="/default/image/link.png" />&nbsp; &nbsp; &nbsp; <a href="https://www.google.com/url?q=https%3A%2F%2Fbrcm-bsg-global.slack.com%2Farchives%2FC028G9RU5H7&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0TN83XaKeh7tayuif0vOZy" target="_blank">Join our Slack Channel</a>&nbsp;&nbsp;</div></div></div>',
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
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div>\\n<div style=\\"align-items:center; border-bottom:1px solid #e4e5e7; display:flex; flex-direction:row; margin-bottom:0px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px\\"><img src=\\"/default/image/report.png\\" style=\\"width:auto\\" /></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D8622f7b7dbc9cc104956467239961942&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1l3-2IeZ6cbojMxPDbxTHR\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Report a SaaS Incident</a></div>\\n\\n<div style=\\"padding:5px 0px\\"><em>Database </em><em>Service impacting issue? </em><em>Raise directly with the SaaS Ops 24/7 teams for priority triage</em></div>\\n</div>\\n</div>\\n\\n<div style=\\"align-items:center; border-bottom:1px solid #e4e5e7; display:flex; flex-direction:row; margin-bottom:0px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#cc092f; border-radius:90px; border:1px solid #e4e5e7; display:flex; height:50px; justify-content:center; width:50px\\"><img src=\\"/default/image/app.png\\" /></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Raise a SaaS Request</a></div>\\n\\n<div style=\\"padding:5px 0px\\"><em>Need access to SaaS Platform Databases resources or services? Raise directly with the appropriate SaaS Platform team for review.</em></div>\\n</div>\\n</div>\\n\\n<div style=\\"align-items:center; display:flex; flex-direction:row; margin-bottom:0px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#ffffff; border-radius:90px; border:1px solid #e4e5e7; display:flex; height:50px; justify-content:center; width:50px\\"><em><em><img src=\\"/default/image/slack 2.png\\" /></em></em></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><em><em><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Access the SaaS Slack Global Channel</a></em></em></div>\\n\\n<div style=\\"padding:5px 0px\\"><em><em><em>See latest notifications from the SaaS Platform team. This is a one-way communication channel.</em></em></em></div>\\n</div>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
