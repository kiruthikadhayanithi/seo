import * as React from 'react';
import { Grid } from '@mui/material';
import { Button } from '@mineral/core';
import { useOktaAuth } from '@okta/okta-react';
// import { useDispatch } from 'react-redux';
// import { isLoggedIn } from 'reducer';

const LoginPortal: React.FC = () => {
  // const dispatch = useDispatch();
  const { oktaAuth } = new useOktaAuth();
  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    // dispatch(isLoggedIn(true));
    oktaAuth.signInWithRedirect({ originalUri: '/' });
  };

  return (
    <div style={{ height: '100%' }}>
      <div
        style={{
          background: '#fff',
          height: '100vh',
        }}>
        <Grid
          container
          className="comeMob"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Grid item sm={6} xs={12} className="comeSoon">
            <div className="comeStyle">
              <div>
                <img src="/default/image/Broadcom_logo.png" alt="no_image" />
              </div>
              <div style={{ textAlign: 'center' }} className="comeCol">
                Welcome to SEO Portal
              </div>
              <div style={{ margin: '20px 0px', textAlign: 'center' }}>
                <Button
                  style={{
                    color: '#fff',
                    background: '#ce0930',
                    height: '50px',
                    width: '250px',
                    fontSize: '18px',
                  }}
                  onClick={login}>
                  <span>Login with Okta</span>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12} className="errorImg">
            <img
              src="/default/image/wheel_banner.png"
              alt="no_image"
              style={{ width: '580px' }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPortal;
