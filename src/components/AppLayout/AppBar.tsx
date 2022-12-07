// import { Box } from '@mineral/core';
// import logoinner from '../../Assets/logoinner.png';
import Apptitle from 'components/AppLayout/Apptitle';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Grid, IconButton } from '@mui/material';
// import '../../Assets/styles/AppHeader.css';

const SboAppBar = () => {
  return (
    // <Box className="app-header-block">
    //   <Grid
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //       margin: 'auto',
    //       width: 'auto',
    //       marginBottom: '-8px',
    //       justifyContent: 'center',
    //     }}
    //     className="headerMenu">
    //     <div className="menu-button">
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer">
    //         <MenuIcon className="menu-icon" />
    //       </IconButton>
    //     </div>
    //     <Grid item sx={{ my: '1em' }} className="logoImg">
    //       <img src={logoinner} alt="logo" />
    //     </Grid>
    <Apptitle />
    //   </Grid>
    // </Box>
  );
};

export default SboAppBar;
