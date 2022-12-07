module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Cloud Finops',
          slug: 'cloudfinops',
          icon_image: '/default/image/cloud.png',
          short_description:
            ' <ul><li>Controls and governs cloud costs and consumption</li><li>Reviews spending and recommends ways to save</li><li>Examines cloud utilization across businesses to ensure we are leveraging the best technology and services for our products</li></ul>',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: null,
          page_type: 1,
          order: 5,
          group: 'OM_SEO_CloudFinOps',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(`SELECT id,name from CHAMPIONS where name = 'Cloud Finops';`);

    const championRows = champions[0];

    return queryInterface.bulkInsert('blocks', [
      {
        block_name: 'Banner',
        block_order: 0,
        block_icon: '/default/image/Home.png',
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial: 'Cloud Finops',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: '/default/image/cloudfinopsbg.png',
        status: true,
        card: 0,
        show_header: false,
        layout_size: 1,
        block_detial:
          '<p>FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to get&nbsp; maximum business<br />value by helping engineering, finance, technology and business teams to collaborate on data-driven spending decisions.</p><p>FinOps is a culture rather than technology or operations. The intent is for all the people involved with the cloud infrastructure to take ownership of the cloud costs and optimize&nbsp; the spend.</p><p>In Broadcom, SEO manages the Cloud accounts centrally and provides the following<br />&nbsp; &nbsp;1. Transparency and Visibility to costs<br />&nbsp; &nbsp;2. Recommendations on reducing unnecessary usage, eliminating waste and&nbsp; optimize the spend<br />&nbsp; &nbsp;3. Create best practices to automate the process.</p>',
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
        show_header: false,
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
          '[\r\n{\r\n"block_detial_json_id": 10,\r\n"block_detial_json_name": "Mission Statement",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/mission.png",\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div>\\n<p>FinOps @Broadcom mission is to create a Governance model in controlling the Cloud costs in optimizing the Cloud resources &amp; Spend by leveraging Resource based discounts, Committed discounts and Contractual discounts.</p>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 10,\r\n"block_detial_json_name": "Goal",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/goal.png",\r\n"block_detial_json_order": "2",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div>\\n<p>Our Goal is to create transparency in Cloud costs billing, Empower the teams with Data, Tools and Training to create a Cost Conscious Culture across the Broadcom</p>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "2"\r\n},\r\n{\r\n"block_detial_json_id": 11,\r\n"block_detial_json_name": "Vision",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/vision.png",\r\n"block_detial_json_order": "3",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div>\\n<p>Create a Cost Conscious Culture from the ground up by enabling the Architects, Engineers and Operations personnel who can take decisions in utilizing the cloud resources in the most cost efficient manner.</p>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "2"\r\n},\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "4",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">Who manages FinOps from SEO?</h1>\\n\\n<hr />\\n<p dir=\\"ltr\\">Following 2&nbsp;people provide FinOps from the SEO. It is their part-time responsibility in addition to other day-to-day tasks they handle.&nbsp;</p>\\n\\n<ul>\\n\\t<li>Venkat Karpuram (GCP, Incorta and Looker)</li>\\n\\t<li>Ramesh Dhanaraj (AWS)</li>\\n\\t<li>Thomas Brown (Azure)</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 2,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "5",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">What is FinOps Framework?</h1>\\n\\n<hr />\\n<p>FinOps framework is to bring maturity to create visibility so that the costs can be optimized and operated in an automated manner.</p>\\n\\n<p style=\\"height:220px;\\"><img src=\\"/default/image/cloud1.png\\" style=\\"width:100%; height:240px;\\" /></p>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "2"\r\n},\r\n{\r\n"block_detial_json_id": 3,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "6",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">What does SEO provide?</h1>\\n\\n<hr />\\n<ul>\\n\\t<li>Works with various vendors to negotiate the better terms and discounts at Broadcom level.</li>\\n\\t<li>Continuously work with the Cloud vendors to sort out billing issues and make necessary billing adjustments which would favor Broadcom.</li>\\n\\t<li>Periodically checks for anomalies in cloud spend to ensure that there are no surprises or inaccuracies in spend.</li>\\n\\t<li>Works with various teams to understand their usage, provide visibility to their costs and also recommendations on optimizing the spend.</li>\\n\\t<li>Looks at the patterns of usage and purchases long term commitments (Reserved Instances, Continued Use Discounts) to maximize the savings.</li>\\n\\t<li>Provide time to the product teams when they have questions on the billing, discounts or any clarifications on the Cloud resources and costs.</li>\\n\\t<li>Act as a liaison between the Broadcom product teams and Cloud vendors</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "2"\r\n},\r\n{\r\n"block_detial_json_id": 4,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "7",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">What are the challenges in FinOps Practice?</h1>\\n\\n<hr />\\n<p>According to the FinOps.org (image source of finops.org) below, the major challenges are having Engineers take action or how to manage the shared costs.</p>\\n\\n<p>SEO has been working closely to target the four big aras below</p>\\n\\n<p><img src=\\"/default/image/FinOps.png\\" style=\\"width:100%\\" /></p>\\n\\n<ul>\\n\\t<li>Dealing with Shared Costs: SEO is reducing the number of projects which need to be shared by different product teams or BU&rsquo;s. This will eliminate the need for allocation of resources &amp; costs.</li>\\n\\t<li>Accurate Forecasting : SEO is helping the product teams by providing the estimates/forecasts based on the past trends and also providing recommendations on the way to save costs.</li>\\n\\t<li>Reducing waste or unused resources: Reducing waste: SEO constantly looks at the patterns of usage and provides recommendations to the teams on consuming the resources in the specific regions to reduce the waste.</li>\\n\\t<li>Getting Engineers to take action: This has been the constant challenge due to the delayed flow of information to the Engineering teams to take action. SEO is working on the Looker project to make the information available and accessible immediately for the Engineers to take action.</li>\\n</ul>\\n\\n<p>Availability of Data</p>\\n\\n<ul>\\n\\t<li>Incorta Dashboards : These dashboards are primarily used to provide the direct and allocated costs of the cloud to the various product teams and the BU.s</li>\\n\\t<li>Looker (WIP) : Not everyone has access to the Incorta and the raw data so that it can be sliced and diced for reporting. We are investing in Looker to give the raw data access to the product teams so that the information is available on an on-demand basis without any delays.</li>\\n\\t<li>Monthly report : Folks who don&#39;t have access to the Incorta or Looker can use the Box drive for viewing their monthly usage. We will soon provide Looker dashboards in the similar format.</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 8,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "8",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">Cloud Billing and Utilization</h1>\\n\\n<hr />\\n<p>Availability of Data</p>\\n\\n<ul>\\n\\t<li>Incorta Dashboards : These dashboards are primarily used to provide the direct and allocated costs of the cloud to the various product teams and the BU.s</li>\\n\\t<li>Looker (WIP) : Not everyone has access to the Incorta and the raw data so that it can be sliced and diced for reporting. We are investing in Looker to give the raw data access to the product teams so that the information is available on an on-demand basis without any delays.</li>\\n\\t<li>Monthly report : Folks who don&#39;t have access to the Incorta or Looker can use the Box drive for viewing their monthly usage. We will soon provide Looker dashboards in the similar format.</li>\\n</ul>\\n\\n<table>\\n\\t<tbody>\\n\\t\\t<tr>\\n\\t\\t\\t<th>Tool</th>\\n\\t\\t\\t<th>Dashboards</th>\\n\\t\\t</tr>\\n\\t\\t<tr>\\n\\t\\t\\t<td>Incorta</td>\\n\\t\\t\\t<td>GCP\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<li><a href=\\"https://ace-lvn-it-03.lvn.broadcom.net:8443/incorta/!engr_apps/#/dashboard/50e53671-bdb9-4d0c-b194-950c6daf90bf\\" target=\\"_blank\\">GCP Product and Platform By Resource Spend</a></li>\\n\\t\\t\\t\\t<li><a href=\\"https://ace-lvn-it-03.lvn.broadcom.net:8443/incorta/!engr_apps/#/dashboard/80b1c39d-a778-437a-8ca8-549931aa24a6\\" target=\\"_blank\\">GCP Product and Platform Allocated Spend</a></li>\\n\\t\\t\\t</ul>\\n\\t\\t\\tAWS\\n\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<li><a href=\\"https://ace-lvn-it-03.lvn.broadcom.net:8443/incorta/!engr_apps/#/dashboard/06b105ee-1fbd-44b6-a27c-829f485039d1\\" target=\\"_blank\\">AWS Project Spend</a></li>\\n\\t\\t\\t\\t<li><a href=\\"https://ace-lvn-it-03.lvn.broadcom.net:8443/incorta/!engr_apps/#/dashboard/a43a5ccc-6a10-4c8d-845b-48aa380ad89c\\" target=\\"_blank\\">AWS Product and Platform Allocated Spend</a></li>\\n\\t\\t\\t</ul>\\n\\t\\t\\tAzure\\n\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<li><a href=\\"https://ace-lvn-it-03.lvn.broadcom.net:8443/incorta/!engr_apps/#/dashboard/a882114c-d2ef-4c03-9f94-be2795bd2ed6\\" target=\\"_blank\\">Azure Product Spend</a></li>\\n\\t\\t\\t</ul>\\n\\t\\t\\t</td>\\n\\t\\t</tr>\\n\\t\\t<tr>\\n\\t\\t\\t<td colspan=\\"2\\">Looker (WIP)</td>\\n\\t\\t</tr>\\n\\t\\t<tr>\\n\\t\\t\\t<td colspan=\\"2\\">Monthly Reports (WIP)</td>\\n\\t\\t</tr>\\n\\t</tbody>\\n</table>\\n<style type=\\"text/css\\">table,tr,td {\\nborder: 1px solid #C8D1E0;\\n  border-collapse: collapse;\\n}\\n</style>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 5,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "9",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">How can the cost be reduced</h1>\\n\\n<hr />\\n<p>Many organizations move from the data centers to the cloud to get flexibility. However, they will be surprised with the costs of the cloud. The added flexibility can add enormous financial costs if it&#39;s not managed properly.</p>\\n\\n<ul>\\n\\t<li>Cloud is meant for flexibility for varying or having few bursts over a period of time. A Lift and shift strategy with constant workload will easily increase the costs in the cloud.</li>\\n\\t<li>The following 3 strategies employed will bring the cloud costs to a manageable level.</li>\\n</ul>\\n\\n<div style=\\"background:#ffffff; border-radius:4px; border:1px solid #c6c6c6; padding-left:15px\\">\\n<p>Right sizing: Most resources in the on-premise work load are configured for peak load. Sizing the resources for average workload and bursting for peak usage will significantly reduce the cloud costs.</p>\\n\\n<p>Optimize: Various optimizations can be done by choosing the right inexpensive machine types, storage options and minimal network transfers can reduce the workload. Use of committed use discounts, using cost optimal storage and reducing the usage of egress will reduce the costs.</p>\\n\\n<p>Reducing the running of idle instances when not needed and making use of spot or preemptible machines for burst load can reduce the costs significantly.</p>\\n</div>\\n\\n<p><img alt=\\"image3\\" src=\\"/default/image/graph2.png\\" style=\\"width:100%\\" /></p>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 6,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "10",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">Cloud FinOps Roadmap</h1>\\n\\n<hr />\\n<p>We partnered with Google to create a roadmap and the process to get to the maturity in Cloud optimization.</p>\\n\\n<p><img alt=\\"image4\\" src=\\"/default/image/cloud5.png\\" style=\\"width:100%\\" /></p>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 9,\r\n"block_detial_json_name": null,\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "11",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<h1 style=\\"font-size:25px\\">Resource</h1>\\n\\n<hr />\\n<ul>\\n\\t<li><a href=\\"https://ace-lvn-it-03.lvn.broadcom.net:8443/incorta/!engr_apps/#/catalog\\" target=\\"_blank\\">Incorta Dashboards Home</a></li>\\n\\t<li><a href=\\"https://docs.google.com/spreadsheets/d/1kiVGnNAImd9lejy1UmSyXNR1LDm64vBfJMyh0K1zEsg/edit#gid=291766286\\" target=\\"_blank\\">Broadcom contractual cost for CPU, Memory and Disk</a></li>\\n\\t<li><a href=\\"https://docs.google.com/spreadsheets/d/1EaAoTbQsa6qUUGjOnz2VA3OU1zmwKXVDSKg7KJ095Ds/edit#gid=411705504\\" target=\\"_blank\\">GCP Pricing Calculator</a></li>\\n\\t<li><a href=\\"https://broadcom.cloud.looker.com/\\" target=\\"_blank\\">Looker</a></li>\\n</ul>\\n\\n<p>ServiceNow Ticketing for Requests [WIP]</p>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
