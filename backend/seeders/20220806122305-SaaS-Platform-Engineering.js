module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Platform Engineering',
          slug: 'platform-engineering',
          icon_image: '/default/image/saasplat.png',
          short_description:
            '<p>Platform Engineering provides services and support to Broadcom product teams who need to deploy their customer-facing applications to a cloud-native environment. Functional areas include, but not limited to:</p><ul><li>A Continuous Delivery pipeline to automate delivery of product teams application to the Cloud Platform</li><li>Infrastructure Automation to provide and manage the&nbsp;Platform (Google Cloud, Azure, AWS)<ul><li>Infrastructure as Code.</li></ul></li><li>Platform as a Service with Containers &amp; Operators</li><li>Data Platform &amp; messaging/event streaming applications and the support of these services</li><li>FedRamp</li><li>Labs</li></ul><p>The Platform team works closely with product teams to understand and support their application deployment needs.<br />&nbsp;</p>',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: null,
          page_type: 1,
          order: 3,
          group: 'OM_SEO_PlatformEngineering',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'Platform Engineering';`
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
        block_detial: 'Platform Engineering',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: '/default/image/spebg.png',
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<p>Platform Engineering provides services and support to Broadcom product teams who need to deploy their customer-facing applications to a cloud-native environment. Functional areas include, but not limited to:</p><ul><li>A Continuous Delivery pipeline to automate delivery of product teams application to the Cloud Platform</li><li>Infrastructure Automation to provide and manage the&nbsp;Platform (Google Cloud, Azure, AWS)<ul><li>Infrastructure as Code.</li></ul></li><li>Platform as a Service with Containers &amp; Operators</li><li>Data Platform &amp; messaging/event streaming applications and the support of these services</li><li>FedRamp</li><li>Labs</li></ul><p>The Platform team works closely with product teams to understand and support their application deployment needs.<br />&nbsp;</p>',
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
        block_order: 5,
        block_icon: 'meet.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<div style="padding:0px 15px"><div>&nbsp;</div></div><div style="padding:0px 0px"><div style="float:left"><img src="/default/image/meet.png" style="width:150px" /></div><div style="margin-left:15px; padding-top:3px"><h3 style="margin-left:160px">&nbsp;SaaS Platform Lead:</h3><h3 style="margin-left:160px">&nbsp;<a href="mailto:ganesh.janakiraman@broadcom.com" target="_blank">Ganesh Janakiraman</a> (US PDT)</h3><p>&nbsp;</p><p>&nbsp;</p><ul><li style="margin-bottom: 7px;">US Team Lead: <a href="mailto:jose.chavez@broadcom.com" target="_blank">Jose Chavez</a> (US PDT)</li><li style="margin-bottom: 7px;">India Platform Lead: <a href="mailto:varun.srivastava@broadcom.com" target="_blank">Varun Srivastava</a> (India IST)</li><li style="margin-bottom: 7px;">Data Platform Lead: <a href="mailto:sumit.aneja@broadcom.com" target="_blank">Sumit Aneja</a> (US PDT)</li><li style="margin-bottom: 7px;">Architecture Lead: <a href="mailto:nitin.kalra@broadcom.com" target="_blank">Nitin Kalra</a> (US PDT)</li><li style="margin-bottom: 7px;">Architecture Lead: <a href="mailto:tommy.reilly@broadcom.com" target="_blank">Tommy Reilly</a> (US EDT)</li><li style="margin-bottom: 7px;">Network Architecture Lead: <a href="mailto:anil.sharma@broadcom.com" target="_blank">Anil Sharma</a> (US PDT)</li></ul></div></div>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Useful Links',
        block_order: 4,
        block_icon: 'links.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial:
          '<div style="display:flex; flex-direction:row"><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/learn.png" /></div><div style="flex:2; padding:0px 10px"><h3>Learn More</h3></div></div><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/quick.png" /></div><div style="flex:2; padding:0px 10px"><h3>Quick Links</h3></div></div><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:20px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/reference.png" /></div><div style="flex:2; padding:0px 10px"><h3>Support &amp; Reference</h3></div></div></div><div style="display:flex; flex-direction:row"><div style="border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px;height: 100%;"><ul style="list-style-type:none; padding: 0px 15px; margin: 10px 0px 0;"><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://sites.google.com/broadcom.com/saas-platform-cd-pipeline/home" style="padding-left: 15px;" target="_blank">CD Pipeline</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://sites.google.com/broadcom.com/saas-platform-cd-pipeline/operators" style="padding-left: 15px" target="_blank">Kubernetes Operators</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://sites.google.com/broadcom.com/saas-platform-cd-pipeline/operators/platform-roadmap" style="padding-left: 15px" target="_blank">Platform RoadMap</a></div></li></ul></div><div style="border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:6px; margin-right:15px; margin-top:10px; padding:10px; width:380px;height: 100%;"><ul style="list-style-type:none; padding: 0px 15px; margin: 10px 0px 0;"><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <strong><a href="/platform-data-engineering" style="padding-left: 15px;" target="_blank">Data Platform</a></strong></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fcontainer-images%2Fhome&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3mq-gWEP6dETB80zy2335j" style="padding-left: 15px" target="_blank">Broadcom Container Images</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fsaaspackerosimages%2Fhome&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1ijP1BInbGdR0X07Xh5iZ6" style="padding-left: 15px" target="_blank">Broadcom OS Packer Images</a></div></li></ul></div><div style="border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:6px; margin-right:15px; margin-top:10px; padding:10px; width:380px;height: 100%;"><ul style="list-style-type:none; padding: 0px 15px; margin: 10px 0px 0;"><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="mailto:sbo-saas-platform.pdl@broadcom.com" style="padding-left: 15px;" target="_blank">Email the Team</a></div></li></ul></div></div>',
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
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div>\\n<div style=\\"align-items:center; border-bottom:1px solid #e4e5e7; display:flex; flex-direction:row; margin-bottom:0px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px\\"><img src=\\"/default/image/report.png\\" style=\\"width:auto\\" /></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D8622f7b7dbc9cc104956467239961942&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1l3-2IeZ6cbojMxPDbxTHR\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Report a SaaS Incident</a></div>\\n\\n<div style=\\"padding:5px 0px\\"><em>Service impacting issue? Raise directly with the SaaS Ops 24/7 teams for priority triage.</em></div>\\n</div>\\n</div>\\n\\n<div style=\\"align-items:center; border-bottom:1px solid #e4e5e7; display:flex; flex-direction:row; margin-bottom:0px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#cc092f; border-radius:90px; border:1px solid #e4e5e7; display:flex; height:50px; justify-content:center; width:50px\\"><img src=\\"/default/image/app.png\\" /></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Raise a SaaS Request</a></div>\\n\\n<div style=\\"padding:5px 0px\\"><em>Need access to SaaS Platform resources or services? Raise directly with the appropriate SaaS Platform team for review.</em></div>\\n</div>\\n</div>\\n\\n<div style=\\"align-items:center; display:flex; flex-direction:row; margin-bottom:0px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#ffffff; border-radius:90px; border:1px solid #e4e5e7; display:flex; height:50px; justify-content:center; width:50px\\"><em><em><img src=\\"/default/image/slack 2.png\\" /></em></em></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><em><em><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Access the SaaS Slack Global Channel</a></em></em></div>\\n\\n<div style=\\"padding:5px 0px\\"><em><em><em>See latest notifications from the SaaS Platform team. This is a one-way communication channel.</em></em></em></div>\\n</div>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
