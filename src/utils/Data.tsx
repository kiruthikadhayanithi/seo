import security from '../Assets/SBOArea/security.png';
import devops from '../Assets/SBOArea/devops.png';
import saas from '../Assets/SBOArea/saas.png';
import saasplat from '../Assets/SBOArea/saasplat.png';
import mainframe from '../Assets/SBOArea/mainframe.png';
import cloud from '../Assets/SBOArea/cloud.png';
import business from '../Assets/SBOArea/business.png';
import businessoper from '../Assets/SBOArea/businessoper.png';
import saasservices from '../Assets/SBOArea/saasservices.png';
import bsg from '../Assets/SBOArea/bsg.png';
import grc from '../Assets/SBOArea/grc.png';
import Sboareas from './Sboareas';
import { ReactNode } from 'react';
import mainframe_bg from '../Assets/Mainframe/mainframe-bg.svg';
import link_bg from '../Assets/Mainframe/link-bg.svg';
import devops_bg from '../Assets/Devops/devops-bg.png';
import mainframe_overview_bg from '../Assets/Mainframe/overview-bg.svg';
import devops_overview_bg from '../Assets/Devops/overview-bg.svg';
import sass_bg from '../Assets/Mainframe/mainframe-bg.svg';
import advisory from '../Assets/Devops/advisory.svg';
import news from '../Assets/Devops/news.svg';
import devops_list from '../Assets/Devops/devops-list.svg';
import slack_image from '../Assets/Devops/slack-image.svg';
import meet_profile from '../Assets/meet-profile.svg';
import webex from '../Assets/Devops/webex.svg';
import slides from '../Assets/Devops/slides.svg';
import comms from '../Assets/Devops/comms.svg';
import tools from '../Assets/Devops/tools.svg';
import roadmap from '../Assets/Devops/roadmap.svg';
import hardware from '../Assets/Devops/hardware.svg';
import synchronicity from '../Assets/Devops/synchronicity.svg';
import accessibility from '../Assets/Devops/accessibility.svg';
import onboard from '../Assets/Devops/onboard.svg';
import pipeline from '../Assets/Devops/pipeline.svg';
import securities from '../Assets/Devops/securities.svg';
import link from '../Assets/Devops/link.svg';
import testcase from '../Assets/Devops/testcase.svg';
import useful_link from '../Assets/Mainframe/useful-link.svg';
import who_use from '../Assets/Mainframe/who-use.svg';
import support from '../Assets/Mainframe/support.svg';
import video from '../Assets/Mainframe/video.svg';
import slack from '../Assets/Mainframe/slack.svg';
import info from '../Assets/Mainframe/info.svg';
import chat from '../Assets/Devops/google-chat.svg';
import email from '../Assets/Mainframe/mail.svg';
import sass_overview_bg from '../Assets/SaasOperation/saas-bg.svg';
import sass_meet_team from '../Assets/SaasOperation/saas-meet-team.svg';
import sass_report from '../Assets/SaasOperation/saas-report.svg';
import sass_calendar from '../Assets/SaasOperation/saas-calendar.svg';
// import devops_video1 from '../Assets/Devops/devops-video-1.mp4';
// import devops_video2 from '../Assets/Devops/devops-video-2.mp4';
import devops_video1 from '../Assets/SaasOperation/saas-ops-5.mp4';
import devops_video2 from '../Assets/SaasOperation/saas-ops-5.mp4';
import saas_video1 from '../Assets/SaasOperation/saas-ops-5.mp4';
import saas_video2 from '../Assets/SaasOperation/saas-ops-5.mp4';
import saas_video3 from '../Assets/SaasOperation/saas-ops-5.mp4';
import saas_video4 from '../Assets/SaasOperation/saas-ops-5.mp4';
import saas_video5 from '../Assets/SaasOperation/saas-ops-5.mp4';
// import devops_video1 from '../Assets/Devops/devops-1.mp4';
// import devops_video2 from '../Assets/Devops/devops-2.mp4';
// import saas_video1 from '../Assets/SaasOperation/saas-ops-1.mp4';
// import saas_video2 from '../Assets/SaasOperation/saas-ops-2.mp4';
// import saas_video3 from '../Assets/SaasOperation/saas-ops-3.mp4';
// import saas_video4 from '../Assets/SaasOperation/saas-ops-4.mp4';
// import saas_video5 from '../Assets/SaasOperation/saas-ops-5.mp4';
import learn_more from '../Assets/SaasOperation/learn-more.svg';
import quick_link from '../Assets/SaasOperation/quick-link.svg';
import sass_support from '../Assets/SaasOperation/support.svg';
import saas_knowledge from '../Assets/SaasOperation/saas-knowledge.svg';
import saas_service from '../Assets/SaasOperation/saas-service-status.svg';
import saas_issue from '../Assets/SaasOperation/saas-urgent-issue.svg';
import saas_report from '../Assets/SaasOperation/saas-ops-report.svg';
import saas_your_service from '../Assets/SaasOperation/saas-your-service.svg';
import security_banner from '../Assets/Security/Security-BannerBg.png';
import securityPolicy from '../Assets/Security/OurPolicy.png';
import securityApproach from '../Assets/Security/OurApproach.png';
import securityCoreFun from '../Assets/Security/OurCoreFunctions.png';
import securityUsefulLink from '../Assets/Security/OurUsefulLink.svg';
import securityMeetTeam from '../Assets/Security/MeetTheTeam.svg';

export interface SubNavProps {
  id: number;
  title: string;
  url: string;
}

export interface CardItemProps {
  available: boolean;
  imageurl: string;
  title: string;
  url: string;
  description: string | ReactNode;
}

export interface NavProps {
  id: number;
  title: string;
  url: string;
  subnav?: SubNavProps[];
}

export interface CardProps {
  id: number;
  image?: string;
  title: string;
  url: string;
  description: string | ReactNode;
}

export interface MainframeProps {
  id: number;
  name: string;
  slug: string;
  icon: any;
  banner_image: string;
  banner_text: string;
  short_description: string;
  is_active: number;
  updated_at: any;
  created_at: null;
  content_data: any | ReactNode;
}

export interface DevopsProps {
  id: number;
  name: string;
  slug: string;
  icon: any;
  banner_image: string;
  banner_text: string;
  short_description: string;
  is_active: number;
  updated_at: any;
  created_at: null;
  script_dynamic: string;
  content_data: any | ReactNode;
}

export interface SaasOperationProps {
  id: number;
  name: string;
  slug: string;
  icon: any;
  banner_image: string;
  banner_text: string;
  short_description: string;
  is_active: number;
  updated_at: any;
  created_at: null;
  content_data: any | ReactNode;
}

export interface SecurityProps {
  id: number;
  name: string;
  slug: string;
  icon: any;
  banner_image: string;
  banner_text: string;
  short_description: string;
  is_active: number;
  updated_at: any;
  created_at: null;
  content_data: any | ReactNode;
}

type NavDataProps = NavProps[];

export const CardData: CardProps[] = [
  {
    id: 0,
    image: devops,
    title: 'DevOps Platform',
    url: '/devops',
    // url: 'https://sites.google.com/broadcom.com/gtso-devops/home',
    description: Sboareas.SboAreas.DevopsPlatform,
  },
  {
    id: 1,
    image: saas,
    title: 'SaaS Operations',
    url: '/saas-operations',
    // url: 'https://sites.google.com/broadcom.com/sbo-portal/home/saasops',
    description: Sboareas.SboAreas.SaasOperations,
  },
  {
    id: 2,
    image: saasplat,
    title: 'SaaS Platform Engineering',
    // url: 'https://sites.google.com/broadcom.com/spe/spe-home-page',
    url: '',
    description: Sboareas.SboAreas.SaasPlatformEngineering,
  },
  {
    id: 3,
    image: mainframe,
    title: 'Mainframe Support',
    url: '/mainframe',
    description: Sboareas.SboAreas.MainFrameSupport,
  },
  {
    id: 4,
    image: cloud,
    title: 'Cloud Finops',
    // url: 'https://academy-classes.broadcom.com/saml/init?redirect_uri=/catalog/2390410',
    url: '',
    description: Sboareas.SboAreas.CloudFinops,
  },
  {
    id: 5,
    image: business,
    title: 'Business Development',
    // url: 'https://academy-classes.broadcom.com/saml/init?redirect_uri=/catalog/2390406',
    url: '',
    description: Sboareas.SboAreas.BusinessDevelopment,
  },
  {
    id: 6,
    image: saasservices,
    title: 'SaaS Platform Services (SPS)',
    // url: 'https://bsg-confluence.broadcom.net/',
    url: '',
    description: Sboareas.SboAreas.SaasPlatformServices,
  },
  {
    id: 7,
    image: businessoper,
    title: 'Business Operations',
    // url: 'https://academy-classes.broadcom.com/saml/init?redirect_uri=/catalog/2390417',
    url: '',
    description: Sboareas.SboAreas.BusinessOperations,
  },
  {
    id: 8,
    image: bsg,
    title: 'BSG Marketing',
    url: 'https://sites.google.com/broadcom.com/sales-resource-center/bsg-marketing',
    // url: '',
    description: Sboareas.SboAreas.BsgMarketing,
  },
  {
    id: 9,
    image: security,
    title: 'Security',
    // url: 'https://academy-classes.broadcom.com/saml/init?redirect_uri=/catalog/learning-paths/49664/',
    url: '/security',
    description: Sboareas.SboAreas.SecurityRiskCompliance,
  },
  {
    id: 10,
    image: grc,
    title: 'Governance/Risk /Compliance',
    // url: 'https://academy-classes.broadcom.com/saml/init?redirect_uri=/catalog/2390417',
    url: '',
    description: Sboareas.SboAreas.GovernanceRiskCompliance,
  },
];
export const NavData: NavDataProps = [
  // {
  //   id: 1,
  //   title: 'Home',
  //   url: '/',
  // },
  {
    id: 1,
    title: 'GCP',
    url: '/',
    subnav: [
      {
        id: 1,
        title: 'Inc Mgmt',
        url: 'https://datastudio.google.com/reporting/3f346721-a6be-423b-bd87-dff48ab6eafd/page/p_ql0p2fuiwc',
      },
      {
        id: 2,
        title: 'Finops',
        url: 'https://klera.devops.broadcom.net:18080/klera/main?eid=7a1be147-6177-4893-9b37-5341113abe88&pnumber=1&publish=true&q=operation:openexploration&refid=src_CI2vQHGxQPiLLrz0m5h_CE3zXb9-MPOx8-HkflA8mQ2SehJb0t9C1JRVckKPKqEe',
      },
      {
        id: 3,
        title: 'Support',
        url: 'https://docs.google.com/presentation/d/1SsNJeYPfNVE3-47oHfTeP-mLBkLpykkuNxXaYbg-OH8/edit#slide=id.g5d2e70f811_0_1321',
      },
      {
        id: 4,
        title: 'Learning',
        url: 'https://docs.google.com/document/d/1T68F7QA3r9TWHpMCH-Gu6HH7y69WFUDVZaYjkxmFFM4/edit?urp=gmail_link#heading=h.gafbrm4n1ukq',
      },
      {
        id: 5,
        title: 'Product roadmap',
        url: 'https://docs.google.com/document/d/1Pd45WnNrsELYy7U1RRbLYuAdzlTi3YsfkVdxH_xNMS8/edit?resourcekey=0-nBlAnggpk2lg0n7LSKdPqg&urp=gmail_link#heading=h.7hnc0cp78w4z',
      },
      {
        id: 6,
        title: 'Event planning',
        url: 'https://docs.google.com/document/d/1Pd45WnNrsELYy7U1RRbLYuAdzlTi3YsfkVdxH_xNMS8/edit?resourcekey=0-nBlAnggpk2lg0n7LSKdPqg&urp=gmail_link#heading=h.7hnc0cp78w4z',
      },
      {
        id: 7,
        title: 'Upcoming events',
        url: 'https://docs.google.com/document/d/1-Ue5J0Cbs7zb_ILlarlV8oNEZjX-RKMomZ2pZkwALE0/edit?resourcekey=0-KjtJUStVxCMjDyHVkrZkXw&urp=gmail_link',
      },
      {
        id: 8,
        title: 'GCP account team',
        url: 'https://docs.google.com/presentation/d/1d-SWBSSOoRWhDHA3P7xD_SUzggQ58Xx9-ZofkWjr7Bc/edit?resourcekey=0-CLIGl0PouHzbU93aXMU0bg&urp=gmail_link#slide=id.gfdfc3c95f8_3_33',
      },
      // {
      //   id: 9,
      //   title: 'Useful links',
      //   url: 'https://sites.google.com/d/1FziBPz4HSqYM-ObL0jMuqNRt0ncxsMuO/p/1H1IPATUY0Bl8ntkOukGwzGXzrBY3g1ku',
      // },
      {
        id: 9,
        title: 'GCP Status',
        url: 'https://status.cloud.google.com/',
      },
    ],
  },
  // {
  //   id: 2,
  //   title: 'Site Navigation',
  //   url: '/',
  //   subnav: [
  //     {
  //       id: 1,
  //       title: 'DevOps Platform',
  //       url: '/devops',
  //       // url: 'https://sites.google.com/broadcom.com/gtso-devops/home',
  //     },
  //     {
  //       id: 2,
  //       title: 'SaaS Operations',
  //       url: '/saas-operations',
  //       // url: 'https://sites.google.com/broadcom.com/sbo-portal/home/saasops',
  //     },

  //     {
  //       id: 3,
  //       title: 'SaaS Platform Engineering',
  //       // url: 'https://sites.google.com/broadcom.com/saas-ops-cd-pipeline/opinionated-cd-pipeline',
  //       url: '',
  //     },
  //     {
  //       id: 4,
  //       title: 'Mainframe Support',
  //       url: '/mainframe',
  //     },
  //     {
  //       id: 5,
  //       title: 'Cloud Finops',
  //       url: '',
  //     },
  //     {
  //       id: 6,
  //       title: 'Business Development',
  //       url: '',
  //     },
  //     {
  //       id: 7,
  //       title: 'SaaS Platform Services',
  //       // url: 'https://bsg-confluence.broadcom.net/',
  //       url: '',
  //     },
  //     {
  //       id: 8,
  //       title: 'Business Operations',
  //       url: '',
  //     },
  //     {
  //       id: 9,
  //       title: 'BSG Marketing',
  //       url: 'https://sites.google.com/broadcom.com/sales-resource-center/bsg-marketing',
  //     },
  //     {
  //       id: 10,
  //       title: 'Security',
  //       url: '/security',
  //     },
  //     {
  //       id: 11,
  //       title: 'Governance Risk Compliance',
  //       url: '',
  //     },
  //   ],
  // },
  {
    id: 3,
    title: 'Product Status',
    url: 'https://status.broadcom.com/',
  },
  {
    id: 4,
    title: 'Software Tools',
    url: '/software-tools-status',
  },
  {
    id: 5,
    title: 'DevOps360',
    url: 'https://klera.devops.broadcom.net:18080/klera/main?eid=6762ba7f-1888-4198-8784-c16edb351546&pnumber=1&publish=true&q=operation:openexploration&refid=src_IpAPQq-PIvnTPQTZNh0BajcTQiVgbn6F8fnq-9WGrHqZLw4UgJFEoduJf5tG-led',
  },
  {
    id: 6,
    title: 'Release Mgmt',
    url: '/release-management',
  },
];

