module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'champions',
      [
        {
          name: 'Governance Risk Compliance',
          slug: 'governance-risk-compliance',
          icon_image: '/default/image/grc.png',
          short_description:
            '<div><p>The mission of the SEO Governance, RIsk, and Compliance team is to enable Broadcom business units to safely and efficiently navigate the threat landscape across both public and private operating environments. We facilitate achievement of industry-recognized certifications, mitigate risk through a consistent approach to vulnerability management, and provide secure cloud computing solutions to our stakeholders.</p><ul><li>Governance &amp; FinOps</li><li>Risk Management<ul><li>Vulnerability Management</li><li>Vendor Risk Management</li></ul></li><li>Compliance<ul><li>Technology Compliance<ul><li>Certification: ISO, SOC, etc</li><li>Customer / Vendor Contract Compliance</li><li>Customer Request for Information or Audit</li><li>Privacy: GDPR, CCPA, EBAG, DORA, etc</li></ul></li><li>Federal Government / DoD Compliance<ul><li>Certification: FedRAMP, CMMC, DISA</li></ul></li></ul></li></ul></div>',
          is_active: true,
          is_link: 1,
          link_page: '',
          script_dynamic:
            "let governance = document.getElementsByClassName('governance-finops');governance[0].onclick = function(event) {event.preventDefault();governance[1].scrollIntoView();document.documentElement.scrollTop = document.documentElement.scrollTop - 120};let risk= document.getElementsByClassName('risk-management');risk[0].onclick = function(event) {event.preventDefault();risk[1].scrollIntoView();document.documentElement.scrollTop = document.documentElement.scrollTop - 120};let technology= document.getElementsByClassName('technology-compliance');technology[0].onclick = function(event) {event.preventDefault();technology[1].scrollIntoView();document.documentElement.scrollTop = document.documentElement.scrollTop - 120};let federal= document.getElementsByClassName('federal-government');federal[0].onclick = function(event) {event.preventDefault();federal[1].scrollIntoView();document.documentElement.scrollTop = document.documentElement.scrollTop - 120}",
          page_type: 1,
          order: 11,
          group: 'OM_SEO_GovernanceRiskCompliance',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const champions = await queryInterface.sequelize.query(
      `SELECT id,name from CHAMPIONS where name = 'Governance Risk Compliance';`
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
        block_detial: 'Governance Risk Compliance (GRC)',
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
          '[\r\n{\r\n"block_detial_json_id": 5,\r\n"block_detial_json_name": "Links",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": null,\r\n"block_detial_json_order": "1",\r\n"block_detial_json_show_header": false,\r\n"block_detial_json_description": "<div><button class=\\"governance-finops\\" style=\\"\\n      padding: 10px;\\n      border: none;\\n      margin-right: 20px;\\n      background: #cc092f;\\n      color: #fff;\\n      font-size: 16px;\\n      margin-left: -3px;\\n      width: 275px;\\n    \\">Governance &amp; FinOps</button><button class=\\"risk-management\\" style=\\"\\n      padding: 10px;\\n      border: none;\\n      margin-right: 20px;\\n      background: #cc092f;\\n      color: #fff;\\n      font-size: 16px;\\n      width: 275px;\\n    \\">Risk Management</button><button class=\\"technology-compliance\\" style=\\"\\n      padding: 10px;\\n      border: none;\\n      margin-right: 20px;\\n      background: #cc092f;\\n      color: #fff;\\n      font-size: 16px;\\n      width: 275px;\\n    \\">Technology Compliance</button><button class=\\"federal-government\\" style=\\"\\n      padding: 10px;\\n      border: none;\\n      background: #cc092f;\\n      color: #fff;\\n      font-size: 16px;\\n    \\">Federal Government / DoD compliance</button></div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "0",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 1,\r\n"block_detial_json_name": "Governance & FinOps",\r\n"block_detial_json_type": "1",\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/grc1.png",\r\n"block_detial_json_order": "2",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div class=\\"governance-finops\\" style=\\"display: flex\\">\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px; margin: 10px; width: 50%;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Cloud FinOps</h2>\\n\\n<p>SEO provides access to compute resources within various public cloud platforms including AWS, Azure, and GCP. &nbsp;The Cloud FinOps team ensures that individual subscriptions created for project teams are billed back to their respective cost centers, and that vendor relationships are maintained with all cloud vendors to ensure the most effective service delivery and competitive pricing.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful links:</h2>\\n\\n<ul>\\n\\t<li style=\\"padding-bottom: 10px;\\">Amazon Web Services (AWS) info: <a href=\\"https://broadcomitsm.wolkenservicedesk.com/wolken-support/kbsearch/article?articleNumber=KB0006419\\" target=\\"_blank\\">KB0006419</a></li>\\n\\t<li style=\\"padding-bottom: 10px;\\">Google Cloud Platform (GCP) info: <a href=\\"https://broadcomitsm.wolkenservicedesk.com/wolken-support/kbsearch/article?articleNumber=KB0005296\\" target=\\"_blank\\">KB0005296</a></li>\\n\\t<li>Microsoft Azure Cloud info: <a href=\\"https://broadcomitsm.wolkenservicedesk.com/wolken-support/kbsearch/article?articleNumber=KB0008467\\" target=\\"_blank\\">KB0008467</a></li>\\n</ul>\\n</div>\\n\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px; margin: 10px;width: 50%;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Corporate Security Policies</h2>\\n\\n<p>We are governed by our corporate security policies. It is important that we adhere to these policies. These policies can be found within My Broadcom Portal by clicking on GTO and then Cybersecurity.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px; \\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li><a href=\\"https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications/corporate-information-security-policies\\" target=\\"_blank\\">Corporate Information Security Policies</a></li>\\n</ul>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 2,\r\n"block_detial_json_name": "Risk Management",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/grc2.png",\r\n"block_detial_json_order": "3",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div style=\\"display: flex\\">\\n<div class=\\"risk-management\\" style=\\"\\n      background-color: #fff;\\n      border: 1px solid #efeaea;\\n      padding: 15px;\\n      margin: 10px;\\n      width: 33.33%;\\n    \\">\\n<h2 style=\\"color: #ce0930; font-weight: 100; font-size: 22px; margin-top: 0px\\">Vulnerability Management</h2>\\n\\n<p>Bad actors exploit known, and unknown vulnerabilities associated with applications, OS images and libraries. To combat exploitation of vulnerabilities, we used a wide variety of security scan tools (e.g. Qualys, Lacework, Blackduck) to identify and remediate vulnerabilities in a timely manner. We work closely with SEO and BSG groups to ensure all our systems, images and applications are timely patched under committed SLAs in on premise and cloud environments. Additional compensating controls shall be implemented to minimize business risks to acceptable levels in the event of non-availability of patches or other circumstances.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight: 100; font-size: 22px; margin-top: 0px\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li style=\\"padding-bottom: 10px\\"><a href=\\"https://account.box.com/login?redirect_url=https%3A%2F%2Fent.box.com%2Fs%2Fqbi8md7pio5491r2idq3tipb5iwqsd01\\" target=\\"_blank\\">Vulnerability Management Policy</a></li>\\n\\t<li style=\\"padding-bottom: 10px\\"><a href=\\"https://account.box.com/login?redirect_url=https%3A%2F%2Fent.box.com%2Fs%2F0dcqfffl39banxr7zd5g0h790gms60jc\\" target=\\"_blank\\">Security Patch Management Policy</a></li>\\n\\t<li><a href=\\"https://account.box.com/login?redirect_url=https%3A%2F%2Fent.box.com%2Fs%2F3mdanjoaptwobcax5kraljeexa4prwae\\" target=\\"_blank\\">Hardening Guidelines</a></li>\\n</ul>\\n</div>\\n\\n<div style=\\"\\n      background-color: #fff;\\n      border: 1px solid #efeaea;\\n      padding: 15px;\\n      margin: 10px;\\n      width: 33.33%;\\n    \\">\\n<h2 style=\\"color: #ce0930; font-weight: 100; font-size: 22px; margin-top: 0px\\">Vendor Risk Management (VRM) and Vendor Contracts</h2>\\n\\n<p>We leverage many vendors who have access to Broadcom data or Broadcom customer data. We must ensure that our vendors are appropriately securing such data. This is accomplished by including appropriate security and privacy terms in contracts with our vendors, and by performing vendor risk assessments on these critical suppliers</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight: 100; font-size: 22px; margin-top: 0px\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li style=\\"padding-bottom: 10px\\"><a href=\\"https://portal.broadcom.com/group/employees/procurement-materials\\" target=\\"_blank\\">VRM Documentation on Procurement Portal</a></li>\\n\\t<li><a href=\\"https://account.box.com/login?redirect_url=https%3A%2F%2Fent.box.com%2Fs%2Fztb9ei775ivcwxr2xs1mvl13r6g6xy6a\\" target=\\"_blank\\">Supplier Risk Program Policy</a></li>\\n</ul>\\n</div>\\n\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px;  margin: 10px; width: 33.33%;\\">\\n<h2 style=\\"color: #ce0930; font-weight: 100; font-size: 22px; margin-top: 0px\\">Business Continuity Planning (BCP) and Disaster Recovery</h2>\\n\\n<p>It is vital that we build appropriate resiliency into our customer environments and that we test at least annually to ensure that we can meet the required Recovery Time Objective (RTO) and Recovery Point Objective (RPO).</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight: 100; font-size: 22px; margin-top: 0px\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li style=\\"padding-bottom: 10px\\"><a href=\\"https://account.box.com/login?redirect_url=https%3A%2F%2Fent.box.com%2Fs%2F5dwojhpoxfgzexrxl7qfyhb3vk8wjblv\\" target=\\"_blank\\">Corporate Business Continuity and Disaster Recovery Policy</a></li>\\n\\t<li style=\\"padding-bottom: 10px\\"><a href=\\"https://confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FpageId%3D724758507&amp;permissionViolation=true\\" target=\\"_blank\\">SaaS Business Continuity and Disaster Recovery Page</a></li>\\n\\t<li><a href=\\"https://confluence.broadcom.net/login.action?os_destination=%2Fdownload%2Fattachments%2F637054660%2FBroadcom_SaaS_Business_Continuity_Plan_v3.0.pdf%3Fversion%3D1%26modificationDate%3D1631248032000%26api%3Dv2&amp;permissionViolation=true\\" target=\\"_blank\\">Broadcom SaaS Business Continuity Plan</a></li>\\n</ul>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 3,\r\n"block_detial_json_name": "Technology Compliance",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/grc3.png",\r\n"block_detial_json_order": "4",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<p class=\\"technology-compliance\\">Technology Compliance ensures that we have appropriate security practices in place allowing us to meet all regulatory, customer, framework, and policy-driven requirements.</p>\\n\\n<div style=\\"display: flex\\">\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px; margin: 10px; width: 50%;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">SOC 2</h2>\\n\\n<p>SOC 2 (pronounced &quot;sock two&quot; and more formally known as Service Organization Control 2), reports on various organizational controls related to security, availability, processing integrity, confidentiality and privacy. Broadcom maintains SOC 2 reports for its cloud solutions, which are regularly requested by Broadcom&rsquo;s customers who perform risk analysis on their vendors.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li style=\\"padding-bottom: 10px;\\"><a href=\\"https://confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DINFOSEC%26title%3DAssistance%2BPortal&amp;permissionViolation=true#tab-Certification\\" target=\\"_blank\\">GRC Assistance Portal Containing current SOC reports</a></li>\\n\\t<li><a href=\\"https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/serviceorganization-smanagement.html\\" target=\\"_blank\\">AICPA SOC for Service Organizations Page</a></li>\\n</ul>\\n</div>\\n\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px;  margin: 10px; width: 50%;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">ISO/IEC 27001</h2>\\n\\n<p>ISO/IEC 27001 provides requirements for an information security management system (ISMS). ISO/IEC 27001 enables organizations to manage the security of assets such as financial information, intellectual property, employee details or information entrusted by third parties. Several Broadcom SaaS products have ISO 27001 certification.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li style=\\"padding-bottom: 10px;\\"><a href=\\"https://confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DINFOSEC%26title%3DAssistance%2BPortal&amp;permissionViolation=true#tab-Certification\\" target=\\"_blank\\">GRC Assistance Portal Containing current ISO 27001 Certificate and Statement of Applicability</a></li>\\n\\t<li><a href=\\"https://www.iso.org/isoiec-27001-information-security.html\\" target=\\"_blank\\">International Standards Organization 27001 Page</a></li>\\n</ul>\\n</div>\\n</div>\\n\\n<div style=\\"display: flex\\">\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px;  margin: 10px; width: 50%;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Customer Contract Compliance with Security Terms</h2>\\n\\n<p>Customers will often provide contractual security terms that Broadcom will be required to adhere to. It is important to ensure that the terms requested by our customers accurately reflect practices Broadcom has in place.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li><a href=\\"https://confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DINFOSEC%26title%3DAssistance%2BPortal&amp;permissionViolation=true\\" target=\\"_blank\\">Request Review of Contract Security Terms</a></li>\\n</ul>\\n</div>\\n\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px; margin: 10px; width: 50%;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Customer Request for Information (RFI) or Audit</h2>\\n\\n<p>Broadcom customers will often require that we answer questions about and provide evidence demonstrating that we have a strong security posture and are appropriately handling their data.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul>\\n\\t<li><a href=\\"https://confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DINFOSEC%26title%3DAssistance%2BPortal&amp;permissionViolation=true\\" target=\\"_blank\\">Request help with customer RFI or Audit</a></li>\\n</ul>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n},\r\n{\r\n"block_detial_json_id": 4,\r\n"block_detial_json_name": "Federal Government / DoD compliance",\r\n"block_detial_json_type": 1,\r\n"block_detial_json_url": "",\r\n"block_detial_json_file": null,\r\n"block_detial_json_is_active": true,\r\n"block_detial_json_icon": "/default/image/grc4.png",\r\n"block_detial_json_order": "5",\r\n"block_detial_json_show_header": true,\r\n"block_detial_json_description": "<div class=\\"federal-government\\">\\n<div>\\n<h3><strong>Federal Compliance overview</strong></h3>\\n\\n<p>Government and defense agencies require particularly stringent protection of information, defined by mandated compliance standards and audited by 3rd-party assessors on a regular basis. Many require &ldquo;continuous monitoring&rdquo; with detailed security posture reporting on a monthly basis. Personnel with access to this data must first be &ldquo;cleared&rdquo; through a series of background checks and citizenship validation.</p>\\n</div>\\n\\n<div style=\\"display: flex\\">\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px; margin: 10px;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">FedRAMP</h2>\\n\\n<h3><strong>Federal Compliance overview</strong></h3>\\n\\n<p>The Broadcom <a href=\\"https://www.fedramp.gov/\\" target=\\"_blank\\">Federal Risk and Authorization Management Program (FedRAMP)</a> service provides a standardized approach to security authorizations for Cloud Service Offerings to US Government and Department of Defense (DoD) agencies.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul style=\\"padding: 0 15px;\\">\\n\\t<li style=\\"padding-bottom: 10px;\\"><a href=\\"https://bsg-confluence.broadcom.net/login.action?os_destination=%2Fspaces%2Fviewspace.action%3Fkey%3DFED&amp;permissionViolation=true\\" target=\\"_blank\\">Broadcom FedRAMP program Wiki</a></li>\\n\\t<li style=\\"padding-bottom: 10px;\\"><a href=\\"https://www.fedramp.gov/\\" target=\\"_blank\\">US Government FedRAMP program</a></li>\\n\\t<li><a href=\\"https://cic.gsa.gov/basics/cloud-security\\" target=\\"_blank\\">GSA Cloud Information Center</a></li>\\n</ul>\\n\\n<p><strong style=\\"font-weight:100\\">Contact us: </strong><a href=\\" mailto:fedramp@broadcom.com\\" target=\\"_blank\\"> fedramp@broadcom.com</a></p>\\n</div>\\n\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px; margin: 10px;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">CMMC</h2>\\n\\n<h3><strong>CMMC - DoD Cybersecurity Maturity Model Certification</strong></h3>\\n\\n<p>To safeguard sensitive national security information, the Department of Defense (DoD) launched CMMC 2.0, a comprehensive framework to protect the defense industrial base from increasingly frequent and complex cyberattacks.</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul style=\\"padding: 0 15px;\\">\\n\\t<li style=\\"padding-bottom: 10px;\\"><a href=\\"https://www.acq.osd.mil/cmmc/\\" target=\\"_blank\\">DoD OUSD CMMC information page</a></li>\\n\\t<li><a href=\\"https://www.dodcui.mil/Home/DoD-CUI-Registry/\\" target=\\"_blank\\">DoD Controlled Unclassified Information (CUI) registry</a></li>\\n</ul>\\n\\n<p><strong style=\\"font-weight:100\\">Contact us: </strong><a href=\\"mailto:team-security-compliance.pdl@broadcom.com\\" target=\\"_blank\\"> team-security-compliance.pdl@broadcom.com</a></p>\\n</div>\\n\\n<div style=\\"background-color: #fff; border: 1px solid #efeaea; padding: 15px;margin: 10px;\\">\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">DISA</h2>\\n\\n<h3><strong>DISA - US Department of Defense Cloud Security</strong></h3>\\n\\n<p>The DISA Cloud Assessment Division provides support to DoD Component Sponsors/Mission Owners through the pre-screening, assessment, validation, authorization, and continuous monitoring of Cloud Service Offerings (CSO).</p>\\n\\n<h2 style=\\"color: #ce0930; font-weight:100; font-size:22px; margin-top:0px;\\">Useful Links:</h2>\\n\\n<ul style=\\"padding: 0 15px;\\">\\n\\t<li style=\\"padding-bottom: 10px;\\"><a href=\\"https://dl.dod.cyber.mil/wp-content/uploads/cloud/pdf/DoD_Cloud_Authorization_Process.pdf\\" target=\\"_blank\\">DoD Cloud Authorization Process</a></li>\\n\\t<li><a href=\\"https://public.cyber.mil/dccs/\\" target=\\"_blank\\">DoD Cloud Computing (CC) Security Requirements Guide (SRG)</a></li>\\n</ul>\\n\\n<p><strong style=\\"font-weight:100\\">Contact us: </strong><a href=\\"mailto:fedramp@broadcom.com\\" target=\\"_blank\\">fedramp@broadcom.com</a></p>\\n</div>\\n</div>\\n</div>\\n",\r\n"block_detial_json_banner_text": "",\r\n"block_detial_json_card": "1",\r\n"block_detial_json_layout_size": "1"\r\n}\r\n]',
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
