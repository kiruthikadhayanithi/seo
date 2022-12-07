import { Grid } from '@mui/material';
import React from 'react';
import vs_banner from '../../Assets/Static/vs_banner.png';
import vs1 from '../../Assets/Static/vs1.png';
import vs2 from '../../Assets/Static/vs2.png';
import vs3 from '../../Assets/Static/vs3.png';
import vs4 from '../../Assets/Static/vs4.png';
import vs5 from '../../Assets/Static/vs5.png';
import arrow from '../../Assets/Static/arrow.png';
import './index.css';

export default class VersionStandardization extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${vs_banner})`,
            backgroundSize: 'cover',
          }}>
          <div
            style={{
              width: '1200px',
              margin: '0px auto',
              height: '380px',
            }}>
            <Grid container alignItems="center">
              <Grid item sm={12} className="versionStand">
                <div style={{ padding: '30px 0px' }}>
                  <h1>Version Standardization</h1>
                  <h3>
                    Standardization of version numbering for predictable product
                    end of service dates.
                  </h3>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          style={{ width: '1200px', margin: '27px auto 30px' }}
          className="clarity versionStd">
          <Grid container>
            <Grid item sm={6}>
              <div style={{ position: 'relative' }}>
                <h2 className="vs_header">Version Standard </h2>
                <h3 style={{ marginBottom: '0px' }}>Version Format</h3>
                <ul style={{ marginTop: '0px' }}>
                  <li>
                    V.R.M.H al numbers required (YY.Q.xx.zz is recommended)
                  </li>
                  <li>Independent GA tracked at the "V" level (YY.Q)</li>
                  <li>EOS defined atthe "V.R" level (YY.Q)</li>
                  <li>No more than 2GA "V" levels allowed</li>
                </ul>
                <h3 style={{ marginBottom: '0px' }}>
                  EOS Team/ Release Cadence Options - defined in Clarity Release
                  Platform
                </h3>
                <ul style={{ marginTop: '0px' }}>
                  <li>3 standard options, 1 exception</li>
                  <ol type="a">
                    <li>24-month support term, 12-month release cadence</li>
                    <li>36-month support term, 18-month release cadence</li>
                    <li>48-month support term, 24-month release cadence</li>
                    <li>
                      No EOS for current GA "V" code line, No new "V.R" planned
                    </li>
                  </ol>
                  <li>EOS term announced when "V.R" become GA</li>
                  <ol type="a">
                    <li>
                      EOS cab be extended with approval by SEO/Support if new
                      release will be late
                    </li>
                  </ol>
                </ul>
                <h3 style={{ marginBottom: '0px' }}>
                  Maintenance release "M" have no EOS term
                </h3>
                <ul style={{ marginTop: '0px' }}>
                  <li>
                    Recommend last 3 Maintenance Updates are supported for
                    reported defects
                  </li>
                  <li>
                    Cadence of VR Updates is determined by the Product teams.
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} className="version_img">
              <div style={{ float: 'right' }}>
                <div>
                  <img src={vs1} alt="no_image" />
                </div>
              </div>
            </Grid>
            <Grid
              item
              sm={6}
              style={{ marginTop: '30px' }}
              className="version_img2">
              <div>
                <img src={vs2} alt="no_image" />
              </div>
            </Grid>
            <Grid item sm={6} style={{ marginTop: '30px' }}>
              <div style={{ position: 'relative' }} className="vs_list">
                <h2>Recommended Version Format</h2>
                <ul>
                  <li>
                    <b style={{ fontSize: '14px' }}>
                      BSG Universal Version Release Format - YY.Q.xx.zz
                    </b>
                  </li>
                  <li>
                    <b style={{ fontSize: '14px' }}>
                      Format syntax - numeric only, 2 digits-except for Q,"."
                      component separator
                    </b>
                  </li>
                  <li>
                    <b style={{ fontSize: '14px' }}>Format definitions</b>
                  </li>
                  <ul>
                    <li>
                      YY.Q numeric value represents a version release package
                    </li>
                    <ul>
                      <li>Combines former Major/Minor release format.</li>
                      <li>
                        YY and Q represent the version release GA calendar yaer
                        and calender quarter
                      </li>
                      <li>
                        The support lifecycle (EOS) is maintained at the Version
                        Release only
                      </li>
                    </ul>
                  </ul>

                  <ul>
                    <li>
                      xx numeric value represents cumulative version release
                      updates package
                    </li>
                    <ul>
                      <li>
                        Includes bug fixes, compatibility updates, vulnerability
                        updates, and new features/enhancements that do not force
                        an upgrade or migration (aka SP, MU, SU, FP, Level Set
                        PTF, etc.)
                      </li>
                      <li>
                        Only the 3 latest VR updates will be supported. No EOS
                        dates associated to this level
                      </li>
                    </ul>
                  </ul>

                  <ul>
                    <li>zz value reprents a hot fix or point fix package</li>
                    <ul>
                      <li>
                        Delivered to a particular customer or a set of customers
                        but not published to all customers
                      </li>
                      <li>
                        Typically deliver a bug fix and will be incorporated
                        into the next version release update
                      </li>
                    </ul>
                  </ul>
                </ul>
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              style={{ marginTop: '30px' }}
              className="version">
              <div style={{ position: 'relative' }} className="vs_list">
                <h2>Version EOS Term / Release Cadence (YY.Q.xx.zz format)</h2>
                <ul>
                  <li>
                    Announce EOS term on the GA release date for a specific term
                    (i.e., 36 months)
                  </li>
                  <li>
                    GA+1 will be released in EOS term/2 (i.e., 36/2 = 18 months)
                  </li>
                  <ul>
                    <li>
                      Result will be only 2 version release supported at any
                      given time (GA & GA-1)
                    </li>
                    <li>
                      Release date and EOS date will be able to be determined at
                      any given time as well as whether the release is GA or
                      GA-1
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <img src={vs3} alt="no_image" width="1200px" />
              </div>

              <div className="version_text_div">
                <Grid container>
                  <Grid
                    item
                    sm={5}
                    sx={{ pl: '140px' }}
                    style={{ float: 'left' }}>
                    <h3>EOS Term / Release Cadence options</h3>
                    <ol>
                      <li>24 months, 12 months</li>
                      <li>36 months, 18 months</li>
                      <li>48 months, 24 months</li>
                      <li>No EOS, No planned new version</li>
                    </ol>
                  </Grid>
                  <Grid
                    item
                    sm={1}
                    sx={{ paddingTop: '55px' }}
                    style={{ float: 'left' }}>
                    <img src={arrow} alt="no_image" width="40px" />
                  </Grid>
                  <Grid
                    item
                    sm={6}
                    sx={{ paddingTop: '82px' }}
                    style={{ float: 'left' }}>
                    Only the most recent 3 VR Updates are supported ("xx" in the
                    format)
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              style={{ marginTop: '30px' }}
              className="version">
              <div style={{ position: 'relative' }} className="vs_list">
                <h2>Example Use of the Standard</h2>
                <ul>
                  <li>
                    14.0 GA with new standard of 24-month Support Term and
                    12-month release cadence
                  </li>
                  <ul>
                    <li>
                      2 minor versions released with 24 months Support Term
                    </li>
                  </ul>
                  <li>
                    15.0 GA as new "major" version with adjustment to 36-month
                    Support Term and 18-month release cadence
                  </li>
                  <ul>
                    <li>
                      Establish end of support for 14 code line (either end with
                      14.2 or release 14.3 to give customers "migration time")
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <img src={vs4} alt="no_image" width="1200px" />
              </div>
            </Grid>
            <Grid item sm={6} sx={{ marginTop: '20px' }}>
              <div style={{ position: 'relative' }}>
                <h2>Benefits of using Standard Versions</h2>
                <ul>
                  <li>
                    <b className="vs_bold_text">
                      Influence Adoption Best Practices
                    </b>
                  </li>
                  <ol type="a">
                    <li>Version Currency</li>
                    <li>
                      EOS Policy - discipline execution and consistent
                      definition/term
                    </li>
                  </ol>
                  <li>
                    <b className="vs_bold_text">Operational Efficiency</b>
                  </li>
                  <ol type="a">
                    <li>Reduction of code lines supported in the market</li>
                    <li>Automation of release management</li>
                    <li>
                      Reduction of release risk cross divisional bundles and use
                      common components
                    </li>
                  </ol>
                  <li>
                    <b className="vs_bold_text">
                      Increased transparency to Customers and Key Stakeholders
                    </b>
                  </li>
                  <ol type="a">
                    <li>
                      Upgrade planning, budgeting, and testing at least 2 years
                      in advance
                    </li>
                    <li>
                      GMs, Sales, Solution Engineering - consistent insights to
                      release management
                    </li>
                  </ol>
                </ul>
              </div>
            </Grid>
            <Grid
              item
              sm={6}
              sx={{ marginTop: '80px' }}
              className="version_img">
              <div>
                <img src={vs5} alt="no_image" width="450px" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
