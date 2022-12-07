import { Button, Menu, MenuItem, Typography } from '@mineral/core';
import {
  Collapse,
  Drawer,
  Grid,
  // Link,
  // IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
// import { Button, styled } from '@mui/material';
import wolken from '../../Assets/wolken.svg';
import forza from '../../Assets/forza.png';
// import SBOT from '../../Assets/SBOT.svg';
import servicenow from '../../Assets/Service.png';
import slack from '../../Assets/slack.svg';
import gto from '../../Assets/gto.svg';
import '../../index.css';
import { connect } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Env from 'utils/Services/Env';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NavProps } from '../../utils/Data';
import { CaretUp } from '@mineral/icons';

const NewFooter = (props: any) => {
  // const StyledButton = styled(Button)({
  //   color: 'black',
  //   mx: '1em',
  // });

  React.useEffect(() => {
    getChampionsBlock();
  }, []);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [element, SetElement] = React.useState(0);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [drawerState, toggleDrawer] = React.useState<boolean>(false);
  const [openList, setOpenList] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState<any>();
  const [championsList, setChampionsList] = React.useState<any>([]);

  const getChampionsBlock = () => {
    // const getData = Env.get(`champion?page_size=50&status=1&page_type=1`);
    const getData = Env.get(`champion`, props.userToken);
    getData.then(
      (response: any): void => {
        const data = response.data.champions;
        data.sort((previous: any, next: any) => {
          return previous.order - next.order;
        });
        setChampionsList(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
    SetElement(0);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
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

  const list = [
    {
      id: 2,
      title: 'Site Navigation',
      url: '/',
      subnav: [
        {
          id: 1,
          title: 'DevOps Platform',
          url: '/devops',
          // url: 'https://sites.google.com/broadcom.com/gtso-devops/home',
        },
        {
          id: 2,
          title: 'SaaS Operations',
          url: '/saas-operations',
          // url: 'https://sites.google.com/broadcom.com/sbo-portal/home/saasops',
        },

        {
          id: 3,
          title: 'SaaS Platform Engineering',
          // url: 'https://sites.google.com/broadcom.com/saas-ops-cd-pipeline/opinionated-cd-pipeline',
          url: '',
        },
        {
          id: 4,
          title: 'Mainframe Support',
          url: '/mainframe',
        },
        {
          id: 5,
          title: 'Cloud Finops',
          url: '',
        },
        {
          id: 6,
          title: 'Business Development',
          url: '',
        },
        {
          id: 7,
          title: 'SaaS Platform Services',
          // url: 'https://bsg-confluence.broadcom.net/',
          url: '',
        },
        {
          id: 8,
          title: 'Business Operations',
          url: '',
        },
        {
          id: 9,
          title: 'BSG Marketing',
          url: 'https://sites.google.com/broadcom.com/sales-resource-center/bsg-marketing',
        },
        {
          id: 10,
          title: 'Security',
          url: '/security',
        },
        {
          id: 11,
          title: 'Governance Risk Compliance',
          url: '',
        },
      ],
    },
  ];

  return (
    <Grid className="footerBg">
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'row',
          ml: 'auto',
          mr: 'auto',
          mt: '1%',
          mb: '0',
          maxWidth: '1200px',
          textAlign: 'start',
        }}
        className="footWidth">
        <Grid item sx={{ width: '70%' }} className="productSol">
          <Grid item my="0.5em">
            <Grid>
              <Grid item className="productList" sx={{ float: 'left' }}>
                {/* <StyledButton
                  variant="text"
                  sx={{
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '16px',
                  }}> */}
                <a
                  target="_blank"
                  href="https://www.broadcom.com/products"
                  style={{
                    textDecoration: 'none',
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '14px',
                    padding: '5px',
                  }}
                  rel="noreferrer">
                  Products
                </a>
                {/* </StyledButton> */}
                {/* <StyledButton
                  variant="text"
                  sx={{
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '16px',
                  }}> */}
                <a
                  target="_blank"
                  href="https://www.broadcom.com/solutions"
                  style={{
                    textDecoration: 'none',
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '14px',
                    marginLeft: '5px',
                    padding: '5px',
                  }}
                  rel="noreferrer">
                  Solutions
                </a>
                {/* </StyledButton> */}
                {/* <StyledButton
                  variant="text"
                  sx={{
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '16px',
                  }}> */}
                <a
                  target="_blank"
                  href="https://www.broadcom.com/support"
                  style={{
                    textDecoration: 'none',
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '14px',
                    marginLeft: '5px',
                    padding: '5px',
                  }}
                  rel="noreferrer">
                  Support and Services
                </a>
                {/* </StyledButton> */}
                {/* <StyledButton
                  variant="text"
                  sx={{
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '16px',
                  }}> */}
                <a
                  target="_blank"
                  href="https://www.broadcom.com/"
                  style={{
                    textDecoration: 'none',
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '14px',
                    marginLeft: '5px',
                    padding: '5px',
                  }}
                  rel="noreferrer">
                  Company
                </a>
                {/* </StyledButton> */}
                {/* <StyledButton
                  variant="text"
                  sx={{
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '16px',
                  }}> */}
                {/* <a
                  target="_blank"
                  href="https://www.broadcom.com/how-to-buy"
                  style={{
                    textDecoration: 'none',
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '14px',
                    marginLeft: '5px',
                    padding: '5px',
                  }}
                  rel="noreferrer">
                  How To Buy
                </a> */}
                {/* </StyledButton> */}
                {/* <StyledButton
                  variant="text"
                  sx={{
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '16px',
                  }}> */}
                <a
                  target="_blank"
                  // href="https://sbo.ice-insights-dev.broadcom.net/"
                  href="https://seo.ice-insights.broadcom.net/"
                  style={{
                    textDecoration: 'none',
                    color: '#52565A',
                    fontWeight: '900',
                    fontSize: '14px',
                    marginLeft: '5px',
                    padding: '5px',
                  }}
                  rel="noreferrer">
                  Traffic
                </a>
                {/* </StyledButton> */}
                {/* <StyledButton>Site Navigation</StyledButton> */}
                {props.userGroup?.length > 0 ? (
                  <a
                    // target="_blank"
                    // href="https://sbo.ice-insights-dev.broadcom.net/"
                    href="/admin/dashboard"
                    style={{
                      textDecoration: 'none',
                      color: '#52565A',
                      fontWeight: '900',
                      fontSize: '14px',
                      marginLeft: '5px',
                      padding: '5px',
                    }}
                    rel="noreferrer">
                    CMS Admin
                  </a>
                ) : null}
              </Grid>
              <Grid item className="sitenavFooter">
                <div>
                  <Drawer
                    open={drawerState}
                    onClose={() => toggleDrawer(false)}
                    anchor="left">
                    <List
                      sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                      }}
                      component="nav"
                      aria-labelledby="nested-list-subheader">
                      {list.map((item, key) => (
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
                          {item.id === selectedIndex &&
                            item.subnav != undefined && (
                              <Collapse
                                in={openList}
                                timeout="auto"
                                unmountOnExit>
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
                                          ? (navigate(element.url),
                                            toggleDrawer(false))
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
                </div>
                <div className="menu-block">
                  {list.map((res) => {
                    return (
                      <Grid
                        item
                        key={res.id}
                        sx={{ mx: '1em' }}
                        className="homeMenu">
                        <Button
                          variant="text"
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          endIcon={res.subnav != undefined ? <CaretUp /> : ''}
                          onClick={(e) => {
                            handleClick(e);
                            SetElement(res.id);
                            res.url === '/'
                              ? !res.subnav && navigate('/')
                              : // !res.subnav && (window.location.href = '/')
                                window.open(res.url);
                          }}
                          sx={(theme) => ({
                            color: '#52565a',
                            '&:hover': {
                              color: theme.palette.secondary.contrastText,
                              bgcolor: '#CE0930',
                            },
                            '&:active': {
                              color: theme.palette.secondary.contrastText,
                              bgcolor: '#CE0930',
                            },
                            width: '140px',
                          })}>
                          {res.title}
                        </Button>
                        {res.subnav != undefined && (
                          <Menu
                            id="footerMenu"
                            anchorEl={anchorEl}
                            open={element === res.id}
                            onClose={handleClose}
                            // anchorReference="anchorPosition"
                            // anchorPosition={{ top: 250, left: 650 }}
                            // anchorOrigin={{
                            //   vertical: 'top',
                            //   horizontal: 'center',
                            // }}
                            // transformOrigin={{
                            //   vertical: 'top',
                            //   horizontal: 'center',
                            // }}
                            anchorOrigin={{
                              vertical: 500,
                              horizontal: -90,
                            }}
                            transformOrigin={{
                              vertical: 500,
                              horizontal: -90,
                            }}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}>
                            {championsList.map((subdata: any) => {
                              return (
                                // <Link
                                //   href={`/${subdata.slug}`}
                                //   key={subdata.id}
                                //   style={{
                                //     textDecorationLine: 'none',
                                //     textAlign: 'center',
                                //   }}>

                                // </Link>
                                // <Link to={`/${subdata.slug}`} key={subdata.id}>

                                <MenuItem
                                  onClick={() => {
                                    subdata.link_page === '/coming-soon'
                                      ? navigate('/coming-soon')
                                      : subdata.is_link == '1'
                                      ? (navigate(`/${subdata.slug}`),
                                        window.location.reload())
                                      : window.open(`${subdata.link_page}`);
                                    SetElement(0);
                                    // return navigate('/coming-soon');
                                  }}
                                  // onClick={() => {
                                  //   subdata.link_page === '/coming-soon'
                                  //     ? navigate('/coming-soon')
                                  //     : subdata.is_link != '1'
                                  //     ? window.open(`${subdata.link_page}`)
                                  //     : navigate(`/${subdata.slug}`);
                                  //   SetElement(0);
                                  // }}
                                  key={subdata.id}
                                  sx={(theme) => ({
                                    color: theme.palette.primary.dark,
                                    '&:hover': {
                                      color:
                                        theme.palette.secondary.contrastText,
                                      bgcolor: '#CE0930',
                                    },
                                  })}>
                                  {/* <Link
                                      to={`/${subdata.slug}`}
                                      style={{
                                        color: 'black',
                                        textDecorationLine: 'none',
                                        border: 'none',
                                      }}> */}
                                  {subdata.name}
                                  {/* </Link> */}
                                </MenuItem>
                                // </Link>
                              );
                            })}
                            {/* {championsList.map((subdata: any) => {
                              return (
                                <MenuItem
                                  onClick={() => {
                                    subdata.link_page === '/coming-soon'
                                      ? navigate('/coming-soon')
                                      : // : subdata.is_link == '1'
                                        // ? navigate(`/${subdata.slug}`)
                                        window.open(`${subdata.link_page}`);
                                    // SetElement(0);
                                  }}
                                  key={subdata.id}
                                  sx={(theme) => ({
                                    color: theme.palette.primary.dark,
                                    '&:hover': {
                                      color:
                                        theme.palette.secondary.contrastText,
                                      bgcolor: '#CE0930',
                                    },
                                  })}>
                                  {subdata.name}
                                </MenuItem>
                              );
                            })} */}
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
          </Grid>
          <Typography
            my="0.5em"
            sx={{
              fontSize: '12px',
              fontFamily: 'gotham_book_webfont',
              pl: '4px',
              color: '#333',
            }}>
            Copyright © 2005-2022 Broadcom.All Rights Reserved.The term
            "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
          </Typography>
          <Grid item ml="-8px">
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '12px',
                color: '#333',
              }}
              className="privacyCen">
              <Grid item>
                <Typography
                  style={{ color: '#333' }}
                  sx={{
                    color: 'gray',
                    fontSize: '12px',
                    paddingRight: '10px',
                  }}>
                  <a
                    target="_blank"
                    href="https://www.broadcom.com/company/legal/privacy"
                    style={{
                      textDecoration: 'none',
                      color: 'gray',
                      fontSize: '12px',
                      paddingRight: '10px',
                    }}
                    rel="noreferrer">
                    Privacy
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: '#333' }}
                  sx={{
                    color: 'gray',
                    fontSize: '12px',
                    paddingRight: '10px',
                  }}>
                  <a
                    target="_blank"
                    href=" https://www.broadcom.com/company/citizenship/supplier-responsibility"
                    style={{
                      textDecoration: 'none',
                      color: 'gray',
                      fontSize: '12px',
                      paddingRight: '10px',
                    }}>
                    Supplier Responsibilty
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: '#333' }}
                  sx={{
                    color: 'gray',
                    fontSize: '12px',
                    paddingRight: '10px',
                  }}>
                  <a
                    target="_blank"
                    href="  https://www.broadcom.com/company/legal/terms-of-use"
                    style={{
                      textDecoration: 'none',
                      color: 'gray',
                      fontSize: '12px',
                      paddingRight: '10px',
                    }}>
                    Terms of Use
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: '#333' }}
                  sx={{
                    color: 'gray',
                    fontSize: '12px',
                    paddingRight: '10px',
                  }}>
                  <a
                    target="_blank"
                    href="https://www.broadcom.com/sitemap"
                    style={{
                      textDecoration: 'none',
                      color: 'gray',
                      fontSize: '12px',
                      paddingRight: '10px',
                    }}
                    rel="noreferrer">
                    Site Map
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ width: '30%' }} className="productSer">
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mt: '2em',
              mb: '2em',
              mr: 'auto',
            }}
            className="footIcon">
            <Grid item mx="1em" className="footImg">
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '9px',
                }}
                target="_blank"
                href="https://ca-broadcomcsm.wolkenservicedesk.com/wolken/"
                rel="noreferrer">
                <img style={{ width: '70px' }} src={wolken} alt="wolke" />
                <p style={{ textAlign: 'center' }}>Product Status</p>
              </a>
            </Grid>
            <Grid item mx="1em" className="footImg">
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '9px',
                }}
                target="_blank"
                href="https://forza.saas.broadcomcloud.com/v2/landing"
                rel="noreferrer">
                <img
                  style={{ width: '90px' }}
                  className="forzaIcon"
                  src={forza}
                  alt="forza"
                />
                <p style={{ textAlign: 'center' }}>Full Tunnel</p>
              </a>
            </Grid>
            <Grid item mx="1em" className="footImg">
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '9px',
                }}
                target="_blank"
                href="https://broadcomprd.service-now.com/sp?id=sc_cat_item&sys_id=8622f7b7dbc9cc104956467239961942"
                rel="noreferrer">
                <img
                  src={servicenow}
                  alt="servicenow"
                  style={{ width: '122px' }}
                />
                <p style={{ textAlign: 'center' }}>Incident management</p>
              </a>
            </Grid>
            {/* <Grid item mx="1em" className="footImg">
              <img
                style={{ width: '70px', marginBottom: '13px' }}
                className="sbotIcon"
                src={SBOT}
                alt="sbot"
              />
            </Grid> */}
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mt: '2em',
              mb: '2em',
              mr: 'auto',
            }}
            className="footIcon">
            <Grid item mx="1em" className="footImg">
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '9px',
                }}
                target="_blank"
                href="slack://app.slack.com/client/T01HQPXH5D5/C01HQPXJA8P"
                rel="noreferrer">
                <img style={{ width: '70px' }} src={slack} alt="slack" />
                <p style={{ textAlign: 'center' }}>Internal coms</p>
              </a>
            </Grid>
            <Grid item mx="1em" className="footImg">
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '9px',
                }}
                target="_blank"
                href="https://gtodashboard.broadcom.net/"
                rel="noreferrer">
                <img
                  style={{ width: '70px', marginLeft: '15px' }}
                  src={gto}
                  alt="gto"
                />
                <p
                  style={{
                    position: 'relative',
                    top: '-13px',
                    textAlign: 'center',
                  }}>
                  Dashboard
                </p>
              </a>
            </Grid>
            <Grid item mx="1em" className="footImg">
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '9px',
                }}
                target="_blank"
                href="https://portal.broadcom.com/group/gto"
                rel="noreferrer">
                <img style={{ width: '70px' }} src={gto} alt="gto" />
                <p
                  style={{
                    position: 'relative',
                    top: '-13px',
                    textAlign: 'center',
                  }}>
                  Portal
                </p>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
    userGroup: state.userGroup,
  };
}

export default connect(mapDispatchToProps)(NewFooter);