export const SecurityData: SecurityProps = {
  id: 1,
  name: 'Security',
  slug: 'security',
  banner_image: security_banner,
  short_description: '<div><p>This is the description</p></div>',
  is_active: 1,
  created_at: null,
  updated_at: null,
  icon: null,
  banner_text: '<div><p>This is the banner text</p></div>',
  content_data: [
    {
      id: '1',
      display_name: 'Overview',
      is_active: 1,
      description: `<div><p>Our Mission is to design, implement and maintain a security program to safeguard the confidentiality, Integrity and availability of Broadcom Software applications, systems, identity and data Assets by providing proactive security expertise, creating and maintaining a resilient and secure environment, and fostering a culture of security awareness and compliance throughout Broadcom Software Group (BSG).</p></div>`,
      items: null,
      layout: '2',
      icon: '',
      is_featured: false,
      image: '',
    },

    {
      id: '3',
      display_name: 'Our Policies',
      is_active: 1,
      description: `<hr style='width:550px;'/><ul style='margin: 15px 0px; height:155px;'> <li style='padding: 5px 0px'>Our policies align with Broadcom corporate policies posted on our GTO portal <a  target='_blank'  href='https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications'>Cybersecurity Policies, Standards and Certifications</a></li><li style='padding: 5px 0px'>Policies and other standard documents must not be shared with customers, vendors or
      partners without getting consent from our compliance team.</li></ul>`,
      items: null,
      layout: '1',
      icon: securityPolicy,
      is_featured: false,
    },
    {
      id: '4',
      display_name: 'Our Approach',
      is_active: 1,
      description: `<hr style='width:550px';/><ul style='margin: 15px 0px;'> <li style='padding: 5px 0px'>Drive secure software by design</li><li style='padding: 5px 0px'>Timely remediation of vulnerabilities</li><li style='padding: 5px 0px'>Periodic evaluation of our security risk posture</li><li style='padding: 5px 0px'>Manage risks to an acceptable level</li><li style='padding: 5px 0px'>Audit and compliance</li></ul>`,
      items: null,
      layout: '1',
      icon: securityApproach,
      is_featured: false,
    },

    {
      id: '5',
      display_name: `Our Core functions align with Software Security best practices`,
      is_active: 1,
      description: `<hr style='width:1150px';/><div style='color:#CE0930; margin:0px 20px'><h2>Vulnerability Management</h2></div><div style='margin:20px 20px'>Bad actors exploit known, and unknown vulnerabilities associated with applications, OS images and libraries. To combat exploitation of vulnerabilities, we used a wide variety of security scan tools (Qualys, Lacework, Blackduck & more) to identify and remediate vulnerabilities in a timely manner. We work closely with SBO and BSG groups to ensure all our systems, images and applications are timely patched under committed SLA’s in on premise and cloud environments. Additional compensating controls shall be implemented to minimize business risks to acceptable levels (non-availability of patches)</div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Secure SDLC</h2></div><div style='margin:20px 20px'>We work closely with all our product security champions to integrate software security best practices into product software development life cycle (SDLC) from start to finish. Software security activities include architecture risk analysis, static, dynamic, and interactive application security testing and SCA. Building security into our SDLC does require time and team effort. We believe in fixing vulnerabilities early in the SDLC process is cheaper and mush faster than waiting until the deliver (CD) as it reduces our exposure to security risks. Please refer to our Minimum-Security controls Standards Document for more information(Coming soon)</div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Restricted Access</h2></div><div style='margin:20px 20px'>Enforcing the principle of least privilege access significantly reduces our attack surfaces by removing unwanted access to our applications and components. We use a wide variety of Privilege Access Management solutions (Cyberark, Cycode etc) to enforce and secure privileged access</div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Automation</h2></div><div style='margin:20px 20px'>We believe and thrive in automating our day-to-day security tasks such as firewalls reviews, vulnerability management, auditing secure configurations and much more.<br/><br/> Automating routine tasks allows us and the software teams to focus more on strategic and secure initiatives. We are working on a planned initiative that will drive us in automating some of our repetitive process</div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Penetration Testing</h2></div><div style='margin:20px 20px'>We conduct periodic penetration testing (PenTest) exercises throughout the year on all our BSG products to evaluate its security posture and find any weakness in our applications. PenTest exercises also determine the robustness of our security controls and support our compliance with data privacy and security regulations (ISO 27001, FedRamp, Soc 2, PCI DSS etc.)<br/><br/>
      Please refer to our Governance, risk and Compliance section for information on our compliance requirements and certifications<br/><br/></div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Risk Assessment</h2></div><div style='margin:20px 20px'>Security Risk Management program will assist with the continuous evaluations of existing security defenses, mature our defenses against real attacks and prepare for cybersecurity compliance audits.<br/><br/>Some of our RM initiatives include<div><table><tr className='toggle-row tcm0'><td colspan='2'><ul><li>Penetration testing exercises on our software applications</li><li>Simulated tabletop exercises focused on BSG</li><li>Assess our hosted application in our cloud environments</li></ul></td><td colspan='2'><ul><li>Firewall audits and standards</li><li>Adopt industry security standard benchmarks and best practices</li><li>Incident response plan (PSIRT)</li></ul></td></tr></table></div></div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Incident Response (PSIRT)</h2></div><div style='margin:20px 20px'>Not “if” but “when”…No matter how much we adhere to software security practices, we will always face the possibility of a breach. We have developed and enforced a solid incident response plan for BSG to detect, report and quickly respond to security attacks or breaches. Our customers, white hat hackers and bug bounty professionals can report vulnerabilities to our IRT team using our established channels. (PSIRT@broadcom.com)<br/><br/>More information of PSIRT process posted under “<a  target='_blank'  href='https://bsg-confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FpageId%3D87351847&permissionViolation=true'>Product Security Incident Response</a>”</div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Security Metrics (PSIRT)</h2></div><div style='margin:20px 20px'>Security Metrics can be interpreted as a standard (or system) used for quantitatively measuring
      our security posture through collection, analysis and reporting of relevant performance data.<br/><br/>- Measure what matters<br/><br/></div><hr style='width:1150px';/>
      <div style='color:#CE0930; margin:0px 20px'><h2>Security training and awareness</h2></div><div style='margin:20px 20px'>Training to our developers is part of SBO Security DNA and we host a wide library of security training contents through our Learning Management Systems(LMS). We encourage our developers to complete at least one training (OWASP Top10, Secure coding etc.) every year. We believe in maintaining a security training curriculum for our developers that will go a long way in delivering secure applications to our customers.<br/><br/><b>Disclaimer:</b> <i>Please note some of the listed core initiatives are work in progress and we are working closely with our BSG groups to mature our process, controls and tools. We are also embarking our journey towards automation. If you have any further questions, or have suggestions or comments please write to us- SBO-Security</i><br/><br/>To see what is right and not do it is a lack of courage<br/>- Confucius (551- 479 BC)</div>`,
      items: null,
      layout: '2',
      icon: securityCoreFun,
      is_featured: false,
    },

    {
      id: '5',
      display_name:
        "<div style='padding: 0px 15px'><h3>Useful Links</h3></div>",
      is_active: 1,
      description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '></div><div><ul style='margin: 10px 0px; list-style-image: url(${link})'><li><a target='_blank'   href='https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications'>Cybersecurity Policies, Standards and Certifications</a></li></ul><ul style='margin: 10px 0px; list-style-image: url(${link})'><li><a  target='_blank'  href='https://bsg-confluence.broadcom.net/login.action?os_destination=%2Fpages%2Fviewpage.action%3FpageId%3D87351847&permissionViolation=true'>Product Security Incident Response</a></li></ul><ul style='margin: 10px 0px; list-style-image: url(${link})'><li>Minimum Security Controls</li></ul>
      <ul style='margin: 10px 0px; list-style-image: url(${link})'><li>Inventory of our most used toolsets</li></ul><ul style='margin: 10px 0px; list-style-image: url(${link})'><li><a  target='_blank'  href='https://portal.securecodewarrior.com/#/home'>Secure Core Warrior (LMS)</a></li></ul></div></div></div>`,
      items: null,
      layout: '1',
      icon: securityUsefulLink,
      is_featured: true,
    },
    {
      id: '5',
      display_name:
        "<div style='padding: 0px 15px'><h3>Meet The Team</h3></div>",
      is_active: 1,
      description: `<div style='border: 0px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '></div><div><ul style='margin: 10px 0px; list-style-type:disc'><li style='margin: 10px 0px;'><a target='_blank'   href='https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&sa=D&sntz=1&usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz'>Venkat Karpuram</a></li><li style='margin: 10px 0px;'><a target='_blank'   href='https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&sa=D&sntz=1&usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz'>Saravanan Nagarajan</a></li></ul></div></div></div>`,
      items: null,
      layout: '1',
      icon: securityMeetTeam,
      is_featured: true,
    },
  ],
};

export const MainframeData: MainframeProps = {
  id: 1,
  name: 'Mainframe Support',
  slug: 'mainframe-support',
  banner_image: mainframe_bg,
  short_description: '<div><p>This is the description</p></div>',
  is_active: 1,
  created_at: null,
  updated_at: null,
  icon: null,
  banner_text: '<div><p>This is the banner text</p></div>',
  content_data: [
    {
      id: '1',
      display_name: 'Overview',
      is_active: 1,
      description:
        '<div>Welcome to the Mainframe Infrastructure Support site. Our goal is to provide mainframe infrastructure support and services to assist with ongoing R&D development. In this site, you will find information to assist with your mainframe infrastructure support needs.</div>',
      items: null,
      layout: '2',
      icon: useful_link,
      is_featured: false,
      image: mainframe_overview_bg,
    },
    {
      id: '4',
      display_name: 'Who Uses Mainframe Infrastructure Support',
      is_active: 1,
      description:
        "<div style='border-top: 1px solid #DADADA; margin: 0px 15px'><ul style='padding: 0px 40px'> <li style='padding: 3px 0px'>All mainframe-centric research and development teams</li><li style='padding: 3px 0px'> All product development teams</li></ul></div>",
      items: null,
      layout: '2',
      icon: who_use,
      is_featured: false,
    },
    {
      id: '6',
      display_name: 'Videos',
      is_active: 1,
      description: '<div><p>This is the video</p></div>',
      is_featured: false,
      items: [
        {
          id: 1,
          url: 'https://www.youtube.com/watch?v=ximv-PwAKnc',
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 2,
          url: 'https://www.youtube.com/watch?v=PBKJ4TR59W4',
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 3,
          url: 'https://www.youtube.com/watch?v=2-gBYZv6AmM',
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
      ],
      layout: '2',
      icon: video,
    },
    {
      id: '3',
      display_name: 'Useful Links',
      is_active: 1,
      short_description: 'On this site you will find:',
      description: `<ul style='margin: 15px 0px; list-style-image: url(${link})'> <li style='padding: 5px 0px'> <a target='_blank'   href='https://drive.google.com/drive/folders/0AKJjBHLzkoAoUk9PVA'> Mainframe R&D Documentation </a> </li> <li style='padding: 5px 0px'> Mainframe Solutions Team <a target='_blank'   href='https://drive.google.com/drive/folders/0ACLPRv7Nv7ikUk9PVA'> Announcements </a> </li><li style='padding: 5px 0px'> Announcements Current hardware configurations <a  target='_blank'   href='https://docs.google.com/spreadsheets/d/1h800lC9xeZGiaHwyvvib2YaoYQGAzoRMm3HCMJd03cQ/edit#gid=1323021429'> (z/15 & z/16) </a> </li><li style='padding: 5px 0px'> Mainframe Services current <a  target='_blank'   href='https://docs.google.com/spreadsheets/d/1zrqn3V3Y7otiBv7JXDroFPhYGP7TqkhJjWWohdbgclM/edit'> Projects and Initiatives </a> </li><li style='padding: 5px 0px'> How to request work from Mainframe using <a  target='_blank'   href='https://docs.google.com/document/d/1Q4gAJiY8cXUvVINLZdR4yInTk8nGfbfMhQWmB4POH5M/edit'> Agile Central </a> </li><li style='padding: 5px 0px'>  <a  target='_blank'   href='https://brcm-bsg-global.slack.com/archives/G01RE11QWH1'> Mainframe System programmers </a> </li><li style='padding: 5px 0px'> <a  target='_blank'   href='https://brcm-bsg-global.slack.com/archives/G01RMTS36Q4'> Mainframe Operations  </a> </li><li style='padding: 5px 0px'>  <a  target='_blank'   href='https://brcm-bsg-global.slack.com/archives/G01R908SMTQ'> Mainframe DBAs</a> </li></ul>`,
      items: null,
      layout: '2',
      icon: useful_link,
      image: link_bg,
      is_featured: false,
    },
    {
      id: '5',
      display_name: 'Getting Support',
      is_active: 1,
      description: `<div class='cab-table'> <table> <tr> <th>Getting Help</th> <th>Name</th> <th style='width: 600px'> Email / More Info </th> </tr> <tr><td>Finding Answers</td><td>SlackBot</td><td><div style='display: flex; align-items: center'><img style='padding: 8px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slack} /><a  target='_blank'   href='https://app.slack.com/client/T01MTJCTQNM/D01NEATBLLT/thread/G01SJG8FRAM-1655140005.706089' style='margin: 0px 10px'>Open Slack</div></td><a></tr><tr style='border-bottom: 1px solid #D7D7D7; border-top: 1px solid #D7D7D7'><td>First Level for help or issues</td><td><a  target='_blank'   href='https://broadcomprd.service-now.com/saas_sp'>Broadcom SBO Support</a></td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 4px 15px; border-radius: 90px; border: 1px solid #e4e5e7'><img style='margin-top: 5px' src=${info} /></span><span style='padding: 8px'>Select 'Report a Mainframe Incident' Select the appropriate Mainframe - business service from the drop-down</span></td></tr><td>Escalation - First Level</td><td>Contact Mainframe Operations</td></div><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 8px 10px; border-radius: 90px; border: 1px solid #e4e5e7'><img src=${email} style='margin-top: 5px' /></span><a target='_blank' href='mailto: mainframeops.pdl@broadcom.com' style='margin: 0px 10px'> mainframeops.pdl@broadcom.com</a></td></tr><tr style='border-bottom: 1px solid #D7D7D7; border-top: 1px solid #D7D7D7'><td>Escalation - Second Level</div></td><td>Contact Mainframe On-Call Personnel</td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 8px 10px; border-radius: 90px; border: 1px solid #e4e5e7'><img src=${email} style='margin-top: 5px' /></span><a target='_blank' href='mailto:mainframesolutions.pdl@broadcom.com' style='margin: 0px 10px'>mainframesolutions.pdl@broadcom.com</a></div></td></tr><tr><td>Escalation - Third Level</td><td>Ken Barrett</td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 8px 10px; border-radius: 90px; border: 1px solid #e4e5e7'><img style='margin-top: 5px' src=${email} /></span><a target='_blank' href='mailto:Ken.barrett@broadcom.com' style='margin: 0px 10px'>Ken.barrett@broadcom.com</a></div></td></tr></table></div>`,
      items: null,
      layout: '2',
      icon: support,
      is_featured: false,
    },
    {
      id: '2',
      display_name:
        "<h2 style='margin: 0px 0px 0px 15px'>Meet the Team: Mainframe Support</h2>",
      is_active: 1,
      description: `<div style='margin: 20px 0px'>
        <div style='display: flex; flex-direction: row' class='mainSup'>
        <div style='margin: 0px 10px'>
          <div>
            <img src=${meet_profile} style='width: 150px; height: 150px'/>
          </div>
        </div>
        <div style='flex: 1; margin: 0px 15px;'>
          <div style='padding: 5px 0px; font-weight: 900;'>Mainframe:  <a>Ken Barrett</a></div>
          <div style='text-align: center; padding: 5px 0px'><a>Frank Kiss</a></div>
          <div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 5px; background: #F9F9F9; margin: 10px 0px; font-weight: 600'>
              <div style='padding: 2px 0px'>Infrastructure</div>
              <div style='padding: 2px 0px'>Architecture/Engineering</div>
              <div style='padding: 2px 0px'>Data Center</div>
              <div style='padding: 2px 0px'>Virtual Systems</div>
              <div style='padding: 2px 0px'>z/VM</div>
              <div style='padding: 2px 0px'>z/OS & subsystems</div>
          </div>
          <div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 5px; background: #fff; margin: 10px 0px;'>
              <div style='padding: 2px 0px'><a>Tim Dowdy</a></div>
              <div style='padding: 2px 0px'><a>Bob Lane</a></div>
              <div style='padding: 2px 0px'><a>Jim McPhillips</a></div>
              <div style='padding: 2px 0px'><a>Stan Swain</a></div>
              <div style='padding: 2px 0px'><a>Prabha Mutala</a></div>
              <div style='padding: 2px 0px'><a>Sibi Gunasekaran</a></div>
              <div style='padding: 2px 0px'><a>Nicholas Gailes</a></div>
              <div style='padding: 2px 0px'><a>Mark Mueller</a></div>
          </div>
        </div>
        <div style='flex: 1; margin: 0px 15px'>
          <div style='padding: 5px 0px' > &nbsp;</div>
          <div style='text-align: center; padding: 5px 0px'><a>Don Axon</a></div>
          <div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 5px; background: #F9F9F9; margin: 10px 0px; font-weight: 600'>
              <div style='padding: 2px 0px'>Database</div>
              <div style='padding: 2px 0px'>Applications</div>
              <div style='padding: 2px 0px'>Mainframe</div>
              <div style='padding: 2px 0px'>Scheduling</div>
              <div style='padding: 2px 0px'>Security</div>
              <div style='padding: 2px 0px'>Operations</div>
              <div style='padding: 2px 0px'>z/OS & subsystems</div>
              <div style='padding: 2px 0px'>IBM Relationship</div>
              <div style='padding: 2px 0px'>Franchise</div>
              <div style='padding: 2px 0px'>Relationship</div>
              <div style='padding: 2px 0px'>Budget Support</div>
              <div style='padding: 2px 0px'>Disaster Recovery</div>
          </div>
          <div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 5px; background: #fff; margin: 10px 0px;'>
              <div style='padding: 2px 0px'><a>Joe Teryek</a></div>
              <div style='padding: 2px 0px'><a> Stephen Singer</a></div>
              <div style='padding: 2px 0px'><a> Jr Bigornia</a></div>
              <div style='padding: 2px 0px'><a>Kerry Weber</a></div>
              <div style='padding: 2px 0px'><a> Andrew Trapp</a></div>
              <div style='padding: 2px 0px'><a> Operations Staff</a></div>
          </div>
        </div>
        <div style='flex: 1; margin: 0px 15px'>
          <div style='padding: 5px 0px' > &nbsp;</div>
          <div style='text-align: center; padding: 5px 0px'><a>Brad Foxhall</a></div>
          <div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 5px; background: #F9F9F9; margin: 10px 0px; font-weight: 600'>
              <div style='padding: 2px 0px'>Infrastructure</div>
              <div style='padding: 2px 0px'>Architecture</div>
              <div style='padding: 2px 0px'>Networking</div>
          </div>
        </div>
        </div>
      </div>`,
      items: null,
      layout: '4',
      icon: advisory,
      is_featured: true,
    },
  ],
};

