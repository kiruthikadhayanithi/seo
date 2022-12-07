module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Security',
          slug: 'security',
          icon_image: '/default/image/security.png',
          short_description:
            '<ul><li>Drive secure software by design</li><li>Timely remediation of vulnerabilities</li><li>Periodic evaluation of our security risk posture</li><li>Manage risks to an acceptable level</li><li>Audit and compliance</li></ul>',
          is_active: true,
          is_link: 1,
          link_page: null,
          script_dynamic: null,
          page_type: 1,
          order: 10,
          group: 'OM_SEO_Security',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(`SELECT id,name from CHAMPIONS where name = 'Security';`);

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
        block_detial: 'Security',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Overview',
        block_order: 1,
        block_icon: '/default/image/securitybg.png',
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
        block_order: 6,
        block_icon: 'meet.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<div style="border: 0px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px"><div style="display: flex; flex-direction: row; align-items: center; ">&nbsp;</div><div><ul style="margin: 10px 0px; list-style-type:disc"><li style="margin: 10px 0px;"><a href="mailto:venkat.karpuram@broadcom.com">Venkat Karpuram</a></li><li style="margin: 10px 0px;"><a href="mailto:saravanan.nagarajan@broadcom.com">Saravanan Nagarajan</a></li></ul></div></div>',
        block_detial_json: '',
        championid: championRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        block_name: 'Useful Links',
        block_order: 5,
        block_icon: 'links.svg',
        status: true,
        card: 0,
        show_header: true,
        layout_size: 2,
        block_detial:
          '<div style="display: flex; flex-direction: row; align-items: center; ">&nbsp;</div><div><ul style="margin: 10px 0px; list-style-type:none"><li><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications" target="_blank">Cybersecurity Policies, Standards and Certifications</a></li></ul><ul style="margin: 10px 0px; list-style-type:none"><li><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://bsg-confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FpageId%3D87351847&amp;permissionViolation=true" target="_blank">Product Security Incident Response</a></li></ul><ul style="margin: 10px 0px; list-style-type:none"><li><img src="/default/image/link.png" />&nbsp; Minimum Security Controls</li></ul><ul style="margin: 10px 0px; list-style-type:none"><li><img src="/default/image/link.png" />&nbsp; Inventory of our most used toolsets</li></ul><ul style="margin: 10px 0px; list-style-type:none"><li><img src="/default/image/link.png" />&nbsp;&nbsp;<a href="https://portal.securecodewarrior.com/#/home" target="_blank">Secure Core Warrior </a>(LMS)</li></ul></div>',
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
        show_header: true,
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
          '[\r\n{\r\n"block_detial_json_id": 4,\r\n"block_detial_json_name": "Our Mission",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/mission.png",\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div>\\n<p>Our Mission is to design, implement and maintain a security program to safeguard the confidentiality, Integrity and availability of Broadcom Software applications, systems, identity and data assets by providing proactive security expertise, creating and maintaining a resilient and secure environment, and fostering a culture of security awareness and compliance throughout Broadcom Software Group (BSG).</p>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Our Policies",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/sps1.png",\r\n"block_detial_json_order": "2",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"height:auto; min-height:120px\\">\\n<ul style=\\"margin-left:0px; margin-right:0px\\">\\n\\t<li>Our policies align with Broadcom corporate policies posted on our GTO portal <a href=\\"https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications\\" target=\\"_blank\\">Cybersecurity Policies, Standards and Certifications</a></li>\\n\\t<li>Policies and other standard documents must not be shared with customers, vendors or partners without getting consent from our compliance team.</li>\\n</ul>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "2"\r\n},\r\n{\r\n"block_detial_json_id": 2,\r\n"block_detial_json_name": "Our Approach",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/security2.png",\r\n"block_detial_json_order": "3",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<ul>\\n\\t<li>Drive secure software by design</li>\\n\\t<li>Timely remediation of vulnerabilities</li>\\n\\t<li>Periodic evaluation of our security risk posture</li>\\n\\t<li>Manage risks to an acceptable level</li>\\n\\t<li>Audit and compliance</li>\\n</ul>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "2"\r\n},\r\n{\r\n"block_detial_json_id": 3,\r\n"block_detial_json_name": "Our Core functions align with Software Security best practices",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/security3.png",\r\n"block_detial_json_order": "4",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Vulnerability Management</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">Bad actors exploit known, and unknown vulnerabilities associated with applications, OS images and libraries. To combat exploitation of vulnerabilities, we used a wide variety of security scan tools (Qualys, Lacework, Blackduck &amp; more) to identify and remediate vulnerabilities in a timely manner. We work closely with SEO and BSG groups to ensure all our systems, images and applications are timely patched under committed SLA&rsquo;s in on premise and cloud environments. Additional compensating controls shall be implemented to minimize business risks to acceptable levels (non-availability of patches)</div>\\n\\n<div style=\\"margin-top:-10px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Secure SDLC</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">We work closely with all our product security champions to integrate software security best practices into product software development life cycle (SDLC) from start to finish. Software security activities include architecture risk analysis, static, dynamic, and interactive application security testing and SCA. Building security into our SDLC does require time and team effort. We believe in fixing vulnerabilities early in the SDLC process is cheaper and much faster than waiting until the delivery (CD) as it reduces our exposure to security risks. Please refer to our Minimum-Security controls Standards Document for more information(Coming soon)</div>\\n\\n<div style=\\"margin-top:-10px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Restricted Access</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">Enforcing the principle of least privilege access significantly reduces our attack surfaces by removing unwanted access to our applications and components. We use a wide variety of Privilege Access Management solutions (Cyberark, Cycode etc) to enforce and secure privileged access</div>\\n\\n<div style=\\"margin-top:-10px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Automation</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">We believe and thrive in automating our day-to-day security tasks such as firewalls reviews, vulnerability management, auditing secure configurations and much more.<br />\\n<br />\\nAutomating routine tasks allows us and the software teams to focus more on strategic and secure initiatives. We are working on a planned initiative that will drive us in automating some of our repetitive process</div>\\n\\n<div style=\\"margin-top:-10px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Penetration Testing</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">We conduct periodic penetration testing (PenTest) exercises throughout the year on all our BSG products to evaluate its security posture and find any weakness in our applications. PenTest exercises also determine the robustness of our security controls and support our compliance with data privacy and security regulations (ISO 27001, FEDRAMP, Service Organization Controls (SOC 2), PCI DSS etc.)<br />\\n<br />\\nPlease refer to our Governance, risk and Compliance section for information on our compliance requirements and certifications</div>\\n\\n<div style=\\"margin-top:-25px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Risk Assessment</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">Security Risk Management program will assist with the continuous evaluations of existing security defenses, mature our defenses against real attacks and prepare for cybersecurity compliance audits.<br />\\n<br />\\nSome of our RM initiatives include\\n<div>\\n<table>\\n\\t<tbody>\\n\\t\\t<tr classname=\\"toggle-row tcm0\\" style=\\"border-bottom:none; font-family: gotham_book_webfont\\">\\n\\t\\t\\t<td colspan=\\"2\\">\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<li>Penetration testing exercises on our software applications</li>\\n\\t\\t\\t\\t<li>Simulated tabletop exercises focused on BSG</li>\\n\\t\\t\\t\\t<li>Assess our hosted application in our cloud environments</li>\\n\\t\\t\\t</ul>\\n\\t\\t\\t</td>\\n\\t\\t\\t<td colspan=\\"2\\">\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<li>Firewall audits and standards</li>\\n\\t\\t\\t\\t<li>Adopt industry security standard benchmarks and best practices</li>\\n\\t\\t\\t\\t<li>Incident response plan (PSIRT)</li>\\n\\t\\t\\t</ul>\\n\\t\\t\\t</td>\\n\\t\\t</tr>\\n\\t</tbody>\\n</table>\\n</div>\\n</div>\\n\\n<div style=\\"margin-top:-40px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Incident Response (PSIRT)</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">Not &ldquo;if&rdquo; but &ldquo;when&rdquo;&hellip;No matter how much we adhere to software security practices, we will always face the possibility of a breach. We have developed and enforced a solid incident response plan for BSG to detect, report and quickly respond to security attacks or breaches. Our customers, white hat hackers and bug bounty professionals can report vulnerabilities to our IRT team using our established channels. (<a href=\\"mailto:psirt@broadcom.com\\">PSIRT@broadcom.com</a>)<br />\\n<br />\\nMore information of PSIRT process posted under &ldquo;<a href=\\"https://bsg-confluence.broadcom.net/pages/viewpage.action?pageId=511293316\\" target=\\"_blank\\">Product Security Incident Response</a>&rdquo;</div>\\n\\n<div style=\\"margin-top:-10px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Security Metrics</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">Security Metrics can be interpreted as a standard (or system) used for quantitatively measuring our security posture through collection, analysis and reporting of relevant performance data.<br />\\n<br />\\n- Measure what matters<br />\\n&nbsp;</div>\\n\\n<div style=\\"margin-top:-30px; border-bottom: 1px solid #C8D1E0; opacity: 0.7;\\">&nbsp;</div>\\n\\n<div style=\\"color:#CE0930; margin:0px 20px\\">\\n<p style=\\"font-size:22px;\\">Security training and awareness</p>\\n</div>\\n\\n<div style=\\"margin:20px 20px\\">Training to our developers is part of SEO Security DNA and we host a wide library of security training contents through our Learning Management Systems(LMS). We encourage our developers to complete at least one training (OWASP Top10, Secure coding etc.) every year. We believe in maintaining a security training curriculum for our developers that will go a long way in delivering secure applications to our customers.<br />\\n<br />\\n<u><b>Disclaimer:</b></u> <i>Please note some of the listed core initiatives are work in progress and we are working closely with our BSG groups to mature our process, controls and tools. We are also embarking our journey towards automation. If you have any further questions, or have suggestions or comments please write to us- <a href=\\"mailto:seo-security.pdl@broadcom.com\\"><i>SEO-Security</i></a><br />\\n<br />\\nTo see what is right and not do it is a lack of courage<br />\\n- Confucius (551- 479 BC)</i></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
