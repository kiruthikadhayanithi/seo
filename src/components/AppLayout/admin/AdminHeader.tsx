import { Box, Button, MenuItem } from '@mineral/core';
import { Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect, useDispatch } from 'react-redux';
import { isLoggedIn, userToken } from 'reducer/action';

function AppHeader() {
  const { oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();

  const logout = () => {
    oktaAuth.signOut();
    dispatch(isLoggedIn(false));
    dispatch(userToken(undefined));
  };

  const navigate = useNavigate();
  return (
    <Box>
      <Box style={{ backgroundColor: '#1D1F24' }}>
        <Grid
          container
          direction="row"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto',
            width: '1200px',
            marginBottom: '-8px',
            position: 'relative',
          }}>
          <Grid item sx={{ color: 'white' }} xs={12} sm="auto">
            <MenuItem
              sx={{
                // ml: '26em',
                color: '#fff',
                '&:hover': { color: 'white', backgroundColor: '#424954' },
                px: '1em',
              }}
              onClick={() => {
                navigate('/admin/dashboard');
              }}
              id="dashboard">
              <DashboardIcon />
              <span style={{ padding: '0px 10px' }}>Dashboard</span>
            </MenuItem>
          </Grid>
          <Grid item xs={12} sm="auto">
            <MenuItem
              sx={{
                color: '#fff',
                '&:hover': { color: 'white', backgroundColor: '#424954' },
                px: '2em',
              }}
              onClick={() => {
                navigate('/admin/banners');
              }}
              id="banner">
              <ViewCarouselIcon />
              <span style={{ padding: '0px 10px' }}>Banner</span>
            </MenuItem>
          </Grid>
          <Grid item xs={12} sm="auto">
            <MenuItem
              sx={{
                color: '#fff',
                '&:hover': { color: 'white', backgroundColor: '#424954' },
                px: '2em',
              }}
              onClick={() => {
                navigate('/admin/champions');
              }}
              id="championss">
              <AutoAwesomeMosaicIcon />
              <span style={{ padding: '0px 10px' }}>Champions</span>
            </MenuItem>
          </Grid>
          {/* <Grid item xs={12} sm="auto">
            <MenuItem
              sx={{
                color: '#fff',
                '&:hover': { color: 'white', backgroundColor: '#424954' },
                px: '2em',
              }}
              id="permission">
              <PersonIcon />
              <span style={{ padding: '0px 10px' }}>Permissions</span>
            </MenuItem>
          </Grid> */}
          <Grid item xs={12} sm="auto" sx={{ pt: '0.5px' }}>
            <Button
              style={{
                color: '#fff',
                background: '#ce0930',
                height: '38px',
                width: '90px',
                fontSize: '15px',
                position: 'absolute',
                right: '0px',
                borderRadius: '5px',
                marginTop: '3px',
              }}
              onClick={logout}>
              <span>Logout</span>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function mapDispatchToProps(state: any) {
  return {
    isLoggedIn: state.isLoggedIn,
    userToken: state.userToken,
  };
}

export default connect(mapDispatchToProps)(AppHeader);
