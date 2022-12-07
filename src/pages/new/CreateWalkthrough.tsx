import { Grid } from '@mui/material';
import React from 'react';
// import walk1 from '../../Assets/Static/walk1.png';
import walk2 from '../../Assets/Static/slide2.png';
import walk3 from '../../Assets/Static/slide3.png';
import walk4 from '../../Assets/Static/slide4.png';
import walk5 from '../../Assets/Static/slide5.png';
import walk6 from '../../Assets/Static/slide6.png';
import walk7 from '../../Assets/Static/slide7.png';
import walk8 from '../../Assets/Static/slide8.png';

class CreateWalkthrough extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Grid container>
          <Grid item sm={12} className="walk">
            <div className="walkClarity">
              <div className="createRel">
                <h2>Creating A Release In Clarity </h2>
                <p>Step 1 :- Go to the Clarity URL</p>
                <a href="https://cppm9328.ondemand.ca.com/pm/#/projects">
                  https://cppm9328.ondemand.ca.com/pm/#/projects
                </a>
                <p>Step 2 :- Select Release BSG</p>
              </div>
              <img src={walk2} alt="no_image" />
            </div>
            <div>
              <div className="createRel">
                <p>
                  Step 3 :- Click on “New From Template” the Blue Tab on top
                  left{' '}
                </p>
              </div>
              <img src={walk3} alt="no_image" />
            </div>
            <div>
              <div className="createRel">
                <p>
                  Step 4:- Click on the BSG Release Template and Click Next. A
                  Pop up box will appear
                </p>
              </div>
              <img src={walk4} alt="no_image" />
            </div>
            <div>
              <div className="createRel">
                <p>
                  {' '}
                  Step 5:- Fill in the requested information about the release{' '}
                </p>
                <p>1) Name of the Release </p>
                <p>2) Start and end Date (Release date/tape out date) </p>
                <p>
                  3) Select Division from Dropbox (Depending on your selection
                  the respective product hierarchy will be available in the next
                  dropbox.{' '}
                </p>
                <p>
                  4) Select Release type from Dropbox (Hotfix, Major or
                  Maintenance){' '}
                </p>
                <p>5) Type Release Number (Numeric only) </p>
                <p>
                  6) Add the users from different groups who need to know the
                  release is planned and they need to provide their input or
                  sign off
                </p>
                <p>7) Click Create</p>
              </div>
              <img src={walk5} alt="no_image" />
            </div>
            <div>
              <div className="createRel">
                <p>
                  Step 6:- Once you are on this page, Click on TASK (Top left of
                  the screen){' '}
                </p>
              </div>
              <img src={walk6} alt="no_image" />
            </div>
            <div>
              <div className="createRel">
                <p>
                  Step 7 :- Depending on the type of release the Task list will
                  be populated.{' '}
                </p>
                <p>
                  (Major release will have more tasks than the hot fix and
                  Maintenance Release)
                </p>
              </div>
              <img src={walk7} alt="no_image" />
            </div>
            <div>
              <div className="createRel">
                <p>
                  {' '}
                  Step 8:- We can select a particular tasks and assign to
                  respective team member with the timeline{' '}
                </p>
                <p>
                  This need to be done by Release / Project manager (Who ever is
                  handling the project)
                </p>
                <p>
                  To Assign a task please double click on the task, it will open
                  on the right side of the task list
                </p>
                <p>
                  The assigner can select task owner and provide timeline
                  required and the task owner will get notified.
                </p>
              </div>
              <img src={walk8} alt="no_image" />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default CreateWalkthrough;
