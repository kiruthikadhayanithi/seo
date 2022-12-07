import { Button } from '@mineral/core';
import * as React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import comingsoon from '../../../Assets/coming-soon.svg';
import back_icon from '../../../Assets/left-arrow.svg';
import { Grid } from '@mui/material';
import AppHeader from 'components/AppLayout/admin/AdminHeader';
import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Default: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any>(null);
  const match = useMatch('/index.html');
  const navigate = useNavigate();
  React.useEffect(() => {
    match && navigate('/', { replace: true });
  }, [match, navigate]);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info: any) => {
        setUserInfo(info);
        console.log('UESRINFO', userInfo);
      });
    }
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <div style={{ height: '46px' }}>
        <AppHeader />
      </div>

      <div className="comeBg">
        <Grid container className="comeMob">
          <Grid item sm={6} xs={12} className="comeSoon">
            <div className="comeStyle">
              <div className="comeCol">Coming Soon...</div>
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
    </div>
  );
};

export default Default;
