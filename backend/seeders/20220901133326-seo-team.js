module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'SEO Leadership Team',
          slug: 'SEO-leadership-team',
          icon_image: '/default/image/wheel2.png',
          short_description:
            '<div><p>SEO enables BSG to focus on customers. Improve customer value, experience and perception.</p></div><div style="position: relative;"><img src="/default/image/arrow.png" style="position: absolute; top: 3px;" /><p style="color:#ce0930;margin-bottom: 0px;margin-left: 30px;">Revenue/Renewal Enablement&nbsp;</p><p style="color:#ce0930;margin-top: 0px;margin-left: 30px;"><span style="color: rgb(51, 51, 51);">Effective and Efficient enforcement of customer contract and regulatory complaince</span></p></div><div style="position: relative;"><img src="/default/image/arrow.png" style="position: absolute;top: 3px;" /><p style="color:#ce0930;margin-bottom: 0px;margin-left: 30px;">Product Team Focus&nbsp;</p><p style="color:#ce0930;margin-top: 0px;margin-left: 30px;"><span style="color: rgb(51, 51, 51);">Focus on building and delivering great products with decreased time to market and increased customer adoption</span></p></div><div style="position: relative;"><img src="/default/image/arrow.png" style="position: absolute;top: 3px;" /><p style="color:#ce0930;margin-bottom: 0px;margin-left: 30px;">Profit Enablement&nbsp;</p><p style="color:#ce0930;margin-top: 0px;margin-left: 30px;"><span style="color: rgb(51, 51, 51);">Reduce R&amp;D costs and COGS</span></p></div><div style="position: relative;"><img src="/default/image/arrow.png" style="position: absolute;top: 3px;" /><p style="color:#ce0930;margin-bottom: 0px;margin-left: 30px;">Function Focus&nbsp;</p><p style="color:#ce0930;margin-top: 0px;margin-left: 30px;"><span style="color: rgb(51, 51, 51);">Focus on improving customer engagement and expericence</span></p></div>',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: '',
          page_type: 1,
          order: 0,
          group: 'OM_SEO_SEOLeadershipTeam',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'SEO Leadership Team'`
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
        block_detial: 'SEO Leadership Team',
        block_detial_json: null,
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 2,
        block_icon: '',
        status: false,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial: '',
        block_detial_json: null,
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Meet The Team',
        block_order: 4,
        block_icon: '',
        status: false,
        card: 0,
        show_header: true,
        layout_size: 1,
        block_detial: '',
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
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "team1",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image1\\" src=\\"/default/image/team1.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 2,\r\n"block_detial_json_name": "team2",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "2",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image2\\" src=\\"/default/image/team2.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 3,\r\n"block_detial_json_name": "team3",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "3",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image3\\" src=\\"/default/image/team3.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 4,\r\n"block_detial_json_name": "team4",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "4",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image\\" src=\\"/default/image/team4.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 5,\r\n"block_detial_json_name": "team5",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "5",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image5\\" src=\\"/default/image/team5.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 6,\r\n"block_detial_json_name": "team14",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "6",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image14\\" src=\\"/default/image/team14.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 7,\r\n"block_detial_json_name": "team6",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "7",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image6\\" src=\\"/default/image/team6.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 8,\r\n"block_detial_json_name": "team7",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "8",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image7\\" src=\\"/default/image/team7.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 9,\r\n"block_detial_json_name": "team8",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "9",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image8\\" src=\\"/default/image/team8.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 10,\r\n"block_detial_json_name": "team9",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "10",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image9\\" src=\\"/default/image/team9.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 11,\r\n"block_detial_json_name": "team10",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "11",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image10\\" src=\\"/default/image/team10.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 12,\r\n"block_detial_json_name": "team11",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "12",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image11\\" src=\\"/default/image/team11.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 13,\r\n"block_detial_json_name": "team12",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "13",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image12\\" src=\\"/default/image/team12.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 14,\r\n"block_detial_json_name": "team13",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "14",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><img alt=\\"image13\\" src=\\"/default/image/team13.png\\" style=\\"width:100%\\" /></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
