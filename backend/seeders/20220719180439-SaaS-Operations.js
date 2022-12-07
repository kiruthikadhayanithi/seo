module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'SaaS Operations',
          slug: 'saas-operations',
          icon_image: '/default/image/saas.png',
          short_description:
            '<ul>\n\t<li>Aligns BSG operational standards across SaaS products</li>\n\t<li>Provides 24/7 operational support and response services</li>\n\t<li>Partners with product teams to continuously improve their operational posture and drive down the associated costs</li>\n</ul>\n',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: null,
          page_type: 1,
          order: 2,
          group: 'OM_SEO_SaasOps',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(`SELECT id,name from CHAMPIONS where name = 'SaaS Operations';`);

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
        block_detial: 'SaaS Operations',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: '/default/image/saasopsbg.png',
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<p>SaaSOps is a comprised of three functional areas including:</p><ul><li>Service Operations - 24/7 Operational Supportfor SaaS products with proven ITIL Standard processes</li><li>SPE - Service Management New Product Onboarding, ProductCapacity Management</li><li>Business Operations, ITSM tools, Metric &amp; Reporting</li></ul>',
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
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Video 1",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "https://drive.google.com/file/d/1VEBnWAmu0BvcPeOvccHjz7uu_KO-kETN/view",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "",\r\n"block_detial_json_banner_text": ""\r\n},\r\n{\r\n"block_detial_json_id": 2,\r\n"block_detial_json_name": "Video 2",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "https://drive.google.com/file/d/1cL6fczwmPp4eSsZE-V-2PVVUdIac5ZrA/view",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "",\r\n"block_detial_json_banner_text": ""\r\n},\r\n{\r\n"block_detial_json_id": 3,\r\n"block_detial_json_name": "Video 3",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "https://drive.google.com/file/d/1Ddkg2gioOIY4Q_dz0Ov169qNuTlOj0u2/view",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "",\r\n"block_detial_json_banner_text": ""\r\n},\r\n{\r\n"block_detial_json_id": 4,\r\n"block_detial_json_name": "Video 4",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "https://drive.google.com/file/d/1tS9mwGTOTWzF0-8Bog6gTmg4AqtueyEh/view",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "",\r\n"block_detial_json_banner_text": ""\r\n},\r\n{\r\n"block_detial_json_id": 5,\r\n"block_detial_json_name": "Video 5",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "https://drive.google.com/file/d/1SjgBeLocjtBCn4RUrTmjrwpm17W61-Pg/view",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "",\r\n"block_detial_json_banner_text": ""\r\n}\r\n]',
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
          '<div style="padding:0px 15px"><h3>Name: <a href="https://docs.google.com/presentation/d/1XeY0l-qu6GUDmrQ9d1Hn_zt2CkVIlcKIdJ8eebQfZcc/edit#slide=id.gd52a7df01e_0_0" target="_blank">Saas Operations</a></h3></div><div style="padding:0px 15px; display: flex;"><div><img src="/default/image/meet.png" style="width:150px" /></div><div style="margin-left:15px; padding-top:3px"><h3 style="margin: 0;"><strong>Saas Ops:</strong><a href="mailto:David.Pook@broadcom.com" target="_blank"> David Pook</a></h3><ul style="padding: 0px 20px;"><li style="margin-bottom: 7px;">&nbsp; &nbsp;Service Ops: <a href="mailto:Mahomed.Ravuth@broadcom.com" target="_blank">Mo Ravuth</a></li><li style="margin-bottom: 7px;">&nbsp; &nbsp;SRE: <a href="mailto:Roger.harrison@broadcom.com" target="_blank">Roger Harrison</a></li><li style="margin-bottom: 7px;">&nbsp; &nbsp;Biz Ops: <a href="mailto:James.Partridge@Broadcom.com" target="_blank">James Patridge</a></li></ul></div></div><div style="padding: 0px 15px; margin-top: 15px;"><div style="align-items:center; background:#ffffff; border-radius:90px; border:1px solid #e4e5e7; display:flex; float:left; height:50px; justify-content:center; width:50px"><img src="/default/image/slack 2.png" style="width:auto" /></div><div style="flex:2"><div style="color:#000000; font-weight:600; text-decoration:underline;padding-left: 70px;"><a href="https://www.google.com/url?q=https%3A%2F%2Fslack.com%2Fapp_redirect%3Fchannel%3DC021J5T0TPV&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2QVg0lwuD4I0_qHWuv09w-" target="_blank">Join Our Incident notification broadcast channel</a></div><div style="padding-top:5px"><em style="padding-left:20px; font-size:13px;"><strong>Keep Updated </strong>on all service impacting incidents! (Broadcast Only)</em></div></div></div>',
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
          '<div style="display:flex; flex-direction:row"><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/learn.png" /></div><div style="flex:2; padding:0px 10px"><h3>Learn More</h3></div></div><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/quick.png" /></div><div style="flex:2; padding:0px 10px"><h3>Quick Links</h3></div></div><div style="align-items:center; background:#fafbfe; border-radius:4px; box-shadow:0px 1px 2px rgba(0, 0, 0, 0.25); display:flex; flex-direction:row; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/reference.png" /></div><div style="flex:2; padding:0px 10px"><h3>Reference</h3></div></div></div><div style="display:flex; flex-direction:row"><div style="border-radius:4px; border:1px solid #c6c6c6; height:320px; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; display:flex; flex-direction:row"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/vector 1.png" /></div><div style="flex:2; padding:0px 10px; color: #3272d9"><a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FIncident%2BManagement%2Band%2BEngagement%2Bwith%2BSaaSOps&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0l7sb1lUqwfA1H2_2pHrOQ" target="_blank"><strong>Knowledge Hub</strong></a> (VPN)</div></div><div><h4 style="margin-left:30px"><strong>Process &#39;How-tos&#39;(VPN)</strong></h4><ul style="list-style-type:none; margin-right:20px"><li><div style="padding-bottom:15px"><img src="/default/image/link.png" />&nbsp;<a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FIncident%2BManagement%2Band%2BEngagement%2Bwith%2BSaaSOps&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0l7sb1lUqwfA1H2_2pHrOQ" style="padding-left: 10px" target="_blank">Incident Management Enagagement</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRaising%2Ba%2BEmergency%2BChange&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0p2MoEg_S84lCXqtOI7ZuM" style="padding-left: 10px" target="_blank">Raise an Emergency Change</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRaising%2Ba%2BNormal%2BChange&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw23D2gDre1ray6Sblt6uYi2" style="padding-left: 10px" target="_blank">Raise a Normal Change</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRaising%2Ba%2BStandard%2Bchange&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw16IwdQ7f3mpAhKQLx0M_pn" style="padding-left: 10px" target="_blank">Raise a Standard Change</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FImplementation%2BPlan%2BTemplates&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0ofrGcVOCAWzyYcbFGjlEk" style="padding-left: 10px" target="_blank">Implementation Plan Templates</a></div></li></ul></div></div><div style="border-radius:4px; border:1px solid #c6c6c6; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; display:flex; flex-direction:row"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/service.png" /></div><div style="flex:2; padding:0px 10px"><a href="https://www.google.com/url?q=https%3A%2F%2Fstatus.broadcom.com&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2CYTj33RfHLQEIG25_cBTZ" target="_blank"><strong>Service Status Page</strong></a></div></div><div><h4 style="margin-left:30px"><strong>Core Process</strong></h4><ul style="list-style-type:none; margin-right:20px"><li><div style="padding-bottom:15px; color: #3272d9"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdownload%2Fattachments%2F175010748%2FChange_Management_Process.docx%3Fapi%3Dv2&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw10xIV8znpzck2eXit33Mz8" style="padding-left: 10px" target="_blank">Change Management</a>(VPN)</div></li><li><div style="padding-bottom:15px; color: #3272d9"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdownload%2Fattachments%2F175010748%2FLogging_an_Incident.docx%3Fapi%3Dv2&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3NSj48vU9kaNDhdZPHrD7Z" style="padding-left: 10px" target="_blank">Incident Management</a>(VPN)</div></li><li><div style="padding-bottom:15px; color: #3272d9"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRelease%2BProcess&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2gzGCFwen9ZcsGzisJfCZi" style="padding-left: 10px" target="_blank">Release Management</a>(VPN)</div></li></ul><h4 style="margin-left:30px"><strong>Key Reference Items</strong></h4><ul style="list-style-type:none; margin-right:20px"><li><div style="padding-bottom:15px; color: #3272d9"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FClassification%2BMatrix&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3lxw5z11ET7z22jB9oR2P2" style="padding-left: 10px" target="_blank">Incident Classification Matrix</a>(VPN)</div></li><li><div style="padding-bottom:15px; color: #3272d9"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FPersonal%2BData%2BBreach%2BProcess&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0spERzY-YcymJAE5FNDeQ-" style="padding-left: 10px" target="_blank">Personal Data Breach</a>(VPN)</div></li><li><div style="padding-bottom:15px; color: #3272d9"><img src="/default/image/link.png" /> <a href="https://drive.google.com/file/d/1uPjnrJ81jxSLgutFMteSXvXnh-bN2EJy/view?usp=sharing" style="padding-left: 10px" target="_blank">RCA Guidance</a>(VPN)</div></li></ul></div></div><div style="border-radius:4px; border:1px solid #c6c6c6; height:175px; margin-bottom:10px; margin-left:0px; margin-right:15px; margin-top:10px; padding:10px; width:380px"><div style="align-items:center; display:flex; flex-direction:row"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/reporting.png" /></div><div style="flex:2; padding:0px 10px"><h4><strong>SaasOps Reporting</strong></h4></div></div><ul style="list-style-type:none; margin-right:40px"><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fsbo-portal%2Fhome%2Fsaasops%2Fproducts-support&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1zGDuGtS58ySzwtHnz3zHs" style="padding-left: 10px" target="_blank">Products &amp; Support</a></div></li><li><div style="padding-bottom:15px"><img src="/default/image/link.png" /> <a href="https://drive.google.com/drive/u/0/folders/0AK_FIeTH7r2kUk9PVA" style="padding-left: 10px" target="_blank">Service Review Archive</a></div></li></ul><div>&nbsp;</div></div></div>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Getting Support',
        block_order: 6,
        block_icon: 'support.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<div style="border-radius:4px; border:1px solid #c6c6c6; margin: 10px; padding:10px; padding-bottom: 20px;"><div style="align-items:center; display:flex; flex-direction:row"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/getting.png" /></div><div style="flex:2; padding:0px 10px"><h4 style="margin: 0;">Non urgent issue or request?</h4></div></div><div><ul style="list-style-type:none; margin: 0; margin-left:20px"><li><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz" target="_blank">Raise a Support Request</a></li></ul><div style="align-items:center; display:flex; flex-direction:row; margin-top: 15px;"><div style="align-items:center; display:flex; height:50px; justify-content:center; width:50px"><img src="/default/image/sbot.png" /></div><div style="flex:2; padding:0px 10px"><h4 style="margin: 0;">At your service...</h4></div></div><ul style="list-style-type:none; margin: 0; margin-left:20px"><li><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fbsg-bot%2Fhome&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1X98Qe-VLIOSNLevWB6J9_" target="_blank">How to use BSG-Bot</a></li></ul></div></div>',
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
          '[\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Feature",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": 1,\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div>\\n<div style=\\"align-items:center; border-bottom:1px solid #e4e5e7; display:flex; flex-direction:row; margin-bottom:0px; margin-left:15px; margin-right:15px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px\\"><img src=\\"/default/image/report.png\\" style=\\"width:auto\\" /></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsaas_sp%3Fid%3Dsc_cat_item%26sys_id%3D8622f7b7dbc9cc104956467239961942&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3jXM0Vfs4P2ZCE9AMuTd6Z\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Report a SaaS Incident</a></div>\\n\\n<div style=\\"padding:5px 0px\\"><em><strong>Service impacting issue? </strong>Raise directly with our 24/7 teams for priority triage.</em></div>\\n</div>\\n</div>\\n\\n<div style=\\"align-items:center; border-bottom:1px solid #e4e5e7; display:flex; flex-direction:row; margin-bottom:0px; margin-left:15px; margin-right:15px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#ffffff; border-radius:90px; border:1px solid #e4e5e7; display:flex; height:50px; justify-content:center; width:50px\\"><img src=\\"/default/image/slack 2.png\\" /></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fslack.com%2Fapp_redirect%3Fchannel%3DC021Q4DU1LL&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2UeEYh89l4x3oH4RWVaJa2\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">Slack-SaaSOps - 24/7 Tier 1</a></div>\\n\\n<div style=\\"padding:5px 0px\\"><em><strong>Urgent issue? </strong>Connect directly with our 24/7 tier 1 team <strong>- (Emergency Escalation Only)</strong></em></div>\\n</div>\\n</div>\\n\\n<div style=\\"align-items:center; display:flex; flex-direction:row; margin-bottom:0px; margin-left:15px; margin-right:15px; margin-top:0px; padding:15px 10px\\">\\n<div style=\\"padding-right:20px\\">\\n<div style=\\"align-items:center; background:#cc092f; border-radius:90px; display:flex; height:50px; justify-content:center; width:50px\\"><em><em><img src=\\"/default/image/calculator.png\\" /></em></em></div>\\n</div>\\n\\n<div style=\\"flex:2\\">\\n<div><em><em><a href=\\"https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPSUP%2FService_Ops_MGR_OnCall_Rota&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1QovpTr_K2m3q64MpiZScS\\" style=\\"color: #CC092F; font-weight: 600;\\" target=\\"_blank\\">SaaSOps Time-zone leads On-call rota (VPN)</a></em></em></div>\\n\\n<div style=\\"padding:5px 0px\\"><em><em><em><strong>Urgent issue?</strong> Connect with our time-zone leaders, 24/7 coverage for <strong>all</strong> escalations.</em></em></em></div>\\n</div>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