export const DevopsData: DevopsProps = {
  id: 1,
  name: 'Devops Platform',
  slug: 'devops-platform',
  banner_image: devops_bg,
  short_description: '<div><p>This is the description</p></div>',
  is_active: 1,
  created_at: null,
  updated_at: null,
  icon: null,
  banner_text: '<div><p>This is the banner text</p></div>',
  script_dynamic: "console.log('Text')",
  content_data: [
    {
      id: '1',
      display_name: 'Overview',
      is_active: 1,
      description: `<div><ul style='padding: 0px 30px; list-style-image: url(${devops_list})'> <li style='padding: 10px 0px'>DevOps tools, practices, and processes are designed to accelerate digital transformation by providing organizations with a framework to increase the speed of software delivery, without affecting IT quality and reliability. </li><li style='padding: 10px 0px'>While many enterprises have widely adopted these DevOps tools and methods, many struggles with translating their investments into measurable outcomes of faster cycle times, improved quality, and more innovation.</li></ul></div>`,
      items: null,
      layout: '2',
      icon: useful_link,
      is_featured: false,
      image: devops_overview_bg,
    },
    {
      id: '5',
      display_name: null,
      is_active: 1,
      description: `<div style='padding: 0px 15px 20px;'><h2>DevOps Platform Events & CABs</h2><div>Distribution lists become stale and don't always include everyone they should. To stay informed on planned maintenance, public DevOps Forums, Change Advisory Boards (CAB's) and other meetings, include this calendar and you will always have the up to date information on these sessions.</div></div>`,
      items: null,
      layout: '2',
      icon: null,
      is_featured: false,
    },
    {
      id: '5',
      display_name: null,
      is_active: 1,
      description: `<div style='padding: 0px 15px 20px;'><div style='display: flex; flex-direction: row; align-items: center;'><h2 style='padding-right: 10px'>Major Events</h2> <div style='font-weight: 600'>(click on scheduled event below for more details)</div></div><div><div style='font-weight: 600; font-size: 12px'>GitHub</div><p>Planned Outage - July 15th 2022 (5pm - 12:00 am PST) - GCP Migration</p><div style='font-weight: 600; font-size: 12px'>Angular JS</div></div><p>Service Contract with OpenLogic (Perforce) in place as of June 20th. SBO is automating the workflow for distributing supported versions  to all BSG Product Teams by July 8th. Artifactory is used as internal repository to manage all AngularJS releases.</p><div style='font-weight: 600; font-size: 12px'>BlazeMeter Divestiture</div><p>Phase 1 completed.  Existing License will continue until Oct 2022.  Please see <a href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fgtso-devops%2Ftools%2Fblazemeter&sa=D&sntz=1&usg=AOvVaw0x3_yR81MEUoIFlLRmGgCA' target='_blank'>BlazeMeter</a> link for more details.</p><div style='font-weight: 600; font-size: 12px'></div><p>Once licenses are procured instructions will be communicated - additional & more information updates <a href='https://sites.google.com/broadcom.com/gtso-devops/comms/docker-desktop' target='_blank'>here</a></p></div>`,
      items: null,
      layout: '2',
      icon: null,
      is_featured: false,
    },
    {
      id: '5',
      display_name: "<div style='padding: 0px 15px'><h3>DevOps News</h3></div>",
      is_active: 1,
      description: null,
      items: null,
      layout: '2',
      icon: news,
      is_featured: true,
      type: 'calendar',
      url: 'https://calendar.google.com/calendar/u/0/embed?color=%239a9cff&src=broadcom.com_g0tlehc0nboca1a0n5bq68gg48@group.calendar.google.com',
      // url: 'https://calendar.google.com/calendar/u/0/r?cid=YnJvYWRjb20uY29tX2cwdGxlaGMwbmJvY2ExYTBuNWJxNjhnZzQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20',
    },
    {
      id: '2',
      display_name: 'Change Advisory Board',
      is_active: 1,
      description: `<div class='cab-table'><table>
      <tr> <th style='width: 300px'>Title</th> <th style='width: 250px'>Date & Time</th> <th style='text-align: center'> Links </th> <th /></tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td >BSG JIRA & Confluence CAB</td><td>May 5  2022 - 8.00 AM PST</td><td><div style='display: flex; align-items: center; padding: 5px;'><div ><span style='font-weight: 700;'>Webex Recording: &nbsp; &nbsp;</span></div><div style='display: flex; flex: 1; align-items: center;'><img style='width: 35px; height: 35px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a target='_blank' href='https://broadcom.webex.com/webappng/sites/broadcom/recording/0e6aaf28aeb2103ab7e40050568134ff/playback' style='margin: 0px 10px'>Open Webex</a></div></div><div style='display: flex; align-items: center; padding: 5px;'><div ><span style='font-weight: 700'>Presentation Slides: &nbsp; &nbsp;</span> </div><div style='display: flex; flex: 1; align-items: center'><img style='width: 35px; height: 35px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1t2OX4kOGF25hfqVaImXCL6CvDG-n29zRpTtfjEBUjWM/edit#slide=id.gdec524b778_0_122' style='margin: 0px 10px'>Open Google Slides</a></div></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='0'></td>
      </tr>
      <tr class='toggle-row cab0'>
        <td><ul><li>BSG Confluence</li><ol><li>Architecture</li><li>Onprem to New SBO Platform</li><li>Upgrades to LTS</li></ol></ul></td><td ><ul><li>BSG Jira</li><ol><li>GTO Platform to SBO Cloud Platform</li><li>Migration Timeline</li></ol></ul></td><td colspan='2'><ul><li>Secure Access Cloud (SAC)</li><li>Q & A</li></ul></td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>qTest CAB - Support, Training, Professional Service and Migration </td><td> February 23</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/broadcom/ldr.php?RCID=2cdf4bc82aac462890812ae1cc24a53d' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides 1:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1gFj9-gMgMG3JPISPrlF7rdETsd9hXJm_IAgiC935bAo/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides 2:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://drive.google.com/file/d/1OB8RC3elQP9aQOndjTYC0_C6Bk6ZOFfB/view?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>QTest URL:</span> &nbsp; &nbsp; <a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fqtest.devops.broadcom.net%2F&sa=D&sntz=1&usg=AOvVaw1hOzXrdINLtP8onnm6uecn' style='margin: 0px 10px'>Open QTest</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Training registration sheet:</span> &nbsp; &nbsp; <a  target='_blank'  href='https://docs.google.com/spreadsheets/d/1LgkH9ewtP0n4d7DEwsi6PGINDsf9oIIb2oPgD9Z5hdc/edit?usp=sharing' style='margin: 0px 10px'>Open Sheet</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Migration Sheet:</span> &nbsp; &nbsp; <a  target='_blank'  href='https://docs.google.com/spreadsheets/d/1W9e3vnRZ_UkFd0Hz4RgURkxTFA0BzDsdczcSGiPKMcI/edit?usp=sharing' style='margin: 0px 10px'>Open Sheet</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='1'></td>
      </tr>
      <tr class='toggle-row cab1'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>Test Case Management CAB - qTest rollout plan</td><td> January 19</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/webappng/sites/broadcom/recording/ea35528ba46d498f970345bb7aabf3d1/playback' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1NDstJji_mjUjlKt1paauZvjpFwyGga-ulAPROfDeYFA/edit#slide=id.g5c46ef74e8_0_17' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='2'></td>
      </tr>
      <tr class='toggle-row cab2'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>Pipeline CAB</td><td> December 11</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Fmeeting%2Fpostinfo%2Fd7fbb23539a84f58bdc7f50e3358143c_I_180267112384703155&sa=D&sntz=1&usg=AOvVaw25eWQhjxp9XNYAZtwk4Gx3' style='margin: 0px 10px'>Open Webex</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='3'></td>
      </tr>
      <tr class='toggle-row cab3'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>Pipeline CAB</td><td> November 2</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Frecordingservice%2Fsites%2Fbroadcom%2Frecording%2Fplay%2Fda08959d7efa4dc9ace171c67cadf6b8&sa=D&sntz=1&usg=AOvVaw28twSnD1tNuxke5w38A4I6' style='margin: 0px 10px'>Open Webex</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='4'></td>
      </tr>
      <tr class='toggle-row cab4'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>Test Case Management CAB</td><td> August 28</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/webappng/sites/broadcom/recording/play/671363c5a9734112ac0577dadab75440' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/10BPL3knWCEnjHV05K2eLDDB8uFgw1GvcSfxpGNptdhE/edit#slide=id.g93146aa441_0_29' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='5'></td>
      </tr>
      <tr class='toggle-row cab5'>
      <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
    </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>BSG/SED JIRA CAB</td><td> October 29 2021 - 8 AM PST</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/fe03d9f41af6103aa5df0050568f090e/playback' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1tFC8aM6-XkHRfsvOt03wtV5lZ9-Z-R3cJ-ThX1DOKI8/edit#slide=id.gdec524b778_0_122' style='margin: 0px 10px'>Open Google Slides</a></div></td>  <td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='6'></td>
      </tr>
      <tr class='toggle-row cab6'>
        <td colspan=4'><ul><li>SED JIRA new URL & Architecture</li><li>Highlights</li><li>Why is this happening</li><li>Impact for users</li><li>Migration Timeline</li><li>Next steps</li><li>Q & A</li></ul></td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>Toro CAB Meeting</td><td> October 15 2021</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://drive.google.com/file/d/1w2pBrRAGsYeg5z8bOC8CGCBf2yp0DKJh/view?usp=sharing' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1lCRBKJKg4q7o73jcQWdGZctwgcS5Nbs2b0sT3vbUHKs/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='7'></td>
      </tr>
      <tr class='toggle-row cab7'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>CAWiki CAB Meeting</td><td> October 13 2021</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/b156299f0e6c103ab7d50050568ffb55/playback' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/16FIXR8h-8qFYzZa-JmsxgyDov0jPt6QK7Wa8BdqntpI/edit#slide=id.gdf172f1b70_0_0' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='8'></td>
      </tr>
      <tr class='toggle-row cab8'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>BlackDuck & Coverity CAB for SED</td><td> July 16</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fent.box.com%2Fs%2F1xhyubqpey4y89shqom3ooocpkm45kke&sa=D&sntz=1&usg=AOvVaw1Jsq6R7lBKvz5sP0FApdNb' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://drive.google.com/a/broadcom.com/open?id=1D3h73LN8X0KqwLW9c1qFv-XnMoBv-UnjOglAPGbOxSM' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='9'></td>
      </tr>
      <tr class='toggle-row cab9'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>DecSecOps CAB</td><td> July 2</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplayback%2Fa3f19fcdae764105994b22b39db39818&sa=D&sntz=1&usg=AOvVaw3uTshzjp_2otKFUCJzuq3l' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1XSSzj16DqtqhkdKc6MZkTAmXBp6qx98LhwfGiYMGUcI/edit#slide=id.p5' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='10'></td>
      </tr>
      <tr class='toggle-row cab10'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>Synchronicity HW DevOps CAB</td><td> July 2</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fent.box.com%2Fs%2Fg0sztz4h6103wmuepb6m0orobz03or9k&sa=D&sntz=1&usg=AOvVaw2tVV5bFtFJXsW5v1EqoRxl' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fent.box.com%2Fs%2Frtz2en0kfeiwutx5owam71gm3iewqhda&sa=D&sntz=1&usg=AOvVaw3SXiJmgHgxAZ1VNuTbUkty' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='11'></td>
      </tr>
      <tr class='toggle-row cab11'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>GitHub CAB</td><td> July 24</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://drive.google.com/file/d/1SpLGMlDQDI43Ts4tcQJxlrlftfHeBi2X/view?usp=sharing' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1IMmlzwPl7OSyZ1s-rRJvSfnAnTYjbH-usl1OkOLO7NI/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='12'></td>
      </tr>
      <tr class='toggle-row cab12'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>Jira/Confluence CAB</td><td> June 10</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Frecordingservice%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F80c9fa2992494fb49115e55ef692407a&sa=D&sntz=1&usg=AOvVaw0y8HOstRnf1LWVN4zs6uqU' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1YqfpF6kXjRf8V9LcpT26Q5XTfESfHwyy6fxyeDM1WJ0/edit#slide=id.g885015f7f7_0_3' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='13'></td>
      </tr>
      <tr class='toggle-row cab13'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>JFrog Platform/Artifactory CAB</td><td> June 8</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplayback%2F2b448f4222154ab6800adc9777db090b&sa=D&sntz=1&usg=AOvVaw0SR405oPdbXN6FRS1vLIe8' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1jfQOoBVqo1KOGFs-3QcoSCjxj1CZKyraFofQpHcvgj4/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='14'></td>
      </tr>
      <tr class='toggle-row cab14'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>Test Case Management CAB</td><td> May 22 @ 9am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F099b7de75df24cda9e917709a27b3239&sa=D&sntz=1&usg=AOvVaw3BWuKox2qlplpQ7OEW2vAq' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/10BPL3knWCEnjHV05K2eLDDB8uFgw1GvcSfxpGNptdhE/edit#slide=id.g6f35f1083f_0_129' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='15'></td>
      </tr>
      <tr class='toggle-row cab15'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
        <td>Test Case Management CAB</td><td> March 24 @ 8:30</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F681227ff3f1b4a76833c0d7fa10e3354&sa=D&sntz=1&usg=AOvVaw39JiV24i6a-AArztdqi4E_' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/10BPL3knWCEnjHV05K2eLDDB8uFgw1GvcSfxpGNptdhE/edit#slide=id.g6f35f1083f_0_129' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='16'></td>
      </tr>
      <tr class='toggle-row cab16'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr><td colspan='4' style='text-align: center; color: #ce0930; padding: 20px; cursor: pointer' class='more-less' id='1'></td></tr>
      </table>
      </div>`,
      items: null,
      layout: '2',
      icon: advisory,
      is_featured: false,
    },
    {
      id: '3',
      display_name: 'Test Case Management',
      is_active: 1,
      description: `<div class='cab-table'><table>
      <tr> <th style='width: 300px'>Title</th> <th style='width: 250px'>Date & Time</th> <th> Links </th> <th /></tr>

      <tr class='initial-data'>
        <td>Test Case Management - Qtest Jira Integration session 6 </td><td>November 13 @ 9am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://tricentis.zoom.us/rec/share/b7SrPRFbag5C7mlRRVfvrmTyWPdjmR1ehGMXaT57t4wpSVkjyu4UanYUmvf_yazw.vzkYEtHuIKahBnuP' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; f.&iHTE7</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='0'></td>
      </tr>
      <tr class='toggle-row tcm0'>
        <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest and Jira integration</li><li>Type of connection and what is integrated</li><li>Defect filing using the integrated system</li><li>Information sent back into Jira</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fgetting_started_with_jira_integration.htm&sa=D&sntz=1&usg=AOvVaw3uOOwIITyaNDxOouDY9gVl' target='_blank'>Getting Started with Jira Integration</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fconnect_jira_integration.htm&sa=D&sntz=1&usg=AOvVaw0IjnDkaCYbDGGxFSCrCJYI' target='_blank'>Connect to Jira Integration</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fconfigure_jira_defects_.htm&sa=D&sntz=1&usg=AOvVaw2pxkIA8bil8NcXSg2AS5ZW' target='_blank'>Configure Jira Defects</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fimport_and_use_releases_from_jira.htm&sa=D&sntz=1&usg=AOvVaw21N00NeKx75nBxb_SRlXEk' target='_blank'>Import and Use Releases from Jira</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fimport_and_use_requirements_from_jira.htm&sa=D&sntz=1&usg=AOvVaw3xXas6klP6VWo3AppoQRYU' target='_blank'>Import and Use Requirements from Jira</a></li></ul></td>
      </tr>

      <tr class='initial-data'>
        <td>Test Case Management - Qtest Rally Integration session 5</td><td>November 13 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F_zMLZsuxHfEKhd4wIhEqjjdcjMH5rX56-EZj2Hmd-dLcidEUnEB_zsm1n7mk58k.9OERfqZKrZ5b6iq3&sa=D&sntz=1&usg=AOvVaw04u_it-7ljpUEYge7JgG5R' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; RGn!^@6K</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='1'></td>
      </tr>
      <tr class='toggle-row tcm1'>
        <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest and Rally integration</li><li>Type of connection and what is integrated</li><li>Defect filing using the integrated system</li><li>Information sent back into Rally</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fintegration_with_rally.htm&sa=D&sntz=1&usg=AOvVaw2watCOeWaMC9pgDHuT7M4h' target='_blank'>qTest - Integration with Rally</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dbest_practices%2Fbest_practices_for_integrating_with_rally.htm&sa=D&sntz=1&usg=AOvVaw1EE994ePFgRPQWBWNcwkwm' target='_blank'>Best Practices for integration with Rally</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dbest_practices%2Fbest_practices_for_integrating_with_rally.htm&sa=D&sntz=1&usg=AOvVaw1EE994ePFgRPQWBWNcwkwm' target='_blank'>Configuring the integration in qTest</a></li></ul></td>
      </tr>

      <tr class='initial-data'>
        <td>Test Case Management - Qtest Report and Analytics session 4</td><td>November 12 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2Fae5W-lBb4LrY8Zr_Z0CTU5W-pHvEyx8fMfGjJCrOIow1UO_LTcJE-9Mujcd17TLh.i_sYpaoFPRoLrO9-&sa=D&sntz=1&usg=AOvVaw1NKXbomvgl2x5F7889setS' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; a*7*aigF</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='2'></td>
      </tr>
      <tr class='toggle-row tcm2'>
        <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest Insights default dashboards</li><li>Filtering report data based on projects and other components</li><li>Creating custom dashboards</li><li>Creating custom reports</li><li>Scheduling and sending reports through e-mail</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_insights%2Fintroduction%2Finsights_quick_start_guide.htm&sa=D&sntz=1&usg=AOvVaw2c2aVXd-X82oMA0wliDYzW' target='_blank'>Insights – Quick Start Guide</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Fintroduction%2Fusing_global_filters.htm&sa=D&sntz=1&usg=AOvVaw3dyMcBsysSVTx3tOAtstm6' target='_blank'>Using Global Filters</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Fdashboards%2Fdashboards.htm&sa=D&sntz=1&usg=AOvVaw23DYbIpjcTcBLywRFEdZFO' target='_blank'>Dashboards</a></li><li><a target='_blank' href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Freporting%2Fexplore_data_and_custom_reporting.htm&sa=D&sntz=1&usg=AOvVaw3RFeB9I2-u2VAWHotFV2Qx'>Explore Data and Custom Reporting</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Freporting%2Fmanage_and_schedule_reports__with_new_scheduler_.htm&sa=D&sntz=1&usg=AOvVaw0AkIXh1GADCtn__Yd4srrD' target='_blank'>Manage and Schedule Reporting</a></li></ul></td>
      </tr>

      <tr class='initial-data'>
        <td>Test Case Management - Qtest Exploratory Testing session 3</td><td> November 11 @ 10am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F0Kvis1yM4SYkjEOr_zJAQLVI1Tt_LuTC_27CUlBAWJN5jFuPAzwv9h0W3o_ZmRe8.Gsl4zISGBHjuCp-A&sa=D&sntz=1&usg=AOvVaw3Or6l7i_VcFb96vt7pwYbY' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; R%R%0@De</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='3'></td>
      </tr>
      <tr class='toggle-row tcm3'>
        <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest Explorer recording in a web browser</li><li>Editing and markup of captured screenshots and steps</li><li>Creating and updating a defect</li><li>Creating and updating a test case</li><li>Exporting exploratory session to a document</li><li>Creation of automated scripts</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_explorer_sessions%2Fweb_explorer_user_guide%2Fweb_explorer_quick_start_guide.htm&sa=D&sntz=1&usg=AOvVaw0_vzK-mXyDcgvFfMxRThNd' target='_blank'>Web Explorer – Quick Start Guide</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fweb_explorer_user_guide%2Ftest_and_record.htm&sa=D&sntz=1&usg=AOvVaw0XpXd_Tk4bHz1nkAgLbtYe' target='_blank'>Record Testing Sessions Using Web Explorer</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fdesktop_explorer_user_guide%2Fdesktop_explorer_quick_start_guide.htm&sa=D&sntz=1&usg=AOvVaw1MHsJSAZlMuSYD5P-nqKwj' target='_blank'>Desktop Explorer – Quick Start Guide </a></li><li>Sessions Module</li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fsessions_module%2Freview_in_session_editor.htm&sa=D&sntz=1&usg=AOvVaw0rDXjGxq6fA6jjFkzx9uyQ' target='_blank'>Review In Session Editor</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fsessions_module%2Fsubmitting_defect.htm&sa=D&sntz=1&usg=AOvVaw2v_4sQL4RkInjEKAVcijym' target='_blank'>Submitting Defects</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fsessions_module%2Fsubmitting_test_case.htm&sa=D&sntz=1&usg=AOvVaw2qmQ428_ddxjDKT2r85vgO' target='_blank'>Submitting Test Cases</a></li></ul></td>
      </tr>

      <tr class='initial-data'>
        <td>Test Case Management - Qtest Tips and Tricks session 2</td><td> November 10 @ 7am & 1pm</td><td><div style='display: flex; align-items: center; padding: 5px'><i>Morning Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://tricentis.zoom.us/rec/share/oT4zQll3h86kj__VaBebHFJFO0BBzzijH2A4xdbsbGvMBCyJejMTgVzuZPFPddiQ.l6bL3hc_FnxXKgGo' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; zQ1V%c!2</div><div style='display: flex; align-items: center; padding: 5px'><i>Afternoon Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FoT4zQll3h86kj__VaBebHFJFO0BBzzijH2A4xdbsbGvMBCyJejMTgVzuZPFPddiQ.l6bL3hc_FnxXKgGo&sa=D&sntz=1&usg=AOvVaw1o-hxPC-UkyTjtj9qZLbyc' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; zQ1V%c!2</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='4'></td>
      </tr>
      <tr class='toggle-row tcm4'>
        <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>Creation of Test Suites/Test Runs</li><li>Creating the structure and flexibility in qTest</li><li>Adding tests/test runs to a test suite</li><li>Test Execution – Filing Bugs</li><li>Walked through creating a bug from a manual test run</li><li>Discussed other ways such as linking and exploratory testing bug submission</li><li>Using a CI/CD – Jenkins</li><li>Showed the qTest Jenkins plugin and went over the configuration</li><li>Showed that in qTest Manager (test Execution tab) the Test Suite and test runs are automatically created and status shown without any manual creation of shell test executions</li><li>Status, logs and history of executions is available automatically when running the automated tests</li><li>Where is the help?</li><li>Within the qTest Manager (and any other qTest screen)</li><li>The link to documents, videos, submitting tickets and other help can be found in the upper right corner</li><li>Finding the hot keys</li><li>For each tab within qTest  Manager, the hot keys menu can be found in the bottom left corner of the screen, and when clicked, expands the short cuts list</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_manager%2Ftest_execution%2Flanding_page_test_execution.htm&sa=D&sntz=1&usg=AOvVaw1PNww9OONWh2GEQzqbbTDj' target='_blank'>Test Execution</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_manager%2Ftest_execution%2Fadd_test_runs%2Fadd_test_runs_landing_page.htm&sa=D&sntz=1&usg=AOvVaw34tPdf5X61MBj_OxaKHtzw' target='_blank'>Add Test Runs</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_manager%2Fdefects%2Fsubmit_defects_in_test_execution.htm%23Submit&sa=D&sntz=1&usg=AOvVaw1MiB-7hcuguGT4QlmYmHXI' target='_blank'>Submit Defects in Test Execution</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_apis%2Fci_integrations%2Fjenkins_and_bamboo_integration.htm&sa=D&sntz=1&usg=AOvVaw0iiOFMAs5OJTM0Tg0HrZ3t' target='_blank'>qTest-Jenkins Integration </a></li></ul></td>
      </tr>

      <tr class='hole-data table2'>
        <td>Test Case Management - Qtest Tips and Tricks session 1</td><td> November 9 @ 7am & 1pm</td><td><div style='display: flex; align-items: center; padding: 5px'><i>Morning Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FdJAQdOwfI7bxoxhouiHbpl0cKpdA_i62vdHltqrKba-Ej5elGkAytYK4gNaeM9m3.oqnZ81-AQbmKGZsn&sa=D&sntz=1&usg=AOvVaw3b5AjIO3bJ277Rbiz6ouiz' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; %*@bHn0k</div><div style='display: flex; align-items: center; padding: 5px'><i>Afternoon Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F8UJpt3ask4ZtIr-auczmeoi7CKKdiWjDFmwqEaL41UQugO8XVVfaNP19drvOXc7h.JxZOv4ZcEEy3NCmN&sa=D&sntz=1&usg=AOvVaw0vYUA9fLyOZsbyKeIEgMQu' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; tZR*pw7R</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='5'></td>
      </tr>
      <tr class='toggle-row tcm5'>
        <td colspan='4'><p><strong>What is covered from the session:</strong></p><ul><li>Custom fields:</li><li>Difference between Site-level and project-level fields</li><li>Modifying lists of existing fields (default and custom)</li><li>Creating and modifying custom fields in qTest (project-level fields)</li><li>Importing/exporting of test cases</li><li>Excel Import of test cases</li><li>Data querying for requirements and test cases</li><li>Ability to create queries to view assignments, duplicate tests, etc.</li><li>Best Practices for Test cases</li><li>Modularized test cases</li><li>Utilizing parameters and embedded test cases</li><li>Test case sharing</li></ul></td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest end user training</td><td> October 23 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F5a8YGo7yZsBK06hCIpf9Er43ibYXffwnLXYLDwzm10TK-mmuiEjmuuMzil7uzdJs.deV-e_STLA-O_0LH&sa=D&sntz=1&usg=AOvVaw2H6Dp7LwNwUWSXJvKaIOjj' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; L=26C@!L</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='6'></td>
      </tr>
      <tr class='toggle-row tcm6'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest admin session</td><td> October 22 @ 1am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FscEuPsk-n3LDIhtvaHbandBnkUMhYHo2_vSD8yO01y6MuzcB-yUTwJD6PWaSEWh5.A7nol5IspBe81o5S&sa=D&sntz=1&usg=AOvVaw2r11jxtm-dYDm9RnkAvl-U' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; E*R$2aPc </div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='7'></td>
      </tr>
      <tr class='toggle-row tcm7'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest installation</td><td> October 15 @ 10am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FfryO8y1s0WF9OVomzx6_Ato2Z5fiwXWus0g3LWp4WYtIz4DB5xc3m79UQRG7ZUBj.2PQIHZ9MTZi59MPS&sa=D&sntz=1&usg=AOvVaw14KkfsfsCl9kyVUq8muI4S' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; T@!gg0&6 </div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='8'></td>
      </tr>
      <tr class='toggle-row tcm8'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest mainframe support demo</td><td> October 7 @ 3am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F1d3409b7e622411e9445e32a77e20af2&sa=D&sntz=1&usg=AOvVaw2lQFGlvvmq59I6SpqB2iW0' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='9'></td>
      </tr>
      <tr class='toggle-row tcm9'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest pilot planning</td><td> October 5 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F17ae083fba63451eb87b78ac8fa3371f&sa=D&sntz=1&usg=AOvVaw1ULYjp3ousbL2w9lhrsn-b' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='10'></td>
      </tr>
      <tr class='toggle-row tcm10'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - TestRail demo</td><td> October 2 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2Ff3ad836ff7ca4c3e855e9dd655bf5de0&sa=D&sntz=1&usg=AOvVaw2hU9hdhDHXYClxLjSljYLy' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='11'></td>
      </tr>
      <tr class='toggle-row tcm11'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest demo follow up</td><td> October 1 @ 8:30am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F4e00572906c04ac8a1dc73c66e202411&sa=D&sntz=1&usg=AOvVaw0nADrHutUfIB5IwM6t5bdo' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='12'></td>
      </tr>
      <tr class='toggle-row tcm12'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Test Collab demo </td><td> September 30 @ 9am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2F9ISkgO0-uLVtvFrTHFJcfChTl8DFBLVJmNtLt1M_h37iy3I9JmVJN097OHQ2sI3A.NvEgFH1o1KjDPW1E&sa=D&sntz=1&usg=AOvVaw2Io_YHNzExcn5N-rOXUORZ' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; AQFS0PP$ </div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='13'></td>
      </tr>
      <tr class='toggle-row tcm13'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
        <td>Test Case Management - Qtest demo </td><td> September 25 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F635bb7d3eba84a659c2a22358da3bb6a&sa=D&sntz=1&usg=AOvVaw0gGFw6EhwUmx0Cdq3H9c2d' style='margin: 0px 10px'>Open Webex</a></div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='14'></td>
      </tr>
      <tr class='toggle-row tcm14'>
        <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
      </tr>

      <tr>
        <td colspan='4' style='text-align: center; color: #ce0930; padding: 20px; cursor: pointer' class='more-less' id='2'></td>
      </tr>
      </table>
      </div>`,
      items: null,
      layout: '2',
      icon: testcase,
      is_featured: false,
    },
    {
      id: '4',
      display_name: 'SED Hypercare Meeting',
      is_active: 1,
      description: `<div class='cab-table'><table>
      <tr> <th>Title</th> <th>Date & Time</th> <th> Links </th> </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>SED Hypercare Meeting </td><td> April 6 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/14deac6f7bf047109185655dde7788cc' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>SED Hypercare Meeting </td><td> April 3 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/15fbe188159a43b987d60dd08ec9af55' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>SED Hypercare Meeting </td><td> April 8 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/8744bdf4aca54790a5f5da33ceb50905' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>SED Hypercare Meeting </td><td> April 7 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/d8a2235e65c84353a6d81617c9fc330a' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
        <td>SED Hypercare Meeting </td><td> April 2 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/cfe6d029fc66495ebaa4dca10451a3b1' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7'  class='hole-data table3'>
        <td>SED Hypercare Meeting </td><td> April 1 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/0208267064a04c1b92ed52c531b6c4d2' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7'  class='hole-data table3'>
        <td>SED Hypercare Meeting </td><td> March 31 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/04022e47110b44d6b74114d227956134' style='margin: 0px 10px'>Open Webex</a></div></td>
      </tr>
      <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7'  class='hole-data table3'>
        <td>SED Hypercare Meeting</td><td> March 30 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/playback/7069fbfcb7b648209a135e5a51f8208a' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1Gfcv1FJPHTANQtRr5bSLlQ_RaKyrAVpjTB4v-o5At3s/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td></td>
      </tr>
      <tr><td colspan='4' style='text-align: center; color: #ce0930; padding: 20px; cursor: pointer' class='more-less' id='3'></td></tr>
      </table>
      </div>`,
      items: null,
      layout: '2',
      icon: advisory,
      is_featured: false,
    },
    {
      id: '5',
      display_name: "<div style='padding: 0px 15px'><h3>DevOps News</h3></div>",
      is_active: 1,
      description: null,
      items: null,
      layout: '2',
      icon: news,
      is_featured: true,
      url: 'https://docs.google.com/presentation/d/1VAUUCfguRsffio8f8KpnOljAwxq7iz683dHjS2aNDeA/present?slide=id.g6f1f68ada1_0_217',
      type: 'slider',
    },
    {
      id: '6',
      display_name: 'Videos',
      is_active: 1,
      description: '<div><p>This is the video</p></div>',
      is_featured: false,
      items: [
        {
          id: 1,
          url: devops_video1,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 2,
          url: devops_video2,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {},
      ],
      layout: '2',
      icon: video,
    },
    {
      id: '7',
      display_name: 'Useful Links',
      short_description: 'On this site you will find:',
      is_active: 1,
      description: null,
      items: [
        {
          id: 0,
          name: null,
          icon: null,
          layout: '4',
          description: `<div style=' border-radius: 4px; padding: 10px; margin: 10px 0px;background: #FFFFFF; border: 1px solid #C6C6C6; min-height: 100px'><div style='display: flex; flex-direction: row; align-items: center;'> <div style='padding-right: 10px'><img src=${onboard} /></div><div style='font-weight: 600'>Onboarding</div></div><div><ul style='list-style-image: url(${link}); padding: 0px 30px'><li><a href='https://sites.google.com/broadcom.com/gtso-devops/onboarding/faq' target='_blank'>FAQ</a></li></ul></div></div>`,
        },
        {
          id: 1,
          name: null,
          icon: null,
          layout: '4',
          description: `<div style=' border-radius: 4px; padding: 10px; margin: 10px 0px;background: #FFFFFF; border: 1px solid #C6C6C6; min-height: 100px'><div style='display: flex; flex-direction: row; align-items: center;'> <div style='padding-right: 10px'><img src=${pipeline} /></div><div style='font-weight: 600'>Pipeline</div></div><div style='display: flex; flex-direction: row'><div><ul style='list-style-image: url(${link}); padding: 0px 30px'><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fsbocipipeline%2Fhome&sa=D&sntz=1&usg=AOvVaw3RD-3AhofeY_wb32uBtwPc' target='_blank'>CI</a></li></div><div><ul style='list-style-image: url(${link}); padding: 0px 30px'><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fsaas-ops-cd-pipeline%2Fhome&sa=D&sntz=1&usg=AOvVaw1t9rnoD3jfB_JZhQuYfNmk' target='_blank'>CD</a></li></div><div><ul style='list-style-image: url(${link}); padding: 0px 30px'><li><a href='https://sites.google.com/broadcom.com/gtso-devops/pipeline/shared-library' target='_blank'>Shared Library</a></li></div></div></div>`,
        },
        {
          id: 2,
          name: null,
          icon: null,
          layout: '4',
          description: `<div style=' border-radius: 4px; padding: 10px; margin: 10px 0px;background: #FFFFFF; border: 1px solid #C6C6C6; min-height: 100px'><div style='display: flex; flex-direction: row; align-items: center;'> <div style='padding-right: 10px'><img src=${securities} /></div><div style='font-weight: 600'>Security</div></div><div><ul style='list-style-image: url(${link}); padding: 0px 30px'><li><a href='https://sites.google.com/broadcom.com/gtso-devops/security/digital-assurance' target='_blank'>Digital Assurance</a></li></ul></div></div>`,
        },
        {
          id: 3,
          name: null,
          icon: null,
          layout: '5',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${comms} /></div><div style='flex: 2;  padding: 0px 10px'><strong>Comms</strong></div></div><div style='display: flex; flex-direction: row' class='commsTab'><div  style='flex: 1'><ul style='list-style-image: url(${link})'><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/support' target='_blank'>Support</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/planned-maintenance' target='_blank'>Planned Maintenance</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/outages' target='_blank'>Outages</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/forums-cabs-qbrs' target='_blank'>Forums, CABS, QBRs</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/com-to-net-migration' target='_blank'>.com to .net Migration</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/golden-ip-migration' target='_blank'>Golden IP Migration</a></li></ul></div><div style='flex: 1'><ul style='list-style-image: url(${link})'><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/groups' target='_blank'>Groups</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/onboarding/faq' target='_blank'>FAQ</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/docker-desktop' target='_blank'>Docker Desktop</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/comms/recognition' target='_blank'>Recognition</a></li></ul></div></div></div>`,
        },
        {
          id: 4,
          name: null,
          icon: null,
          layout: '7',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${tools} /></div><div style='flex: 2;  padding: 0px 10px'><strong>Tools</strong></div></div><div style='display: flex; flex-direction: row' class='commsTab'><div style='flex: 1'><ul style='list-style-image: url(${link})'><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/support' target='_blank'>Support</a></li><li style='padding: 5px'><a href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.leanix.net%2FBroadcom%2Fportals%2FTool%2520Stack&sa=D&sntz=1&usg=AOvVaw19Mpy3b-OQLQ9Bmq1tTK0Q' target='_blank'>leanIX Portal</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/supported-software' target='_blank'>Software</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/evaluations' target='_blank'>Evaluations</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/artifactory' target='_blank'>Artifactory</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/miro' target='_blank'>Miro</a></li></ul></div><div style='flex: 1'><ul style='list-style-image: url(${link})'><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/bintray' target='href'>Bintray</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/bitbucket' target='_blank'>BitBucket</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/blackduck' target='_blank'>BlackDuck</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/blazemeter' target='_blank'>Blazemeter</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/confluence' target='_blank'>Confluence</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/slack' target='_blank'>Slack</a></li></ul></div><div style='flex: 1'><ul style='list-style-image: url(${link})'><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/coverity' target='_blank'>Coverity</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/gerrit' target='_blank'>Gerrit</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/github' target='_blank'>GitHub</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/intellij-idea' target='_blank'>IntelliJ Idea</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/jenkins' target='_blank'>Jenkins</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/jira' target='_blank'>Jira</a></li></ul></div><div style='flex: 1'><ul style='list-style-image: url(${link})'><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/perforce' target='_blank'>Perforce</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/qtest' target='_blank'>qTest</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/sonarqube' target='_blank'>SonarQube</a></li><li style='padding: 5px'><a href='https://sites.google.com/broadcom.com/gtso-devops/tools/xray' target='_blank'>Xray</a></li></ul></div></div></div>`,
        },
        {
          id: 5,
          name: null,
          icon: null,
          layout: '3',
          description: `<div><a style='color: #000; text-decoration: none' target='_blank' href='https://sites.google.com/broadcom.com/gtso-devops/roadmap'><div style='display: flex; flex-direction: row; align-items: center; border-radius: 4px; border: 1px solid #C6C6C6; padding: 10px; margin: 10px 0px;'><div style='background: transparent; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${roadmap} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Roadmap</h3></div></div></a></div>`,
        },
        {
          id: 6,
          name: null,
          icon: null,
          layout: '3',
          description: `<div><a style='color: #000; text-decoration: none' target='_blank' href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fhardware-devops&sa=D&sntz=1&usg=AOvVaw0dXoyjycVwGxaTgXUfKWy9'><div style='display: flex; flex-direction: row; align-items: center; border-radius: 4px; border: 1px solid #C6C6C6; padding: 10px; margin: 10px 0px;'><div style='background: transparent; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${hardware} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Hardware Devops</h3></div></div><a/></div>`,
        },
        {
          id: 7,
          name: null,
          icon: null,
          layout: '3',
          description: `<div><a style='color: #000; text-decoration: none' target='_blank' href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fhardware-devops%2Fsynchronicity&sa=D&sntz=1&usg=AOvVaw0ZcP1csdiyeu-eb_I_itHw'><div style='display: flex; flex-direction: row; align-items: center; border-radius: 4px; border: 1px solid #C6C6C6; padding: 10px; margin: 10px 0px;'><div style='background: transparent; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${synchronicity} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Synchronicity</h3></div></div></a></div>`,
        },
        {
          id: 8,
          name: null,
          icon: null,
          layout: '3',
          description: `<div><a style='color: #000; text-decoration: none' target='_blank' href='https://sites.google.com/broadcom.com/gtso-devops/accessibility'><div style='display: flex; flex-direction: row; align-items: center; border-radius: 4px; border: 1px solid #C6C6C6; padding: 10px; margin: 10px 0px;'><div style='background: transparent; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${accessibility} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Accessibility</h3></div></div></a></div>`,
        },
      ],
      others: [],
      layout: '2',
      icon: useful_link,
      is_featured: false,
    },
    {
      id: '8',
      display_name:
        "<div style='padding: 0px 15px'><h3>Getting Support</h3></div>",
      is_active: 1,
      description: `<div class='cab-table'><table>
      <tr><th>Getting Help</th> <th>Name</th> <th> Email / More Info </th> </tr>
      <tr>
        <td>Finding Answers</td><td>SlackBot</td> <td><div style='display: flex; align-items: center'><img style='padding: 8px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slack} /><a  target='_blank'  href='https://app.slack.com/client/T01MTJCTQNM/D01NEATBLLT/thread/G01SJG8FRAM-1655140005.706089' style='margin: 0px 10px'>Open Slack</a></div></td>
      </tr>
      <tr style='border-bottom: 1px solid #D7D7D7; border-top: 1px solid #D7D7D7'>
        <td>First Level for help or issues</td><td><a target='_blank' href='https://broadcomprd.service-now.com/saas_sp'>Broadcom SBO Support</a></td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 4px 15px; border-radius: 90px; border: 1px solid #e4e5e7'><img style='margin-top: 5px' src=${chat} /></span><span style='padding: 10px'><a target='_blank' href='https://broadcomprd.service-now.com/saas_sp'>Google Chat</a></span></td>
      </tr>
      </table>
      </div>`,
      items: null,
      layout: '2',
      icon: support,
      is_featured: true,
    },
    {
      id: '10',
      display_name:
        "<div style='padding: 0px 15px'><h3>Meet the Team: <a href='#'>Devops</a></h3></div>",
      is_active: 1,
      description: null,
      image: slack_image,
      items: [
        {
          id: 1,
          icon: null,
          layout: '1',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; min-height: 170px'><ul style='list-style-image: url(${email});'><li style='padding: 3px'><a href='mailto:andrew.dubas@broadcom.com'>andrew.dubas@broadcom.com</a></li><li style='padding: 3px'><a  href='mailto:anthony.jeffery@broadcom.com'>anthony.jeffery@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:bhagyasri.karanam@broadcom.com'>bhagyasri.karanam@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:bill.morton@broadcom.com'>bill.morton@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:blane.musser@broadcom.com'>blane.musser@broadcom.com</a></li></ul></div>`,
        },
        {
          id: 2,
          icon: email,
          layout: '1',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; min-height: 170px'><ul style='list-style-image: url(${email})'><li style='padding: 3px'><a href='mailto:christopher.whateley@broadcom.com'>christopher.whateley@broadcom.com</a></li><li style='padding: 3px'><a  href='mailto:dan.chau@broadcom.com'>dan.chau@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:doug.sieberg@broadcom.com'>doug.sieberg@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:gourisankar.das@broadcom.com'>gourisankar.das@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:kami.shishegar@broadcom.com'>kami.shishegar@broadcom.com</a></li></ul></div>`,
        },
        {
          id: 3,
          icon: email,
          layout: '1',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; min-height: 170px'><ul style='list-style-image: url(${email})'><li style='padding: 3px'><a href='mailto:naveen.gandamalla@broadcom.com'>naveen.gandamalla@broadcom.com</a></li><li style='padding: 3px'><a  href='mailto:rajeev.deshpande@broadcom.com'>rajeev.deshpande@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:ramesh.udatha@broadcom.com'>ramesh.udatha@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:ravi.jaladi@broadcom.com'>ravi.jaladi@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:ravindra.kulkarni@broadcom.com'>ravindra.kulkarni@broadcom.com</a></li></ul></div>`,
        },
        {
          id: 4,
          icon: email,
          layout: '1',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; min-height: 170px'><ul style='list-style-image: url(${email})'><li style='padding: 3px'><a href='mailto:russ.frisch@broadcom.com'>russ.frisch@broadcom.com</a></li><li style='padding: 3px'><a  href='mailto:sadatullah.mohammed@broadcom.com'>sadatullah.mohammed@broadcom.com</a></li><li style='padding: 3px'><a href='mailto: sarma.kanchinadham@broadcom.com'>sarma.kanchinadham@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:srinivas.patruni@broadcom.com'>srinivas.patruni@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:surender.biyyala@broadcom.com'>surender.biyyala@broadcom.com</a></li></ul></div>`,
        },
        {
          id: 5,
          icon: email,
          layout: '1',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; min-height: 170px' class='mailTeam'><ul style='list-style-image: url(${email}); white-space: nowrap; overflow: hidden' class='mailHide'><li style='padding: 3px'><a href='mailto:venkat.prasad-sriramulu@broadcom.com'>venkat.prasad-sriramulu@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:venkata-murali-krishna.adiraju@broadcom.com'> venkata-murali-krishna.adiraju@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:zubairahmed.mohammed@broadcom.com'>zubairahmed.mohammed@broadcom.com</a></li></ul>`,
        },
      ],
      layout: '2',
      icon: advisory,
      is_featured: true,
    },
  ],
};

export const SaasOperationData: SaasOperationProps = {
  id: 1,
  name: 'Saas Operations',
  slug: 'saas-operations',
  banner_image: sass_bg,
  short_description: '<div><p>This is the description</p></div>',
  is_active: 1,
  created_at: null,
  updated_at: null,
  icon: null,
  banner_text: '<div><p>This is the banner text</p></div>',
  content_data: [
    {
      id: '1',
      display_name: 'Overview',
      is_active: 1,
      description: `<div><p>SaaSOps is a comprised of three functional areas including:</p><ul style='padding: 0px 15px'><li style='padding: 5px 0px;'>Service Operations - 24/7 Operational Supportfor SaaS products with proven ITIL Standard processes</li><li style='padding: 5px 0px;'>SPE -Service Management New Product Onboarding, ProductCapacity Management</li><li style='padding: 5px 0px;'>Business Operations, ITSM tools, Metric & Reporting</li></ul></div>`,
      items: null,
      layout: '2',
      icon: useful_link,
      is_featured: false,
      image: sass_overview_bg,
    },
    {
      id: '2',
      display_name: null,
      is_active: 1,
      description: `<div><div style='display: flex; flex-direction: row; padding: 15px 10px; align-items: center; border-bottom: 1px solid #e4e5e7; margin: 0px 15px'><div style='padding-right: 20px'><div style='background: #CC092F; border-radius: 90px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;'><img src='${sass_report}' style='width: auto' /></div></div><div style='flex: 2'><div ><a style='color: #CC092F; font-weight: 600;'  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsaas_sp%3Fid%3Dsc_cat_item%26sys_id%3D8622f7b7dbc9cc104956467239961942&sa=D&sntz=1&usg=AOvVaw3jXM0Vfs4P2ZCE9AMuTd6Z'>Report a SaaS Incident</a></div><div style='padding: 5px 0px'><i><strong>Service impacting issue? </strong>Raise directly with our 24/7 teams for priority triage.</i></div></div></div> <div style='display: flex; flex-direction: row; padding: 15px 10px; margin: 0px 15px; align-items: center; border-bottom: 1px solid #e4e5e7'><div style='padding-right: 20px'><div style='background: #fff; border-radius: 90px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border: 1px solid #e4e5e7'><img src='${slack}' style='width: 'auto' /></div></div><div style='flex: 2'><div ><a style='color: #CC092F; font-weight: 600;'  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fslack.com%2Fapp_redirect%3Fchannel%3DC021Q4DU1LL&sa=D&sntz=1&usg=AOvVaw2UeEYh89l4x3oH4RWVaJa2'>Slack-SaaSOps - 24/7 Tier 1</a></div><div style='padding: 5px 0px'><i><strong>Urgent issue? </strong>Connect directly with our 24/7 tier 1 team <strong>- (Emergency Escalation Only)</strong><i></div></div></div><div style='display: flex; flex-direction: row; padding: 15px 10px; margin: 0px 15px; align-items: center'><div style='padding-right: 20px'><div style='background: #CC092F; border-radius: 90px; width: 50px; height: 50px;  display: flex; align-items: center; justify-content: center;'><img src='${sass_calendar}' style='width: 'auto' /></div></div><div style='flex: 2'><div ><a style='color: #CC092F; font-weight: 600;'  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPSUP%2FService_Ops_MGR_OnCall_Rota&sa=D&sntz=1&usg=AOvVaw1QovpTr_K2m3q64MpiZScS'>SaaSOps Time-zone leads On-call rota (VPN)</a></div><div style='padding: 5px 0px'><i><strong>Urgent issue?</strong> Connect with our time-zone leaders, 24/7 coverage for <strong>all</strong> escalations.</i></div></div></div></div>`,
      items: null,
      layout: '2',
      icon: null,
      is_featured: false,
      image: null,
    },
    {
      id: '3',
      display_name: 'Videos',
      is_active: 1,
      description: '<div><p>This is the video</p></div>',
      is_featured: false,
      items: [
        {
          id: 1,
          url: saas_video1,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 2,
          url: saas_video2,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 3,
          url: saas_video3,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 4,
          url: saas_video4,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
        {
          id: 5,
          url: saas_video5,
          display_name: 'Video name',
          is_active: 1,
          type: 'video/mp4',
          caption: 'captions',
        },
      ],
      layout: '2',
      icon: video,
    },
    {
      id: '4',
      display_name: 'Useful Links',
      short_description: null,
      is_active: 1,
      description: null,
      items: [
        {
          id: 0,
          name: null,
          icon: null,
          layout: '4',
          description: `<div><div style='display: flex; flex-direction: row; align-items: center; border-radius: 4px; padding: 10px; margin: 10px 0px; background: #FAFBFE; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);'><div style='background: #CC092F; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${learn_more} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Learn More</h3></div></div></div>`,
        },
        {
          id: 1,
          name: null,
          icon: null,
          layout: '4',
          description: `<div><div style='display: flex; flex-direction: row; align-items: center;  background: #FAFBFE; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25); border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='background: #CC092F; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${quick_link} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Quick Links</h3></div></div></div>`,
        },
        {
          id: 2,
          name: null,
          icon: null,
          layout: '4',
          description: `<div><div style='display: flex; flex-direction: row; align-items: center;  background: #FAFBFE; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25); border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='background: #CC092F; border-radius: 90px; display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${sass_support} /></div><div style='flex: 2;  padding: 0px 10px'><h3>Reference</h3></div></div></div>`,
        },
        {
          id: 3,
          name: null,
          icon: null,
          layout: '4',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_knowledge} /></div><div style='flex: 2;  padding: 0px 10px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FIncident%2BManagement%2Band%2BEngagement%2Bwith%2BSaaSOps&sa=D&sntz=1&usg=AOvVaw0l7sb1lUqwfA1H2_2pHrOQ'><strong>Knowledge Hub (VPN)</strong></a></div></div><div><h4 style='margin-left: 30px'>Process 'How-tos'(VPN)</h4><ul style='margin: 0px 20px; list-style-image: url(${link})'><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FIncident%2BManagement%2Band%2BEngagement%2Bwith%2BSaaSOps&sa=D&sntz=1&usg=AOvVaw0l7sb1lUqwfA1H2_2pHrOQ'>Incident Management Enagagement</a></li><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRaising%2Ba%2BEmergency%2BChange&sa=D&sntz=1&usg=AOvVaw0p2MoEg_S84lCXqtOI7ZuM'>Raise an Emergency Change</a></li><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRaising%2Ba%2BNormal%2BChange&sa=D&sntz=1&usg=AOvVaw23D2gDre1ray6Sblt6uYi2'>Raise a Normal Change</a></li><li style='padding: 5px'><a   target='_blank' href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRaising%2Ba%2BStandard%2Bchange&sa=D&sntz=1&usg=AOvVaw16IwdQ7f3mpAhKQLx0M_pn'>Raise a Standard Change</a></li><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FImplementation%2BPlan%2BTemplates&sa=D&sntz=1&usg=AOvVaw0ofrGcVOCAWzyYcbFGjlEk'>Implementation Plan Templates</a></li></ul></div></div>`,
        },
        {
          id: 4,
          name: null,
          icon: null,
          layout: '4',
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_service} /></div><div style='flex: 2;  padding: 0px 10px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fstatus.broadcom.com&sa=D&sntz=1&usg=AOvVaw2CYTj33RfHLQEIG25_cBTZ'><strong>Service Status Page</strong></a></div></div><div><h4 style='margin-left: 30px'>Core Process</h4><ul style='margin: 0px 20px; list-style-image: url(${link})'><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdownload%2Fattachments%2F175010748%2FChange_Management_Process.docx%3Fapi%3Dv2&sa=D&sntz=1&usg=AOvVaw10xIV8znpzck2eXit33Mz8'>Change Management (VPN)</a></li><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdownload%2Fattachments%2F175010748%2FLogging_an_Incident.docx%3Fapi%3Dv2&sa=D&sntz=1&usg=AOvVaw3NSj48vU9kaNDhdZPHrD7Z'>Incident Management (VPN)</a></li><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FRelease%2BProcess&sa=D&sntz=1&usg=AOvVaw2gzGCFwen9ZcsGzisJfCZi'>Release Management (VPN)</a></li></ul><h4 style='margin-left: 30px'>Key Reference Items</h4><ul style='margin: 0px 20px; list-style-image: url(${link})'><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FClassification%2BMatrix&sa=D&sntz=1&usg=AOvVaw3lxw5z11ET7z22jB9oR2P2'>Incident Classification Matrix (VPN)</a></li><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsed-confluence.broadcom.net%2Fdisplay%2FAPPKB%2FPersonal%2BData%2BBreach%2BProcess&sa=D&sntz=1&usg=AOvVaw0spERzY-YcymJAE5FNDeQ-'>Personal Data Breach (VPN)</a></li><li style='padding: 5px'><a  target='_blank'  href='https://drive.google.com/file/d/1uPjnrJ81jxSLgutFMteSXvXnh-bN2EJy/view?usp=sharing'>RCA Guidance (VPN)</a></li></ul></div></div>`,
        },
        {
          id: 5,
          name: null,
          icon: null,
          layout: '4',
          // description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_issue} /></div><div style='flex: 2;  padding: 0px 10px'><h4>Non urgent issue or request?</h4></div></div><div><ul style='margin: 0px 40px; list-style-image: url(${link})'><li style='padding: 5px'><a target='_blank'   href='https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&sa=D&sntz=1&usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz'>Raise a Support Request</a></li></ul><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_your_service} /> </div><div style='flex: 2;  padding: 0px 10px'><h4>At your service...</h4></div></div><ul style='margin: 0px 40px; list-style-image: url(${link})'><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fbsg-bot%2Fhome&sa=D&sntz=1&usg=AOvVaw1X98Qe-VLIOSNLevWB6J9_'>How to use BSG-Bot</a></li></ul><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_report} /> </div><div style='flex: 2;  padding: 0px 10px'><h4>SaaSOps Reporting</h4></div></div><ul style='margin: 0px 40px; list-style-image: url(${link})'><li style='padding: 5px'><a target='_blank'   href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fsbo-portal%2Fhome%2Fsaasops%2Fproducts-support&sa=D&sntz=1&usg=AOvVaw1zGDuGtS58ySzwtHnz3zHs'>Products & Support</a></li><li style='padding: 5px'><a  target='_blank'  href='https://drive.google.com/drive/u/0/folders/0AK_FIeTH7r2kUk9PVA'>Service Review Archive</a></li></ul><div></div></div>`,
          description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_report} /> </div><div style='flex: 2;  padding: 0px 10px'><h4>SaasOps Reporting</h4></div></div><ul style='margin: 0px 40px; list-style-image: url(${link})'><li style='padding: 5px'><a target='_blank'   href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fsbo-portal%2Fhome%2Fsaasops%2Fproducts-support&sa=D&sntz=1&usg=AOvVaw1zGDuGtS58ySzwtHnz3zHs'>Products & Support</a></li><li style='padding: 5px'><a  target='_blank'  href='https://drive.google.com/drive/u/0/folders/0AK_FIeTH7r2kUk9PVA'>Service Review Archive</a></li></ul><div></div></div>`,
        },
      ],
      others: [],
      layout: '2',
      icon: useful_link,
      is_featured: false,
    },
    {
      id: '6',
      display_name:
        "<div style='padding: 0px 15px'><h3>Meet the Team: <a target='_blank' href='https://docs.google.com/presentation/d/1XeY0l-qu6GUDmrQ9d1Hn_zt2CkVIlcKIdJ8eebQfZcc/edit#slide=id.gd52a7df01e_0_0'>Saas Operations</a></h3></div>",
      is_active: 1,
      description: null,
      image: sass_meet_team,
      items: [
        {
          id: 1,
          icon: null,
          layout: '2',
          description: `<div style='padding: 0px 0px'><h3>Saas Ops:<a target='_blank' href='mailto:David.Pook@broadcom.com'> David Pook</a></h3><ul><li style='padding: 3px'>Service Ops: <a target='_blank' href='mailto:Mahomed.Ravuth@broadcom.com'>Mo Ravuth</a></li><li style='padding: 3px'>SRE: <a target='_blank' href='mailto:Roger.harrison@broadcom.com'>Roger Hermison</a></li><li style='padding: 3px'>Biz Ops: <a target='_blank' href='mailto:James.Partridge@Broadcom.com'>James Patridge</a></li></ul></div>`,
        },
        {
          id: 1,
          icon: null,
          layout: '3',
          description: `<div><div style='display: flex; flex-direction: row; padding: 0px; align-items: center'><div style='padding-right: 20px'><div style='background: #fff; border-radius: 90px; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; border: 1px solid #e4e5e7'><img src='${slack}' style='width: auto' /></div></div><div style='flex: 2'><div style='color: #000; font-weight: 600; text-decoration: underline'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fslack.com%2Fapp_redirect%3Fchannel%3DC021J5T0TPV&sa=D&sntz=1&usg=AOvVaw2QVg0lwuD4I0_qHWuv09w-'>Join Our Incident notification broadcast channel</a></div><div style='padding-top: 5px'><i><strong>Keep Updated </strong>on all service impacting incidents! (Broadcast Only)</i></div></div></div> </div>`,
        },
      ],
      layout: '1',
      icon: advisory,
      is_featured: true,
    },
    {
      id: '5',
      display_name:
        "<div style='padding: 0px 15px'><h3>Getting Support</h3></div>",
      is_active: 1,
      // description: `<div class='cab-table'> <table> <tr> <th>Getting Help</th> <th>Name</th> <th  > Email / More Info </th> </tr> <tr><td>Text 01</td><td>Sample Name</td><td><div style='display: flex; align-items: center'><img style='padding: 8px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slack} /><span style='padding: 10px'>Sample Text</span></div></td><a></tr><tr style='border-bottom: 1px solid #D7D7D7; border-top: 1px solid #D7D7D7'><td>Text 02</td><td>Sample Name</td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 4px 15px; border-radius: 90px; border: 1px solid #e4e5e7'><img style='margin-top: 5px' src=${info} /></span><span style='padding: 10px'>Sample Text</span></td></tr><td>Text 03</td><td>Sample Name</td></div><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 8px 10px; border-radius: 90px; border: 1px solid #e4e5e7'><img src=${email} style='margin-top: 5px' /></span><span style='padding: 10px'>Sample Text</span></td></tr><tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7'><td>Text 04</div></td><td>Sample Name</td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 8px 10px; border-radius: 90px; border: 1px solid #e4e5e7'><img src=${email} style='margin-top: 5px' /></span><span style='padding: 10px'>Sample Text</span></div></td></tr></table> </div>`,
      description: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; padding: 10px; margin: 10px 0px'><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_issue} /></div><div style='flex: 2;  padding: 0px 10px'><h4>Non urgent issue or request?</h4></div></div><div><ul style='margin: 0px 40px; list-style-image: url(${link})'><li style='padding: 5px'><a target='_blank'   href='https://www.google.com/url?q=https%3A%2F%2Fbroadcomprd.service-now.com%2Fsp%3Fid%3Dsc_cat_item%26sys_id%3D1d20f0b3dbede8108dd3c5860596199b%26sysparm_category%3Da534d737db05f7c0da1e3e0439961981&sa=D&sntz=1&usg=AOvVaw2jkfjAyE6V4RlfDHbWUDdz'>Raise a Support Request</a></li></ul><div style='display: flex; flex-direction: row; align-items: center; '><div style=' display: flex; justify-content: center;align-items: center; width: 50px; height: 50px'><img src=${saas_your_service} /> </div><div style='flex: 2;  padding: 0px 10px'><h4>At your service...</h4></div></div><ul style='margin: 0px 40px; list-style-image: url(${link})'><li style='padding: 5px'><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fbroadcom.com%2Fbsg-bot%2Fhome&sa=D&sntz=1&usg=AOvVaw1X98Qe-VLIOSNLevWB6J9_'>How to use BSG-Bot</a></li></ul></div></div>`,
      items: null,
      layout: '1',
      icon: support,
      is_featured: true,
    },
  ],
};

