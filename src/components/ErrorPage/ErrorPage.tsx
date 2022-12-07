import * as React from 'react';
// import { Button, GlobalStyles } from '@mineral/core';
// import { Page } from 'components/Page';
import notfound from '../../Assets/404.svg';
import back_icon from '../../Assets/left-arrow.svg';
import { Grid } from '@mui/material';
import { Button } from '@mineral/core';

interface ErrorPageProps {
  error: unknown;
}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <div style={{ height: '100%' }}>
      {/* <GlobalStyles
        styles={(theme) => {
          // [1] - theme.palette is unrecognized
          // @ts-ignore [1]
          const isLightMode = theme.palette.mode === 'light';

          return {
            ':root': {
              backgroundColor: isLightMode
                ? // @ts-ignore [1]
                  theme.palette.grey[50]
                : // @ts-ignore [1]
                  theme.palette.background.default,
            },
          };
        }}
      />
      <Page title="Something went wrong...">
        <Button
          // @ts-ignore - Upstream issue with "component" prop in @mineral/core
          component="a"
          variant="outlined"
          href="/">
          Back to Home Page
        </Button>
      </Page> */}
      <div
        style={{
          background: '#fff',
          padding: '60px',
        }}>
        <Grid container className="comeMob">
          <Grid item sm={6} xs={12} className="comeSoon">
            <div className="comeStyle">
              <div className="comeCol">Oops....</div>
              <div
                style={{
                  fontSize: '24px',
                  padding: '15px 0px 10px',
                  color: '#000',
                }}>
                Page not found
              </div>
              <div
                style={{
                  fontSize: '16px',
                  padding: '15px 0px 10px',
                  color: 'grey',
                }}>
                This page doesn't exist or was removed!
              </div>
              {/* <div
                style={{
                  fontSize: '16px',
                  padding: '0px 0px',
                  color: 'grey',
                }}>
                We suggest you back to home
              </div> */}
              <div style={{ margin: '40px 0px' }}>
                <Button
                  style={{
                    color: '#fff',
                    background: '#ce0930',
                    height: '50px',
                    width: '250px',
                  }}
                  href="/">
                  <img
                    src={back_icon}
                    alt="no_image"
                    style={{ padding: '10px' }}
                  />
                  <span style={{ padding: '10px' }}>Back to home</span>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12} className="errorImg">
            <img src={notfound} alt="no_image" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ErrorPage;
