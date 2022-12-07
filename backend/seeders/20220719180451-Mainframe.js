module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Mainframe Support',
          slug: 'mainframe-support',
          icon_image: '/default/image/mainframe.png',
          short_description:
            '<ul><li>Provides infrastructure and operations support</li><li>Maintains dev, test, and production environments </li><li>Builds specialty environments and processes for MSD</li></ul>',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: null,
          page_type: 1,
          order: 4,
          group: 'OM_SEO_MainframeSupport',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'Mainframe Support';`
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
        block_detial: 'Mainframe Support',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: '/default/image/mainframebg.png',
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<div>Welcome to the Mainframe Infrastructure Support site. Our goal is to provide mainframe infrastructure support and services to assist with ongoing R&D development. In this site, you will find information to assist with your mainframe infrastructure support needs.</div>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Videos',
        block_order: 3,
        block_icon: 'video.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial: '',
        block_detial_json:
          ' [\r\n  {\r\n      "block_detial_json_id": 1,\r\n      "block_detial_json_name": "mainframe 1",\r\n      "block_detial_json_type": "1",\r\n      "block_detial_json_url": "https://www.youtube.com/watch?v=ximv-PwAKnc",\r\n      "block_detial_json_file": null,\r\n      "block_detial_json_is_active": true,\r\n      "block_detial_json_icon": null,\r\n      "block_detial_json_order": "",\r\n      "block_detial_json_show_header": true,\r\n      "block_detial_json_description": "",\r\n      "block_detial_json_banner_text": ""\r\n  },\r\n  {\r\n      "block_detial_json_id": 2,\r\n      "block_detial_json_name": "mainframe 2",\r\n      "block_detial_json_type": 1,\r\n      "block_detial_json_url": "https://www.youtube.com/watch?v=PBKJ4TR59W4",\r\n      "block_detial_json_file": null,\r\n      "block_detial_json_is_active": true,\r\n      "block_detial_json_icon": null,\r\n      "block_detial_json_order": "",\r\n      "block_detial_json_show_header": true,\r\n      "block_detial_json_description": "",\r\n      "block_detial_json_banner_text": ""\r\n  },\r\n  {\r\n      "block_detial_json_id": 3,\r\n      "block_detial_json_name": "mainframe 3",\r\n      "block_detial_json_type": 1,\r\n      "block_detial_json_url": "https://www.youtube.com/watch?v=2-gBYZv6AmM",\r\n      "block_detial_json_file": null,\r\n      "block_detial_json_is_active": true,\r\n      "block_detial_json_icon": null,\r\n      "block_detial_json_order": "",\r\n      "block_detial_json_show_header": true,\r\n      "block_detial_json_description": "",\r\n      "block_detial_json_banner_text": ""\r\n  }\r\n]',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Meet The Team',
        block_order: 6,
        block_icon: 'meet.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial:
          '<div style="margin-bottom:20px; margin-left:0px; margin-right:0px; margin-top:20px"><div class="mainSup" style="display:flex; flex-direction:row"><div style="margin-bottom:0px; margin-left:10px; margin-right:10px; margin-top:0px"><div><img src="/default/image/ken.png" style="height:150px; width:150px" /></div></div><div style="flex:1; margin-bottom:0px; margin-left:15px; margin-right:15px; margin-top:0px"><div style="font-weight:900; padding:5px 0px">Mainframe: <span style="color:#3272d9">Ken Barrett</span></div><div style="padding:5px 0px; text-align:center"><span style="color:#3272d9">Frank Kiss</span></div><div style="background:#f9f9f9; border-radius:4px; border:1px solid #c6c6c6; font-weight:600; margin-bottom:10px; margin-left:0px; margin-right:0px; margin-top:10px; padding:5px"><div style="padding:2px 0px">Infrastructure</div><div style="padding:2px 0px">Architecture/Engineering</div><div style="padding:2px 0px">Data Center</div><div style="padding:2px 0px">Virtual Systems</div><div style="padding:2px 0px">z/VM</div><div style="padding:2px 0px">z/OS &amp; subsystems</div></div><div style="background:#ffffff; border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:0px; margin-right:0px; margin-top:10px; padding:5px"><div style="padding:2px 0px"><span style="color:#3272d9">Tim Dowdy</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Bob Lane</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Jim McPhillips</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Stan Swain</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Prabha Mutala</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Sibi Gunasekaran</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Nicholas Gailes</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Mark Mueller</span></div></div></div><div style="flex:1; margin-bottom:0px; margin-left:15px; margin-right:15px; margin-top:0px"><div style="padding:5px 0px">&nbsp;</div><div style="padding:5px 0px; text-align:center"><span style="color:#3272d9">Don Axon</span></div><div style="background:#f9f9f9; border-radius:4px; border:1px solid #c6c6c6; font-weight:600; margin-bottom:10px; margin-left:0px; margin-right:0px; margin-top:10px; padding:5px"><div style="padding:2px 0px">Database</div><div style="padding:2px 0px">Applications</div><div style="padding:2px 0px">Mainframe</div><div style="padding:2px 0px">Scheduling</div><div style="padding:2px 0px">Security</div><div style="padding:2px 0px">Operations</div><div style="padding:2px 0px">z/OS &amp; subsystems</div><div style="padding:2px 0px">IBM Relationship</div><div style="padding:2px 0px">Franchise Relationship</div><div style="padding:2px 0px">Budget Support</div><div style="padding:2px 0px">Disaster Recovery</div></div><div style="background:#ffffff; border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:0px; margin-right:0px; margin-top:10px; padding:5px"><div style="padding:2px 0px"><span style="color:#3272d9">Joe Teryek</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Stephen Singer</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Jr Bigornia</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Kerry Weber</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Andrew Trapp</span></div><div style="padding:2px 0px"><span style="color:#3272d9">Operations Staff</span></div></div></div><div style="flex:1; margin-bottom:0px; margin-left:15px; margin-right:15px; margin-top:0px"><div style="padding:5px 0px">&nbsp;</div><div style="padding:5px 0px; text-align:center"><span style="color:#3272d9">Brad Foxhall</span></div><div style="background:#f9f9f9; border-radius:4px; border:1px solid #c6c6c6; font-weight:600; margin-bottom:10px; margin-left:0px; margin-right:0px; margin-top:10px; padding:5px"><div style="padding:2px 0px">Infrastructure</div><div style="padding:2px 0px">Architecture</div><div style="padding:2px 0px">Networking</div></div></div></div></div>',
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
          '<p><span style="font-size:14px"><strong><span style="color:#ce0930">On this site you will find:</span></strong></span></p><p><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://drive.google.com/drive/folders/0AKJjBHLzkoAoUk9PVA" target="_blank">Mainframe R&amp;D Documentation </a></p><p><img src="/default/image/link.png" />&nbsp; Mainframe Solutions Team <a href="https://drive.google.com/drive/folders/0ACLPRv7Nv7ikUk9PVA" target="_blank"> Announcements </a></p><p><img src="/default/image/link.png" />&nbsp; Announcements Current hardware configurations <a href="https://docs.google.com/spreadsheets/d/1h800lC9xeZGiaHwyvvib2YaoYQGAzoRMm3HCMJd03cQ/edit#gid=1323021429" target="_blank"> (z/15 &amp; z/16) </a></p><p><img src="/default/image/link.png" />&nbsp; Mainframe Services current <a href="https://docs.google.com/spreadsheets/d/1zrqn3V3Y7otiBv7JXDroFPhYGP7TqkhJjWWohdbgclM/edit" target="_blank"> Projects and Initiatives </a></p><p><img src="/default/image/link.png" />&nbsp; How to request work from Mainframe using <a href="https://docs.google.com/document/d/1Q4gAJiY8cXUvVINLZdR4yInTk8nGfbfMhQWmB4POH5M/edit" target="_blank"> Agile Central </a></p><p><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://brcm-bsg-global.slack.com/archives/G01RE11QWH1" target="_blank">Mainframe System programmers </a></p><p><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://brcm-bsg-global.slack.com/archives/G01RMTS36Q4" target="_blank">Mainframe Operations </a></p><p><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://brcm-bsg-global.slack.com/archives/G01R908SMTQ" target="_blank">Mainframe DBAs</a></p><p>&nbsp;</p>',
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
          '<div class="cab-table"><table><tbody><tr><th>Getting Help</th><th>Name</th><th style="width:600px">Email / More Info</th></tr><tr><td>Finding Answers</td><td>SlackBot</td><td><div style="align-items:center; display:flex">&nbsp;<img src="/default/image/slack 2.png" style="background:#ffffff; border-radius:90px; border:1px solid #e0e0e0; padding:8px" /><a href="https://app.slack.com/client/T01MTJCTQNM/D01NEATBLLT/thread/G01SJG8FRAM-1655140005.706089" style="margin: 0px 15px" target="_blank">Open Slack</a></div></td></tr><tr><td>First Level for help or issues</td><td><a href="https://broadcomprd.service-now.com/saas_sp" target="_blank">Broadcom SEO Support</a></td><td><div style="align-items:center; display:flex">&nbsp;&nbsp;<img src="/default/image/i.png" style="background:#ffffff; border-radius:60%; border:1px solid #e0e0e0; padding:10px 15px" /><span style="margin: 0px 10px;">Select &#39;Report a Mainframe Incident&#39; Select the appropriate Mainframe - business service from the drop-down</span></div></td></tr><tr><td>Escalation - First Level</td><td>Contact Mainframe Operations</td><td><div style="align-items:center; display:flex">&nbsp; &nbsp;&nbsp;<img src="/default/image/mail.png" /><a href="mailto: mailto:mainframeops.pdl@broadcom.com" style="margin-left: 20px" target="_blank"> mainframeops.pdl@broadcom.com</a></div></td></tr><tr><td>Escalation - Second Level</td><td>Contact Mainframe On-Call Personnel</td><td><div style="align-items:center; display:flex">&nbsp; &nbsp;&nbsp;<img src="/default/image/mail.png" style="margin-top:5px" /><a href="mailto:mainframesolutions.pdl@broadcom.com" style="margin-left: 20px">mainframesolutions.pdl@broadcom.com</a></div></td></tr><tr><td>Escalation - Third Level</td><td>Ken Barrett</td><td><div style="align-items:center; display:flex">&nbsp; &nbsp;&nbsp;<img src="/default/image/mail.png" style="margin-top:5px" /><a href="mailto:Ken.barrett@broadcom.com" style="margin-left: 20px">ken.barrett@broadcom.com</a></div></td></tr></tbody></table></div>',

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
        show_header: true,
        layout_size: 1,
        block_detial: '',
        block_detial_json:
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Who Uses Mainframe Infrastructure Support?",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/main.png",\r\n"block_detial_json_order": 1,\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<ul>\\n\\t<li>All mainframe-centric research and development teams</li>\\n\\t<br />\\n\\t<li>All product development teams</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
