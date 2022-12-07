import { Button } from '@mineral/core';
import * as React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import comingsoon from '../../Assets/coming-soon.svg';
import back_icon from '../../Assets/left-arrow.svg';
import { Grid } from '@mui/material';
// import { Box, Button } from '@mineral/core';
// import { Page } from 'components/Page';

const NotFoundPage: React.FC = () => {
  // NOTE: This match/nagivate code block is only needed for Mineral's internal CI deploy environment
  const match = useMatch('/index.html');
  const navigate = useNavigate();
  React.useEffect(() => {
    match && navigate('/', { replace: true });
  }, [match, navigate]);

  return (
    // <Page
    //   title="Coming Soon..."
    //   data-testid="notFoundPage"
    //   sx={{ height: '100vh', alignItems: 'center', pl: '800px' }}>
    // {/* <Box textAlign="center">
    //   <Button
    //     variant="outlined"
    //     // @ts-ignore - Upstream issue with "component" prop in @mineral/core
    //     component={Link}
    //     to="/"
    //     sx={(theme) => ({
    //       bgcolor: theme.palette.primary.main,
    //       color: theme.palette.primary.dark,
    //       '&:hover': {
    //         color: theme.palette.secondary.contrastText,
    //         bgcolor: theme.palette.primary.dark,
    //       },
    //     })}>
    //     Back to Home Page
    //   </Button>
    // </Box> */}
    // </Page>
    <div className="comeBg">
      <Grid container className="comeMob">
        <Grid item sm={6} xs={12} className="comeSoon">
          <div className="comeStyle">
            <div className="comeCol">Coming Soon...</div>
            {/* <div
              style={{
                fontSize: '16px',
                padding: '15px 0px 10px',
                color: 'grey',
              }}>
              This page doesn't exist or was removed!
            </div> */}
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
        <Grid item sm={6} xs={12} className="comeImg">
          <img src={comingsoon} alt="no_image" />
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFoundPage;
