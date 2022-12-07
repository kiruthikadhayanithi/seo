import { Button } from '@mineral/core';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import release_governance from '../../Assets/Static/release_governance.png';
import release_video from '../../Assets/Static/release_video.png';
import clarity from '../../Assets/Static/Clarity.png';
import learn_more from '../../Assets/Static/learn_more.svg';
import checklist from '../../Assets/Static/checklist.svg';

export default class ReleaseGovernance extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      expanded: null,
    };
  }

  handleChange = (panel: any) => (event: any, newExpanded: any) => {
    this.setState({ expanded: newExpanded ? panel : false });
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${release_governance})`,
            backgroundSize: 'cover',
          }}>
          <div
            style={{
              width: '1200px',
              margin: '0px auto',
              height: '380px',
            }}>
            <Grid container alignItems="center">
              <Grid item sm={12} className="relGoven">
                <div style={{ padding: '30px 0px' }}>
                  <h1>Release Management</h1>
                  <h4>
                    Creating a gating function of which programs should be
                    invested in and what value they bring to BSG
                  </h4>
                  <Button>Reach Out To Us</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          style={{ width: '1200px', margin: '70px auto 30px' }}
          className="clarity">
          <Grid container>
            <Grid item sm={6}>
              <div style={{ position: 'relative' }}>
                <h2>Creating A Release In Clarity </h2>
                <p>
                  The objective is to make this as easy and seamless as
                  possible. Follow the link below or the video to the right as a
                  guide on how to input release information into Clarity.
                </p>
                <a href="/create-walkthrough">Learn More</a>
                <span>
                  {' '}
                  <img src={learn_more} alt="no_image" />
                </span>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{ float: 'right' }}>
                <img src={release_video} alt="no_image" />
              </div>
            </Grid>
            <Grid item sm={6} style={{ marginTop: '30px' }}>
              <div>
                <img src={clarity} alt="no_image" />
              </div>
            </Grid>
            <Grid item sm={6} style={{ marginTop: '30px' }}>
              <div style={{ position: 'relative' }}>
                <h2>
                  Quarterly Business and Adoption Reviews, Annual Operating Plan
                </h2>
                <p>
                  The data inputted into Clarity will be key for critical
                  business reviews such as QBR, Adoption, and AOP. Our goal is
                  to leverage the dynamic abilities of Clarity and avoid using
                  static tools like spreadsheets and powerpoints.
                </p>
                {/* <a href="/">Learn More</a>
                <span>
                  <img src={learn_more} alt="no_image" />
                </span> */}
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{ position: 'relative' }}>
                <h2>Product Delivery Checklist </h2>
                <p>
                  A consolidated view of what items that need to be completed in
                  Clarity for each release is available. Click here to learn
                  more.
                </p>
                <a href="/delivery-checklist">Learn More</a>
                <span>
                  {' '}
                  <img src={learn_more} alt="no_image" />
                </span>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{ float: 'right' }}>
                <img src={checklist} alt="no_image" />
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              style={{ marginTop: '30px' }}
              id="release-management-accordion"
              className="clarity">
              <div style={{ position: 'relative' }}>
                <h2>Checklist FAQ</h2>
                {checkListData.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={this.state.expanded === item.id}
                    onChange={this.handleChange(item.id)}>
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header">
                      <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.content,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Grid>

            <Grid item sm={12} style={{ marginTop: '30px' }}>
              <div style={{ position: 'relative' }}>
                <h2>Contact Us In Case Of Questions</h2>
                {/* <div>
                  <div className="contact">
                    <h1>I</h1>
                    <h3>Ramesh Manikavel</h3>
                    <p>IMS</p>
                  </div>
                  <div className="contact">
                    <h1>S</h1>
                    <h3>Kathy Massucci</h3>
                    <p>SED</p>
                  </div>
                  <div className="contact">
                    <h1>A</h1>
                    <h3>Laurie Gaynor</h3>
                    <p>AOD</p>
                  </div>
                  <div className="contact">
                    <h1>M</h1>
                    <h3>TBD</h3>
                    <p>MSD</p>
                  </div>
                </div> */}
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  <img src="/default/image/mail.png" alt="mail" />
                  <a
                    href="mailto:ReleaseManagement.pdl@broadcom.com"
                    style={{ margin: '0px 10px', fontSize: '14.98px' }}>
                    <u>ReleaseManagement.pdl@broadcom.com</u>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const checkListData = [
  {
    id: 1,
    title: '1. Why do we need to use Clarity to track releases?',
    content:
      '<p style="margin-left: 25px;"> Currently every business unit is using different to track releases, leading to a lot of manual effort for every critical business review to summarize progress. Clarity is a Broadcom tool that has the ability to uniformly track key metrics on releases and summarize it for various audiences. As Broadcom continues to grow, it is important to have tools and processes that allow us to scale.</p>',
  },
  {
    id: 2,
    title: '2. Why do we need a Version standard?',
    content:
      '<p style="margin-left: 25px;"> Using a version standard is beneficial to product and support teams but most importantly to our customers. By sticking to a standard versioning system and identifying the end of support day upon the release of a generally available version of software, customers can plan ahead and know when to expect a new release and when this version will not be supported anymore. It also helps product teams to plan their quarterly work more efficiently as they will know when and how often they should be releasing code. Last but not least, our support teams will know exactly which products are supported and which are not so they can appropriately staff and allocate resources as they support the customer base.</p>',
  },
  {
    id: 3,
    title: '3. Where do I get more information? ',
    content:
      '<p style="margin-left: 25px;"> The goal of this site is to have all the resources needed regarding the effort to improve the way we track releases. If you have any questions, please reach out to <a href="mailto:releasemanagement.pdl@broadcom.com">releasemanagement.pdl@broadcom.com</a></p>',
  },
];
