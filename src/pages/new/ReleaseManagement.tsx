// import { Button } from '@mineral/core';
import { Grid } from '@mui/material';
import React from 'react';
import release_bg from '../../Assets/Static/release_bg.png';
import real_video from '../../Assets/Static/real_video.png';
import governance from '../../Assets/Static/governance.png';
import portfolio from '../../Assets/Static/portfolio.png';
import standardization from '../../Assets/Static/standardization.png';
import learn_more from '../../Assets/Static/learn_more.svg';
import '../admin/Banners/index.css';
import { NavLink } from 'react-router-dom';

export default class ReleaseManagement extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${release_bg})`,
            backgroundSize: 'cover',
          }}>
          <div
            style={{
              width: '1200px',
              margin: '0px auto',
            }}>
            <Grid container alignItems="center">
              <Grid item sm={6} className="relBanner">
                <div style={{ padding: '10px 0px' }}>
                  <h1>Release Platform</h1>
                  <h4>
                    Standardize and simplify releases across software products
                    for better consistency, compliance and increasing customer
                    adoption.
                  </h4>
                  {/* <Button>Learn More</Button> */}
                </div>
              </Grid>
              <Grid item sm={6}>
                <div style={{ height: '300px', padding: '30px 40px' }}>
                  <img
                    src={real_video}
                    alt="no_image"
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '10px',
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{ width: '1200px', margin: '0px auto' }} className="relImg">
          <Grid container alignItems="center">
            <Grid item sm={12}>
              <h1>BSG Release Management </h1>
            </Grid>
            <Grid item sm={4} className="relMgt">
              <div>
                <img src={governance} alt="no_image" />
              </div>
              <div className="relGov">
                <h2>Release Management</h2>
                <p>
                  Managing the release lifecycle of software products in a
                  standard way using Clarity.
                </p>
                <NavLink to="/governance-management">Learn More</NavLink>
                <span>
                  {' '}
                  <img src={learn_more} alt="no_image" />
                </span>
              </div>
            </Grid>
            <Grid item sm={4} className="relMgt">
              <div>
                <img src={portfolio} alt="no_image" />
              </div>
              <div className="relGov">
                <h2>
                  Release Portfolio{' '}
                  <span
                    style={{
                      color: '#ce0930',
                      fontSize: '12px',
                      position: 'relative',
                      bottom: '2px',
                    }}>
                    {' '}
                    &nbsp;( Coming Soon ){' '}
                  </span>
                </h2>
                <p>
                  Tracking release version currency to enable better customer
                  adoption and renewals.
                </p>
                <a href="/release-management">Learn More</a>
                <span>
                  {' '}
                  <img src={learn_more} alt="no_image" />
                </span>
              </div>
            </Grid>
            <Grid item sm={4} className="relMgt">
              <div>
                <img src={standardization} alt="no_image" />
              </div>
              <div className="relGov">
                <h2>Version Standardization</h2>
                <p>
                  Standardization of version numbering for predictable product
                  end of service dates.
                </p>
                <a href="/version-standardization">Learn More</a>
                <span>
                  {' '}
                  <img src={learn_more} alt="no_image" />
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
