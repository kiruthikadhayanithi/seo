import * as React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
} from '@mineral/core';
import { NavData, NavProps } from '../../utils/Data';
import { CaretDown, MagnifyingGlass as SearchIcon } from '@mineral/icons';
// import { Search } from '@mui/icons-material';
import { useICE } from '@mineral-community/ice-utils';
// import HelpIcon from 'Assets/HelpIcon';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/app-header.css';
import {
  Collapse,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoinner from '../../Assets/logoinner.png';
import { Box } from '@mineral/core';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Env from 'utils/Services/Env';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { isLoggedIn, userToken } from 'reducer/action';

const Apptitle = (props: any) => {
  const { oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [element, SetElement] = React.useState(0);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [drawerState, toggleDrawer] = React.useState<boolean>(false);
  const [openList, setOpenList] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState<any>();
  // const [championsList, setChampionsList] = React.useState<any>([]);

  React.useEffect(() => {
    getChampionsBlock();
  }, []);

  const getChampionsBlock = () => {
    // const getData = Env.get(`champion?page_size=50&status=1&page_type=1`);
    const getData = Env.get(`champion`, props.userToken);
    getData.then(
      (response: any): void => {
        const data = response.data.champions;
        data.sort((previous: any, next: any) => {
          return previous.order - next.order;
        });
        // setChampionsList(data);
      },
      (error: any) => {
        if (error.response.status == 401) {
          oktaAuth.signOut();
          dispatch(isLoggedIn(false));
          dispatch(userToken(undefined));
        }
        console.error(error);
      }
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    SetElement(0);
  };

  const handleListClick = (res: NavProps) => {
    setOpenList(!openList);
    setSelectedIndex(res.id);
    res.url === '/'
      ? res.subnav
        ? ''
        : navigate(res.url)
      : window.open(res.url);
    !res.subnav && toggleDrawer(false);
  };
  const handleSearch = () => {
    if (searchquery !== '') {
      navigate(`/search?q=${searchquery}`);
    }
  };
  const ICE_DEV_KEY = process.env.REACT_APP_ICE_DEV_KEY || ''; // Your Product Key
  const ICE_SCRIPT_PATH = process.env.REACT_APP_ICE_UTILS_SCRIPT_PATH || '';
  const ice = useICE(ICE_DEV_KEY, ICE_SCRIPT_PATH, 'silent');
  const iceLaunchedRef = React.useRef<boolean>(false);

  const initializeICE = () => {
    iceLaunchedRef.current = Boolean(
      ice?.init?.(
        {
          name: 'SBO', // Your Product Identifier
          version: '1.0', // Your Product Version (leave empty if you want to support multiple versions)
          displayName: 'SBO',
        },
        {
          userName: '', // Optional
          email: '', // Optional
        },
        {
          mode: 'off',
        }
      )
    );
  };

  React.useEffect(() => {
    initializeICE();
  }, [ice]);

  const [searchquery, setSearchQuery] = React.useState('');
  return (
    <Box className="app-header-block">
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          margin: 'auto',
          width: 'auto',
          marginBottom: '-8px',
          justifyContent: 'center',
        }}
        className="headerMenu">
        <div className="menu-button">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(!drawerState)}>
            <MenuIcon className="menu-icon" />
          </IconButton>
        </div>
        <Grid
          style={{ cursor: 'pointer' }}
          item
          sx={{ my: '1em' }}
          className="logoImg"
          onClick={() => navigate('/')}>
          {/* onClick={() => (window.location.href = '/')}> */}
          {/* <span onClick={() => alert('ji')}> */}
          <img src={logoinner} alt="logo" />
          {/* </span> */}
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '1em',
            width: '100%',
            justifyContent: 'right',
            alignSelf: 'flex-start',
          }}>
          <TextField
            sx={{ mt: '-4px', mr: '19px' }}
            placeholder="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            onKeyDown={(e) => {
              e.key === 'Enter' && handleSearch();
            }}
          />
          {/* <div className="search-block">
            <input
              placeholder="Search"
              style={{
                height: '35px',
                borderRadius: '2px',
                border: '1px solid #e4e5e7',
                width: '250px',
                paddingLeft: '6px',
                outline: 'none',
                background: '#fff',
              }}
            />
            <span
              style={{
                paddingLeft: '10px',
                paddingTop: '10px',
                cursor: 'pointer',
                position: 'relative',
                right: '35px',
                color: 'grey',
                fontSize: '16px',
              }}>
              <Search fontSize="small" />
            </span>
          </div> */}
          <div className="menu-block">
            {NavData.map((res) => {
              return (
                <Grid item key={res.id} sx={{ mx: '1em' }} className="homeMenu">
                  <Button
                    variant="text"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    endIcon={res.subnav != undefined ? <CaretDown /> : ''}
                    onClick={(e) => {
                      handleClick(e);
                      SetElement(res.id);
                      res.url === '/'
                        ? !res.subnav && navigate('/')
                        : // !res.subnav && (window.location.href = '/')
                          window.open(res.url);
                    }}
                    sx={(theme) => ({
                      color: theme.palette.primary.dark,
                      '&:hover': {
                        color: theme.palette.secondary.contrastText,
                        bgcolor: '#CE0930',
                      },
                      '&:active': {
                        color: theme.palette.secondary.contrastText,
                        bgcolor: '#CE0930',
                      },
                    })}>
                    {res.title}
                  </Button>
                  {res.subnav != undefined && (
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={element === res.id}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}>
                      {/* {championsList.map((subdata: any) => { 
                        return (
                          <MenuItem
                            onClick={() => {
                              subdata.link_page === '/coming-soon'
                                ? navigate('/coming-soon')
                                : subdata.is_link == '1'
                                ? navigate(`/${subdata.slug}`)
                                : window.open(`${subdata.link_page}`);
                              // SetElement(0);
                            }}
                            key={subdata.id}
                            sx={(theme) => ({
                              color: theme.palette.primary.dark,
                              '&:hover': {
                                color: theme.palette.secondary.contrastText,
                                bgcolor: '#CE0930',
                              },
                            })}>
                            {subdata.name}
                          </MenuItem>
                        );
                      })} */}
                      {res.subnav.map((subdata: any) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              subdata.url === '/coming-soon'
                                ? navigate('/coming-soon')
                                : // : subdata.is_link == '1'
                                  // ? navigate(`/${subdata.slug}`)
                                  window.open(`${subdata.url}`);
                              // SetElement(0);
                            }}
                            key={subdata.id}
                            sx={(theme) => ({
                              color: theme.palette.primary.dark,
                              '&:hover': {
                                color: theme.palette.secondary.contrastText,
                                bgcolor: '#CE0930',
                              },
                            })}>
                            {subdata.title}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  )}
                </Grid>
              );
            })}
            {/* <IconButton sx={{ padding: '0px' }} onClick={initializeICE}>
              <HelpIcon sx={{ fontSize: '24px' }} />
            </IconButton> */}
          </div>
        </Grid>
      </Grid>

      <Drawer
        open={drawerState}
        onClose={() => toggleDrawer(false)}
        anchor="left">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader">
          {NavData.map((item, key) => (
            <React.Fragment key={key}>
              <ListItemButton onClick={() => handleListClick(item)}>
                <ListItemText primary={item.title} />
                {item.subnav && (
                  <div>
                    {openList && item.id === selectedIndex ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </div>
                )}
              </ListItemButton>
              {item.id === selectedIndex && item.subnav != undefined && (
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subnav.map((element, index) => (
                      <ListItemButton
                        key={index}
                        sx={{ pl: 4 }}
                        onClick={() => {
                          element.url === '/mainframe' ||
                          element.url === '/devops' ||
                          element.url === '/saas-operations' ||
                          element.url === '/software-tools-status'
                            ? (navigate(element.url), toggleDrawer(false))
                            : // ((window.location.href = element.url),
                              // toggleDrawer(false)
                              window.open(element.url);
                          // (window.location.href = '/');
                        }}>
                        <ListItemText primary={element.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
  };
}

export default connect(mapDispatchToProps)(Apptitle);