// : &#9650;

export const SampleGetResponse = {
  id: 3,
  name: 'Devops Platform',
  slug: 'devops-platform',
  icon_image: 'C:\\fakepath\\Saas Platform Engineering (2).png',
  short_description: '<p>dfsfsdf</p>',
  is_active: true,
  is_link: 1,
  link_page: null,
  script_dynamic: 'fsfdf',
  page_type: 1,
  order: 7,
  createdAt: '2022-08-02T12:01:55.000Z',
  updatedAt: '2022-08-02T12:01:55.000Z',
  content_data: null,
  blocks: [
    {
      id: 14,
      block_name: 'Banner',
      block_order: 1,
      block_icon: 'C:\\fakepath\\Saas Platform Engineering (2).png',
      status: true,
      show_header: 1,
      layout_size: '2',
      block_detial: 'DevOps Platform',
      block_detial_json: '',
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
    {
      id: 15,
      block_name: 'Overview',
      block_order: 3,
      block_icon: 'null',
      status: true,
      show_header: 0,
      layout_size: '1',
      block_detial: `<div><ul style='padding: 0px 30px; list-style-image: url(${devops_list})'> <li style='padding: 10px 0px'>DevOps tools, practices, and processes are designed to accelerate digital transformation by providing organizations with a framework to increase the speed of software delivery, without affecting IT quality and reliability. </li><li style='padding: 10px 0px'>While many enterprises have widely adopted these DevOps tools and methods, many struggles with translating their investments into measurable outcomes of faster cycle times, improved quality, and more innovation.</li></ul></div>`,
      block_detial_json: '',
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
    {
      id: 16,
      block_name: 'Features',
      block_order: 0,
      block_icon: 'null',
      status: true,
      show_header: 1,
      layout_size: '1',
      block_detial: '',
      block_detial_json: [
        {
          block_detial_json_id: 1,
          block_detial_json_name: 'Change Advisory Board',
          block_detial_json_type: '1',
          block_detial_json_url: '',
          block_detial_json_file: null,
          block_detial_json_is_active: true,
          block_detial_json_icon: news,
          block_detial_json_order: 6,
          block_detial_json_show_header: true,
          block_detial_json_description: `<div class='cab-table'><table>
          <tr> <th style='width: 300px'>Title</th> <th style='width: 250px'>Date & Time</th> <th style='text-align: center'> Links </th> <th /></tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
            <td >BSG JIRA & Confluence CAB</td><td>May 5  2022 - 8.00 AM PST</td><td><div style='display: flex; align-items: center; padding: 5px;'><div ><span style='font-weight: 700;'>Webex Recording: &nbsp; &nbsp;</span></div><div style='display: flex; flex: 1; align-items: center;'><img style='width: 35px; height: 35px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a target='_blank' href='https://broadcom.webex.com/webappng/sites/broadcom/recording/0e6aaf28aeb2103ab7e40050568134ff/playback' style='margin: 0px 10px'>Open Webex</a></div></div><div style='display: flex; align-items: center; padding: 5px;'><div ><span style='font-weight: 700'>Presentation Slides: &nbsp; &nbsp;</span> </div><div style='display: flex; flex: 1; align-items: center'><img style='width: 35px; height: 35px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1t2OX4kOGF25hfqVaImXCL6CvDG-n29zRpTtfjEBUjWM/edit#slide=id.gdec524b778_0_122' style='margin: 0px 10px'>Open Google Slides</a></div></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='0'></td>
          </tr>
          <tr class='toggle-row cab0'>
            <td><ul><li>BSG Confluence</li><ol><li>Architecture</li><li>Onprem to New SBO Platform</li><li>Upgrades to LTS</li></ol></ul></td><td ><ul><li>BSG Jira</li><ol><li>GTO Platform to SBO Cloud Platform</li><li>Migration Timeline</li></ol></ul></td><td colspan='2'><ul><li>Secure Access Cloud (SAC)</li><li>Q & A</li></ul></td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
            <td>qTest CAB - Support, Training, Professional Service and Migration </td><td> February 23</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/broadcom/ldr.php?RCID=2cdf4bc82aac462890812ae1cc24a53d' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides 1:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1gFj9-gMgMG3JPISPrlF7rdETsd9hXJm_IAgiC935bAo/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides 2:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://drive.google.com/file/d/1OB8RC3elQP9aQOndjTYC0_C6Bk6ZOFfB/view?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>QTest URL:</span> &nbsp; &nbsp; <a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fqtest.devops.broadcom.net%2F&sa=D&sntz=1&usg=AOvVaw1hOzXrdINLtP8onnm6uecn' style='margin: 0px 10px'>Open QTest</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Training registration sheet:</span> &nbsp; &nbsp; <a  target='_blank'  href='https://docs.google.com/spreadsheets/d/1LgkH9ewtP0n4d7DEwsi6PGINDsf9oIIb2oPgD9Z5hdc/edit?usp=sharing' style='margin: 0px 10px'>Open Sheet</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Migration Sheet:</span> &nbsp; &nbsp; <a  target='_blank'  href='https://docs.google.com/spreadsheets/d/1W9e3vnRZ_UkFd0Hz4RgURkxTFA0BzDsdczcSGiPKMcI/edit?usp=sharing' style='margin: 0px 10px'>Open Sheet</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='1'></td>
          </tr>
          <tr class='toggle-row cab1'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
            <td>Test Case Management CAB - qTest rollout plan</td><td> January 19</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/webappng/sites/broadcom/recording/ea35528ba46d498f970345bb7aabf3d1/playback' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1NDstJji_mjUjlKt1paauZvjpFwyGga-ulAPROfDeYFA/edit#slide=id.g5c46ef74e8_0_17' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='2'></td>
          </tr>
          <tr class='toggle-row cab2'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
            <td>Pipeline CAB</td><td> December 11</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Fmeeting%2Fpostinfo%2Fd7fbb23539a84f58bdc7f50e3358143c_I_180267112384703155&sa=D&sntz=1&usg=AOvVaw25eWQhjxp9XNYAZtwk4Gx3' style='margin: 0px 10px'>Open Webex</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='3'></td>
          </tr>
          <tr class='toggle-row cab3'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='initial-data'>
            <td>Pipeline CAB</td><td> November 2</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Frecordingservice%2Fsites%2Fbroadcom%2Frecording%2Fplay%2Fda08959d7efa4dc9ace171c67cadf6b8&sa=D&sntz=1&usg=AOvVaw28twSnD1tNuxke5w38A4I6' style='margin: 0px 10px'>Open Webex</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='4'></td>
          </tr>
          <tr class='toggle-row cab4'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>Test Case Management CAB</td><td> August 28</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/webappng/sites/broadcom/recording/play/671363c5a9734112ac0577dadab75440' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/10BPL3knWCEnjHV05K2eLDDB8uFgw1GvcSfxpGNptdhE/edit#slide=id.g93146aa441_0_29' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='5'></td>
          </tr>
          <tr class='toggle-row cab5'>
          <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
        </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>BSG/SED JIRA CAB</td><td> October 29 2021 - 8 AM PST</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/fe03d9f41af6103aa5df0050568f090e/playback' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1tFC8aM6-XkHRfsvOt03wtV5lZ9-Z-R3cJ-ThX1DOKI8/edit#slide=id.gdec524b778_0_122' style='margin: 0px 10px'>Open Google Slides</a></div></td>  <td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='6'></td>
          </tr>
          <tr class='toggle-row cab6'>
            <td colspan=4'><ul><li>SED JIRA new URL & Architecture</li><li>Highlights</li><li>Why is this happening</li><li>Impact for users</li><li>Migration Timeline</li><li>Next steps</li><li>Q & A</li></ul></td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>Toro CAB Meeting</td><td> October 15 2021</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://drive.google.com/file/d/1w2pBrRAGsYeg5z8bOC8CGCBf2yp0DKJh/view?usp=sharing' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1lCRBKJKg4q7o73jcQWdGZctwgcS5Nbs2b0sT3vbUHKs/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='7'></td>
          </tr>
          <tr class='toggle-row cab7'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>CAWiki CAB Meeting</td><td> October 13 2021</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://broadcom.webex.com/recordingservice/sites/broadcom/recording/b156299f0e6c103ab7d50050568ffb55/playback' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/16FIXR8h-8qFYzZa-JmsxgyDov0jPt6QK7Wa8BdqntpI/edit#slide=id.gdf172f1b70_0_0' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='8'></td>
          </tr>
          <tr class='toggle-row cab8'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>BlackDuck & Coverity CAB for SED</td><td> July 16</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fent.box.com%2Fs%2F1xhyubqpey4y89shqom3ooocpkm45kke&sa=D&sntz=1&usg=AOvVaw1Jsq6R7lBKvz5sP0FApdNb' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://drive.google.com/a/broadcom.com/open?id=1D3h73LN8X0KqwLW9c1qFv-XnMoBv-UnjOglAPGbOxSM' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='9'></td>
          </tr>
          <tr class='toggle-row cab9'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>DecSecOps CAB</td><td> July 2</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplayback%2Fa3f19fcdae764105994b22b39db39818&sa=D&sntz=1&usg=AOvVaw3uTshzjp_2otKFUCJzuq3l' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1XSSzj16DqtqhkdKc6MZkTAmXBp6qx98LhwfGiYMGUcI/edit#slide=id.p5' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='10'></td>
          </tr>
          <tr class='toggle-row cab10'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>Synchronicity HW DevOps CAB</td><td> July 2</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fent.box.com%2Fs%2Fg0sztz4h6103wmuepb6m0orobz03or9k&sa=D&sntz=1&usg=AOvVaw2tVV5bFtFJXsW5v1EqoRxl' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fent.box.com%2Fs%2Frtz2en0kfeiwutx5owam71gm3iewqhda&sa=D&sntz=1&usg=AOvVaw3SXiJmgHgxAZ1VNuTbUkty' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='11'></td>
          </tr>
          <tr class='toggle-row cab11'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>GitHub CAB</td><td> July 24</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://drive.google.com/file/d/1SpLGMlDQDI43Ts4tcQJxlrlftfHeBi2X/view?usp=sharing' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1IMmlzwPl7OSyZ1s-rRJvSfnAnTYjbH-usl1OkOLO7NI/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='12'></td>
          </tr>
          <tr class='toggle-row cab12'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>Jira/Confluence CAB</td><td> June 10</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Frecordingservice%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F80c9fa2992494fb49115e55ef692407a&sa=D&sntz=1&usg=AOvVaw0y8HOstRnf1LWVN4zs6uqU' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1YqfpF6kXjRf8V9LcpT26Q5XTfESfHwyy6fxyeDM1WJ0/edit#slide=id.g885015f7f7_0_3' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='13'></td>
          </tr>
          <tr class='toggle-row cab13'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>JFrog Platform/Artifactory CAB</td><td> June 8</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplayback%2F2b448f4222154ab6800adc9777db090b&sa=D&sntz=1&usg=AOvVaw0SR405oPdbXN6FRS1vLIe8' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/1jfQOoBVqo1KOGFs-3QcoSCjxj1CZKyraFofQpHcvgj4/edit?usp=sharing' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='14'></td>
          </tr>
          <tr class='toggle-row cab14'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>Test Case Management CAB</td><td> May 22 @ 9am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F099b7de75df24cda9e917709a27b3239&sa=D&sntz=1&usg=AOvVaw3BWuKox2qlplpQ7OEW2vAq' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/10BPL3knWCEnjHV05K2eLDDB8uFgw1GvcSfxpGNptdhE/edit#slide=id.g6f35f1083f_0_129' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='15'></td>
          </tr>
          <tr class='toggle-row cab15'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table1'>
            <td>Test Case Management CAB</td><td> March 24 @ 8:30</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F681227ff3f1b4a76833c0d7fa10e3354&sa=D&sntz=1&usg=AOvVaw39JiV24i6a-AArztdqi4E_' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Presentation Slides:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slides} /><a  target='_blank'  href='https://docs.google.com/presentation/d/10BPL3knWCEnjHV05K2eLDDB8uFgw1GvcSfxpGNptdhE/edit#slide=id.g6f35f1083f_0_129' style='margin: 0px 10px'>Open Google Slides</a></div></td><td style='color: #ce0930; cursor: pointer;' class='toggle-button cab' id='16'></td>
          </tr>
          <tr class='toggle-row cab16'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr><td colspan='4' style='text-align: center; color: #ce0930; padding: 20px; cursor: pointer' class='more-less' id='1'></td></tr>
          </table>
          </div>`,
          block_detial_json_banner_text: '',
        },
        {
          block_detial_json_id: 1,
          block_detial_json_name: 'Test Case Management',
          block_detial_json_type: '1',
          block_detial_json_url: '',
          block_detial_json_file: null,
          block_detial_json_is_active: true,
          block_detial_json_icon: testcase,
          block_detial_json_order: 6,
          block_detial_json_show_header: true,
          block_detial_json_description: `<div class='cab-table'><table>
          <tr> <th style='width: 300px'>Title</th> <th style='width: 250px'>Date & Time</th> <th> Links </th> <th /></tr>

          <tr class='initial-data'>
            <td>Test Case Management - Qtest Jira Integration session 6 </td><td>November 13 @ 9am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://tricentis.zoom.us/rec/share/b7SrPRFbag5C7mlRRVfvrmTyWPdjmR1ehGMXaT57t4wpSVkjyu4UanYUmvf_yazw.vzkYEtHuIKahBnuP' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; f.&iHTE7</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='0'></td>
          </tr>
          <tr class='toggle-row tcm0'>
            <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest and Jira integration</li><li>Type of connection and what is integrated</li><li>Defect filing using the integrated system</li><li>Information sent back into Jira</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fgetting_started_with_jira_integration.htm&sa=D&sntz=1&usg=AOvVaw3uOOwIITyaNDxOouDY9gVl' target='_blank'>Getting Started with Jira Integration</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fconnect_jira_integration.htm&sa=D&sntz=1&usg=AOvVaw0IjnDkaCYbDGGxFSCrCJYI' target='_blank'>Connect to Jira Integration</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fconfigure_jira_defects_.htm&sa=D&sntz=1&usg=AOvVaw2pxkIA8bil8NcXSg2AS5ZW' target='_blank'>Configure Jira Defects</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fimport_and_use_releases_from_jira.htm&sa=D&sntz=1&usg=AOvVaw21N00NeKx75nBxb_SRlXEk' target='_blank'>Import and Use Releases from Jira</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fimport_and_use_requirements_from_jira.htm&sa=D&sntz=1&usg=AOvVaw3xXas6klP6VWo3AppoQRYU' target='_blank'>Import and Use Requirements from Jira</a></li></ul></td>
          </tr>

          <tr class='initial-data'>
            <td>Test Case Management - Qtest Rally Integration session 5</td><td>November 13 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F_zMLZsuxHfEKhd4wIhEqjjdcjMH5rX56-EZj2Hmd-dLcidEUnEB_zsm1n7mk58k.9OERfqZKrZ5b6iq3&sa=D&sntz=1&usg=AOvVaw04u_it-7ljpUEYge7JgG5R' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; RGn!^@6K</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='1'></td>
          </tr>
          <tr class='toggle-row tcm1'>
            <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest and Rally integration</li><li>Type of connection and what is integrated</li><li>Defect filing using the integrated system</li><li>Information sent back into Rally</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_manager%2Fintegrations%2Fintegration_with_rally.htm&sa=D&sntz=1&usg=AOvVaw2watCOeWaMC9pgDHuT7M4h' target='_blank'>qTest - Integration with Rally</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dbest_practices%2Fbest_practices_for_integrating_with_rally.htm&sa=D&sntz=1&usg=AOvVaw1EE994ePFgRPQWBWNcwkwm' target='_blank'>Best Practices for integration with Rally</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dbest_practices%2Fbest_practices_for_integrating_with_rally.htm&sa=D&sntz=1&usg=AOvVaw1EE994ePFgRPQWBWNcwkwm' target='_blank'>Configuring the integration in qTest</a></li></ul></td>
          </tr>

          <tr class='initial-data'>
            <td>Test Case Management - Qtest Report and Analytics session 4</td><td>November 12 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2Fae5W-lBb4LrY8Zr_Z0CTU5W-pHvEyx8fMfGjJCrOIow1UO_LTcJE-9Mujcd17TLh.i_sYpaoFPRoLrO9-&sa=D&sntz=1&usg=AOvVaw1NKXbomvgl2x5F7889setS' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; a*7*aigF</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='2'></td>
          </tr>
          <tr class='toggle-row tcm2'>
            <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest Insights default dashboards</li><li>Filtering report data based on projects and other components</li><li>Creating custom dashboards</li><li>Creating custom reports</li><li>Scheduling and sending reports through e-mail</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_insights%2Fintroduction%2Finsights_quick_start_guide.htm&sa=D&sntz=1&usg=AOvVaw2c2aVXd-X82oMA0wliDYzW' target='_blank'>Insights – Quick Start Guide</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Fintroduction%2Fusing_global_filters.htm&sa=D&sntz=1&usg=AOvVaw3dyMcBsysSVTx3tOAtstm6' target='_blank'>Using Global Filters</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Fdashboards%2Fdashboards.htm&sa=D&sntz=1&usg=AOvVaw23DYbIpjcTcBLywRFEdZFO' target='_blank'>Dashboards</a></li><li><a target='_blank' href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Freporting%2Fexplore_data_and_custom_reporting.htm&sa=D&sntz=1&usg=AOvVaw3RFeB9I2-u2VAWHotFV2Qx'>Explore Data and Custom Reporting</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_insights%2Freporting%2Fmanage_and_schedule_reports__with_new_scheduler_.htm&sa=D&sntz=1&usg=AOvVaw0AkIXh1GADCtn__Yd4srrD' target='_blank'>Manage and Schedule Reporting</a></li></ul></td>
          </tr>

          <tr class='initial-data'>
            <td>Test Case Management - Qtest Exploratory Testing session 3</td><td> November 11 @ 10am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F0Kvis1yM4SYkjEOr_zJAQLVI1Tt_LuTC_27CUlBAWJN5jFuPAzwv9h0W3o_ZmRe8.Gsl4zISGBHjuCp-A&sa=D&sntz=1&usg=AOvVaw3Or6l7i_VcFb96vt7pwYbY' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; R%R%0@De</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='3'></td>
          </tr>
          <tr class='toggle-row tcm3'>
            <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>qTest Explorer recording in a web browser</li><li>Editing and markup of captured screenshots and steps</li><li>Creating and updating a defect</li><li>Creating and updating a test case</li><li>Exporting exploratory session to a document</li><li>Creation of automated scripts</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fsupport.tricentis.com%2Fcommunity%2Fmanuals_detail.do%3Flang%3Den%26version%3D10.1.0%26module%3DTricentis%2520qTest%2520On-Premise%26url%3Dqtest_explorer_sessions%2Fweb_explorer_user_guide%2Fweb_explorer_quick_start_guide.htm&sa=D&sntz=1&usg=AOvVaw0_vzK-mXyDcgvFfMxRThNd' target='_blank'>Web Explorer – Quick Start Guide</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fweb_explorer_user_guide%2Ftest_and_record.htm&sa=D&sntz=1&usg=AOvVaw0XpXd_Tk4bHz1nkAgLbtYe' target='_blank'>Record Testing Sessions Using Web Explorer</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fdesktop_explorer_user_guide%2Fdesktop_explorer_quick_start_guide.htm&sa=D&sntz=1&usg=AOvVaw1MHsJSAZlMuSYD5P-nqKwj' target='_blank'>Desktop Explorer – Quick Start Guide </a></li><li>Sessions Module</li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fsessions_module%2Freview_in_session_editor.htm&sa=D&sntz=1&usg=AOvVaw0rDXjGxq6fA6jjFkzx9uyQ' target='_blank'>Review In Session Editor</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fsessions_module%2Fsubmitting_defect.htm&sa=D&sntz=1&usg=AOvVaw2v_4sQL4RkInjEKAVcijym' target='_blank'>Submitting Defects</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_explorer_sessions%2Fsessions_module%2Fsubmitting_test_case.htm&sa=D&sntz=1&usg=AOvVaw2qmQ428_ddxjDKT2r85vgO' target='_blank'>Submitting Test Cases</a></li></ul></td>
          </tr>

          <tr class='initial-data'>
            <td>Test Case Management - Qtest Tips and Tricks session 2</td><td> November 10 @ 7am & 1pm</td><td><div style='display: flex; align-items: center; padding: 5px'><i>Morning Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://tricentis.zoom.us/rec/share/oT4zQll3h86kj__VaBebHFJFO0BBzzijH2A4xdbsbGvMBCyJejMTgVzuZPFPddiQ.l6bL3hc_FnxXKgGo' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; zQ1V%c!2</div><div style='display: flex; align-items: center; padding: 5px'><i>Afternoon Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FoT4zQll3h86kj__VaBebHFJFO0BBzzijH2A4xdbsbGvMBCyJejMTgVzuZPFPddiQ.l6bL3hc_FnxXKgGo&sa=D&sntz=1&usg=AOvVaw1o-hxPC-UkyTjtj9qZLbyc' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; zQ1V%c!2</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='4'></td>
          </tr>
          <tr class='toggle-row tcm4'>
            <td colspan='2'><p><strong>What is covered from the session:</strong></p><ul><li>Creation of Test Suites/Test Runs</li><li>Creating the structure and flexibility in qTest</li><li>Adding tests/test runs to a test suite</li><li>Test Execution – Filing Bugs</li><li>Walked through creating a bug from a manual test run</li><li>Discussed other ways such as linking and exploratory testing bug submission</li><li>Using a CI/CD – Jenkins</li><li>Showed the qTest Jenkins plugin and went over the configuration</li><li>Showed that in qTest Manager (test Execution tab) the Test Suite and test runs are automatically created and status shown without any manual creation of shell test executions</li><li>Status, logs and history of executions is available automatically when running the automated tests</li><li>Where is the help?</li><li>Within the qTest Manager (and any other qTest screen)</li><li>The link to documents, videos, submitting tickets and other help can be found in the upper right corner</li><li>Finding the hot keys</li><li>For each tab within qTest  Manager, the hot keys menu can be found in the bottom left corner of the screen, and when clicked, expands the short cuts list</li></ul></td><td colspan='2'><p><strong>Additional Helpful Links:</strong></p><ul><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_manager%2Ftest_execution%2Flanding_page_test_execution.htm&sa=D&sntz=1&usg=AOvVaw1PNww9OONWh2GEQzqbbTDj' target='_blank'>Test Execution</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_manager%2Ftest_execution%2Fadd_test_runs%2Fadd_test_runs_landing_page.htm&sa=D&sntz=1&usg=AOvVaw34tPdf5X61MBj_OxaKHtzw' target='_blank'>Add Test Runs</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_manager%2Fdefects%2Fsubmit_defects_in_test_execution.htm%23Submit&sa=D&sntz=1&usg=AOvVaw1MiB-7hcuguGT4QlmYmHXI' target='_blank'>Submit Defects in Test Execution</a></li><li><a href='https://www.google.com/url?q=https%3A%2F%2Fdocumentation.tricentis.com%2Fqtest%2F10100%2Fen%2Fcontent%2Fqtest_apis%2Fci_integrations%2Fjenkins_and_bamboo_integration.htm&sa=D&sntz=1&usg=AOvVaw0iiOFMAs5OJTM0Tg0HrZ3t' target='_blank'>qTest-Jenkins Integration </a></li></ul></td>
          </tr>

          <tr class='hole-data table2'>
            <td>Test Case Management - Qtest Tips and Tricks session 1</td><td> November 9 @ 7am & 1pm</td><td><div style='display: flex; align-items: center; padding: 5px'><i>Morning Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FdJAQdOwfI7bxoxhouiHbpl0cKpdA_i62vdHltqrKba-Ej5elGkAytYK4gNaeM9m3.oqnZ81-AQbmKGZsn&sa=D&sntz=1&usg=AOvVaw3b5AjIO3bJ277Rbiz6ouiz' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; %*@bHn0k</div><div style='display: flex; align-items: center; padding: 5px'><i>Afternoon Recording:</i></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F8UJpt3ask4ZtIr-auczmeoi7CKKdiWjDFmwqEaL41UQugO8XVVfaNP19drvOXc7h.JxZOv4ZcEEy3NCmN&sa=D&sntz=1&usg=AOvVaw0vYUA9fLyOZsbyKeIEgMQu' target='_blank' style='margin: 0px 10px'>Open Webex</a></div><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; tZR*pw7R</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='5'></td>
          </tr>
          <tr class='toggle-row tcm5'>
            <td colspan='4'><p><strong>What is covered from the session:</strong></p><ul><li>Custom fields:</li><li>Difference between Site-level and project-level fields</li><li>Modifying lists of existing fields (default and custom)</li><li>Creating and modifying custom fields in qTest (project-level fields)</li><li>Importing/exporting of test cases</li><li>Excel Import of test cases</li><li>Data querying for requirements and test cases</li><li>Ability to create queries to view assignments, duplicate tests, etc.</li><li>Best Practices for Test cases</li><li>Modularized test cases</li><li>Utilizing parameters and embedded test cases</li><li>Test case sharing</li></ul></td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest end user training</td><td> October 23 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2F5a8YGo7yZsBK06hCIpf9Er43ibYXffwnLXYLDwzm10TK-mmuiEjmuuMzil7uzdJs.deV-e_STLA-O_0LH&sa=D&sntz=1&usg=AOvVaw2H6Dp7LwNwUWSXJvKaIOjj' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; L=26C@!L</div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='6'></td>
          </tr>
          <tr class='toggle-row tcm6'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest admin session</td><td> October 22 @ 1am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FscEuPsk-n3LDIhtvaHbandBnkUMhYHo2_vSD8yO01y6MuzcB-yUTwJD6PWaSEWh5.A7nol5IspBe81o5S&sa=D&sntz=1&usg=AOvVaw2r11jxtm-dYDm9RnkAvl-U' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; E*R$2aPc </div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='7'></td>
          </tr>
          <tr class='toggle-row tcm7'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest installation</td><td> October 15 @ 10am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Ftricentis.zoom.us%2Frec%2Fshare%2FfryO8y1s0WF9OVomzx6_Ato2Z5fiwXWus0g3LWp4WYtIz4DB5xc3m79UQRG7ZUBj.2PQIHZ9MTZi59MPS&sa=D&sntz=1&usg=AOvVaw14KkfsfsCl9kyVUq8muI4S' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; T@!gg0&6 </div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='8'></td>
          </tr>
          <tr class='toggle-row tcm8'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest mainframe support demo</td><td> October 7 @ 3am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F1d3409b7e622411e9445e32a77e20af2&sa=D&sntz=1&usg=AOvVaw2lQFGlvvmq59I6SpqB2iW0' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='9'></td>
          </tr>
          <tr class='toggle-row tcm9'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest pilot planning</td><td> October 5 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F17ae083fba63451eb87b78ac8fa3371f&sa=D&sntz=1&usg=AOvVaw1ULYjp3ousbL2w9lhrsn-b' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='10'></td>
          </tr>
          <tr class='toggle-row tcm10'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - TestRail demo</td><td> October 2 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2Ff3ad836ff7ca4c3e855e9dd655bf5de0&sa=D&sntz=1&usg=AOvVaw2hU9hdhDHXYClxLjSljYLy' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='11'></td>
          </tr>
          <tr class='toggle-row tcm11'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest demo follow up</td><td> October 1 @ 8:30am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F4e00572906c04ac8a1dc73c66e202411&sa=D&sntz=1&usg=AOvVaw0nADrHutUfIB5IwM6t5bdo' style='margin: 0px 10px'>Open Webex</a></div> </td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='12'></td>
          </tr>
          <tr class='toggle-row tcm12'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Test Collab demo </td><td> September 30 @ 9am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2F9ISkgO0-uLVtvFrTHFJcfChTl8DFBLVJmNtLt1M_h37iy3I9JmVJN097OHQ2sI3A.NvEgFH1o1KjDPW1E&sa=D&sntz=1&usg=AOvVaw2Io_YHNzExcn5N-rOXUORZ' style='margin: 0px 10px'>Open Webex</a></div> <div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Access Passcode:</span> &nbsp; &nbsp; AQFS0PP$ </div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='13'></td>
          </tr>
          <tr class='toggle-row tcm13'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>

          <tr style='border-top: 1px solid #D7D7D7; border-bottom: 1px solid #D7D7D7' class='hole-data table2'>
            <td>Test Case Management - Qtest demo </td><td> September 25 @ 8am</td><td><div style='display: flex; align-items: center; padding: 5px'><span style='font-weight: 700'>Webex Recording:</span> &nbsp; &nbsp; <img style='width: 40px; height: 40px; padding: 5px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${webex} /><a  target='_blank'  href='https://www.google.com/url?q=https%3A%2F%2Fbroadcom.webex.com%2Fwebappng%2Fsites%2Fbroadcom%2Frecording%2Fplay%2F635bb7d3eba84a659c2a22358da3bb6a&sa=D&sntz=1&usg=AOvVaw0gGFw6EhwUmx0Cdq3H9c2d' style='margin: 0px 10px'>Open Webex</a></div></td><td style='color: #ce0930; cursor: pointer' class='toggle-button tcm' id='14'></td>
          </tr>
          <tr class='toggle-row tcm14'>
            <td colspan='4' style='text-align: center; font-size: 18px'>-</td>
          </tr>


          </table>
          </div>`,
          block_detial_json_banner_text: '',
        },
      ],
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
    {
      id: 17,
      block_name: 'Videos',
      block_order: 5,
      block_icon: video,
      status: true,
      show_header: 1,
      layout_size: '1',
      block_detial: '',
      block_detial_json: [
        {
          block_detial_json_id: 1,
          block_detial_json_name: 'Video 1 ',
          block_detial_json_type: '1',
          block_detial_json_url: 'https://youtu.be/hQcFE0RD0cQ',
          block_detial_json_file: null,
          block_detial_json_is_active: true,
          block_detial_json_icon: null,
          block_detial_json_order: '',
          block_detial_json_show_header: true,
          block_detial_json_description: '',
          block_detial_json_banner_text: '',
        },
        {
          block_detial_json_id: 2,
          block_detial_json_name: 'Video 2 ',
          block_detial_json_type: '1',
          block_detial_json_url: 'https://youtu.be/hQcFE0RD0cQ',
          block_detial_json_file: null,
          block_detial_json_is_active: true,
          block_detial_json_icon: null,
          block_detial_json_order: '',
          block_detial_json_show_header: true,
          block_detial_json_description: '',
          block_detial_json_banner_text: '',
        },
        {
          block_detial_json_id: 3,
          block_detial_json_name: 'Video 3 ',
          block_detial_json_type: '1',
          block_detial_json_url: 'https://youtu.be/hQcFE0RD0cQ',
          block_detial_json_file: null,
          block_detial_json_is_active: true,
          block_detial_json_icon: null,
          block_detial_json_order: '',
          block_detial_json_show_header: true,
          block_detial_json_description: '',
          block_detial_json_banner_text: '',
        },
      ],
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
    {
      id: 18,
      block_name: 'Meet The Team',
      block_order: 1,
      block_icon: advisory,
      status: true,
      show_header: 1,
      layout_size: '1',
      block_detial: `<div style='border: 1px solid #C6C6C6; border-radius: 4px; min-height: 170px; width: 50%'><ul style='list-style-image: url(${email});'><li style='padding: 3px'><a href='mailto:andrew.dubas@broadcom.com'>andrew.dubas@broadcom.com</a></li><li style='padding: 3px'><a  href='mailto:anthony.jeffery@broadcom.com'>anthony.jeffery@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:bhagyasri.karanam@broadcom.com'>bhagyasri.karanam@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:bill.morton@broadcom.com'>bill.morton@broadcom.com</a></li><li style='padding: 3px'><a href='mailto:blane.musser@broadcom.com'>blane.musser@broadcom.com</a></li></ul></div>`,
      block_detial_json: '',
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
    {
      id: 19,
      block_name: 'Useful Links',
      block_order: 2,
      block_icon: useful_link,
      status: true,
      show_header: 1,
      layout_size: '1',
      block_detial: `<ul style='margin: 15px 0px; list-style-image: url(${link})'> <li style='padding: 5px 0px'> <a target='_blank'   href='https://drive.google.com/drive/folders/0AKJjBHLzkoAoUk9PVA'> Mainframe R&D Documentation </a> </li> <li style='padding: 5px 0px'> Mainframe Solutions Team <a target='_blank'   href='https://drive.google.com/drive/folders/0ACLPRv7Nv7ikUk9PVA'> Announcements </a> </li><li style='padding: 5px 0px'> Announcements Current hardware configurations <a  target='_blank'   href='https://docs.google.com/spreadsheets/d/1h800lC9xeZGiaHwyvvib2YaoYQGAzoRMm3HCMJd03cQ/edit#gid=1323021429'> (z/15 & z/16) </a> </li><li style='padding: 5px 0px'> Mainframe Services current <a  target='_blank'   href='https://docs.google.com/spreadsheets/d/1zrqn3V3Y7otiBv7JXDroFPhYGP7TqkhJjWWohdbgclM/edit'> Projects and Initiatives </a> </li><li style='padding: 5px 0px'> How to request work from Mainframe using <a  target='_blank'   href='https://docs.google.com/document/d/1Q4gAJiY8cXUvVINLZdR4yInTk8nGfbfMhQWmB4POH5M/edit'> Agile Central </a> </li><li style='padding: 5px 0px'>  <a  target='_blank'   href='https://brcm-bsg-global.slack.com/archives/G01RE11QWH1'> Mainframe System programmers </a> </li><li style='padding: 5px 0px'> <a  target='_blank'   href='https://brcm-bsg-global.slack.com/archives/G01RMTS36Q4'> Mainframe Operations  </a> </li><li style='padding: 5px 0px'>  <a  target='_blank'   href='https://brcm-bsg-global.slack.com/archives/G01R908SMTQ'> Mainframe DBAs</a> </li></ul>`,
      block_detial_json: '',
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
    {
      id: 20,
      block_name: 'Getting Support',
      block_order: 8,
      block_icon: support,
      status: true,
      show_header: 1,
      layout_size: '1',
      block_detial: `<div class='cab-table'><table>
      <tr><th>Getting Help</th> <th>Name</th> <th> Email / More Info </th> </tr>
      <tr>
        <td>Finding Answers</td><td>SlackBot</td> <td><div style='display: flex; align-items: center'><img style='padding: 8px; background: #fff; border: 1px solid #E0E0E0; border-radius: 90px' src=${slack} /><a  target='_blank'  href='https://app.slack.com/client/T01MTJCTQNM/D01NEATBLLT/thread/G01SJG8FRAM-1655140005.706089' style='margin: 0px 10px'>Open Slack</a></div></td>
      </tr>
      <tr style='border-bottom: 1px solid #D7D7D7; border-top: 1px solid #D7D7D7'>
        <td>First Level for help or issues</td><td><a target='_blank' href='https://broadcomprd.service-now.com/saas_sp'>Broadcom SBO Support</a></td><td><div style='display: flex; align-items: center'><span style='background: #fff; padding: 4px 15px; border-radius: 90px; border: 1px solid #e4e5e7'><img style='margin-top: 5px' src=${chat} /></span><span style='padding: 10px'><a target='_blank' href='https://broadcomprd.service-now.com/saas_sp'>Google Chat</a></span></td>
      </tr>
      </table>
      </div>`,
      block_detial_json: '',
      championid: 3,
      createdAt: '2022-08-02T12:01:55.000Z',
      updatedAt: '2022-08-02T12:01:55.000Z',
    },
  ],
};
