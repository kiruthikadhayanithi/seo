'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('banners', [
      {
        name: 'banner 1',
        banner_type: 1,
        status: 1,
        background_image: '/default/image/Home.png',
        order_number: 1,
        content:
          '<div><div style="color:#ce0930"><span style="font-size:40px">Welcome to you</span></div><div style="display:flex; flex-direction:row"><div style="flex:1; padding:15px 0px"><div style="align-items:center; display:flex; flex-direction:row"><div><img src="/default/image/SBO.png" /></div><div style="color:#ffffff; flex:2; padding:0px 15px"><div style="font-size:30px; padding:5px 0px">Software Engineering and Operations</div><div style="font-size:16px">Enabling Broadcom Software Group (BSG)</div></div></div></div></div></div>',
        identity_key: null,
        group: 'OM_SEO_SEOLeadershipTeam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'banner 2',
        banner_type: 1,
        status: 1,
        background_image: '/default/image/Home.png',
        order_number: 2,
        content:
          '<div><div><img alt="no_img" src="/default/image/wheel_banner.png" style="float:left; height:300px; width:300px" /></div><div style="margin-left:170px"><h1 style="margin-left:160px"><span style="color:#ce0930">Amplify Broadcom Software brand with single engagement experience</span></h1><p style="margin-left:160px; font-size:18px;"><img alt="no_img" src="/default/image/am2.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Revenue / Renewal Enablement</span></p><p style="margin-left:160px; font-size:18px;"><img alt="no_img" src="/default/image/am3.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Profit Enablement</span></p><p style="margin-left:160px; font-size:18px;"><img alt="no_img" src="/default/image/am1.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Function Focus</span></p><p style="margin-left:160px; font-size:18px;"><img alt="no_img" src="/default/image/am4.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Product Team Focus</span></p></div></div>',
        identity_key: null,
        group: 'OM_SEO_SEOLeadershipTeam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'banner 3',
        banner_type: 1,
        status: 2,
        background_image: '/default/image/Home.png',
        order_number: 6,
        content:
          '<div><div><h1 style="color:#ce0930"><span>Security Update</span><span style="font-size:20px"> (Coming Soon)</span></h1></div><div style="height:200px;"><table style="border-radius:7px; width:35%;"><tbody><tr><th colspan="2" style="background-color:#ce0930"><span style="color:#ffffff">Company</span></th></tr><tr><th style="width:50%"><span style="color:#000">My Public Attack Surface</span></th><th style="width:50%"><span style="color:#000">My Rating</span></th></tr><tr><td style="background-color:#1496df"><div style="color:#ffffff; height:10px; margin-left:auto; margin-right:auto; text-align:center; width:100px">Domains 32</div></td><td rowspan="2" style="background-color:#0ea639"><div style="color:#ffffff; height:20px; margin-left:auto; margin-right:auto; text-align:center; width:100px">A 94</div></td></tr><tr><td style="background-color:#0c9c94"><div style="color:#ffffff; height:10px; margin-left:auto; margin-right:auto; text-align:center; width:100px">IPs 102M</div></td></tr></tbody></table></div><div style="margin-top:-200px"><h1 style="margin-left:390px"><span style="color:#ce0930">Dark Reading - Top Stories</span></h1><p style="margin-left:390px"><img alt="no_img" src="/default/image/arrow.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Emotet Banking Trojan Resurfaces, skating Past Email Security</span></p><p style="margin-left:390px"><img alt="no_img" src="/default/image/arrow.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Cisco Revamps Cloud Security Strategy With New Secure Access, SASE Portfolio</span></p><p style="margin-left:390px"><img alt="no_img" src="/default/image/arrow.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff">Why Als Will Become Hackers</span></p><p style="margin-left:390px"><img alt="no_img" src="/default/image/arrow.png" style="float:left; height:20px; width:20px" /> &nbsp; <span style="color:#ffffff"><span style="background-color:#000000">How Poor Communication Opens the Door to Ransomware and Extortion</span></span></p></div></div>',
        identity_key: null,
        group: 'OM_SEO_Security',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'banner 4',
        banner_type: 1,
        status: 1,
        background_image: '/default/image/Home.png',
        order_number: 4,
        content:
          '<div><div style="color:#ce0930;"><span style="font-size:30px; padding-left:30px;">Upcoming Security Consortium Event:</span></div><div style="display:flex; flex-direction:row"><div style="flex:1; padding:15px 0px"><div style="align-items:center; display:flex; flex-direction:row"><div style="color:#ffffff; flex:2; padding:0px 15px"><div style="font-size:18px; padding-left:35px"><p style="line-height:1.5em">We are excited to launch our first Security Consortium event in San Jose, CA from Sep 27 - Sep 29, 2022 and we have over 60+ participants attending this event and 25+ sessions planned over 3 days. For more information please email <a href="mailto:seo-security.pdl@broadcom.com"><br/>SEO-Security.PDL@broadcom.com</a></p></div></div></div></div></div></div>',
        identity_key: null,
        group: 'OM_SEO_Security',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'banner 5',
        banner_type: 1,
        status: 2,
        background_image: '/default/image/Home.png',
        order_number: 5,
        content:
          '<div><div style="color:#ffffff"><span style="font-size:40px">Custom Notifications</span><span style="font-size:20px"> (Coming Soon)</span></div><div style="display:flex; flex-direction:row"><div style="flex:1; padding:15px 0px"><div style="align-items:center; display:flex; flex-direction:row"><div><img src="/default/image/Notification.png" /></div><div style="color:#ffffff; flex:2; padding:0px 15px"><div style="font-size:18px">The interfaces are very intuitive. It also offers many functionalities to protect your equipment,</div><div style="font-size:18px; padding:10px 0px"><ul><li>Symantec web security services are very helpful to manage the user experience</li><li>It was indeed a great security mechanism in terms of security measuring</li></ul></div></div></div></div></div></div>',
        identity_key: null,
        group: 'OM_SEO_SEOLeadershipTeam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'banner 6',
        banner_type: 1,
        status: 1,
        background_image: '/default/image/Home.png',
        order_number: 3,
        content:
          '<div><div style="color:#ce0930;"><span style="font-size:40px; padding-left:30px;">SEO - Security </span></div><div style="display:flex; flex-direction:row"><div style="flex:1; padding:15px 0px"><div style="align-items:center; display:flex; flex-direction:row"><div style="color:#ffffff; flex:2; padding:0px 15px"><div style="font-size:18px; padding:10px 0px"><ul style="list-style-type: none;"><li><img src="/default/image/arrow.png" />&nbsp; &nbsp;Secure and Privacy by Design philosophy</li><li><img src="/default/image/arrow.png" />&nbsp; &nbsp;Security and Privacy are everyone&#39;s responsibility</li><li><img src="/default/image/arrow.png" />&nbsp; &nbsp;Standardize, Simplify, Secure, and Optimize</li></ul></div></div></div></div></div></div>',
        identity_key: null,
        group: 'OM_SEO_SEOLeadershipTeam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('banners', null, {});
  },
};
