import {
  Box,
  Button,
  Card,
  CardActionArea,
  Fade,
  Grid,
  Grow,
  Typography,
} from '@mineral/core';
import { ArrowLeft, ArrowRight } from '@mineral/icons';
import React, { useEffect } from 'react';
// import { CardData } from 'utils/Data';
//import devops from '../Assets/SBOArea/devops.png';
// import saas from '../Assets/SBOArea/saas.png';
// import cloud from '../Assets/SBOArea/cloud.png';
// import bsg from '../Assets/SBOArea/bsg.png';
// import businessoper from '../Assets/SBOArea/businessoper.png';
// import mainframe from '../Assets/SBOArea/mainframe.png';
// import saasplat from '../Assets/SBOArea/saasplat.png';
// import saasservices from '../Assets/SBOArea/saasservices.png';
// import security from '../Assets/SBOArea/security.png';
// import business from '../Assets/SBOArea/business.png';
// import grc from '../Assets/SBOArea/grc.png';
import seo from '../Assets/seo.png';
import cut from '../Assets/cut.png';
import { useNavigate } from 'react-router-dom';
import Env from 'utils/Services/Env';
import { Bars } from 'react-loader-spinner';
import gear_icon from '../Assets/Static/sbo.svg';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { isLoggedIn, userToken } from 'reducer/action';

declare const wheelnav: any;
declare const slicePath: any;

const CardGrid = (props: any) => {
  const navigate = useNavigate();
  const { oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();
  const [index, SetIndex] = React.useState(0) as any;
  const [enable, setEnable] = React.useState(true);
  const [selectedKey, setSelectedKey] = React.useState(0) as any;
  const [championsList, setChampionsList] = React.useState<any>([]);
  const [showLoader, setShowLoader] = React.useState(true);
  // const [areasOfResp, setAreasOfResp] = React.useState<any>([]);
  // const areasOfResp = [
  //   `imgsrc:${devops}`,
  //   `imgsrc:${saas}`,
  //   `imgsrc:${saasplat}`,
  //   `imgsrc:${mainframe}`,
  //   `imgsrc:${cloud}`,
  //   `imgsrc:${business}`,
  //   `imgsrc:${saasservices}`,
  //   `imgsrc:${businessoper}`,
  //   `imgsrc:${bsg}`,
  //   `imgsrc:${security}`,
  //   `imgsrc:${grc}`,
  // ];

  useEffect(() => {
    getChampionsBlock();
  }, [selectedKey]);

  // useEffect(() => {

  // }, []);
  // }, [selectedService]);

  const getChampionsBlock = () => {
    const items: any = [];
    // const getData = Env.get(`champion?page_size=50&status=1&page_type=1`);
    // const getData = Env.get(`champion`, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken?.authStateManager?._authState?.accessToken.accessToken}`,
    //   },
    // });
    const getData = Env.get(`champion`, props.userToken);
    getData.then(
      (response: any): void => {
        const data = response.data.champions;
        data.sort((previous: any, next: any) => {
          return previous.order - next.order;
        });
        data.forEach((ele: any) => {
          items.push(`imgsrc:${ele.icon_image}`);
          //items.push(`imgsrc:${devops}}`);
        });
        const currentwidth = document.getElementById('wheelDiv');
        const wheel = new wheelnav('wheelDiv');
        wheel.slicePathFunction = slicePath().DonutSlice;
        wheel.spreaderEnable = true;
        wheel.spreaderInTitle = `imgsrc:${seo}`;
        wheel.spreaderOutTitle = `imgsrc:${seo}`;
        if (currentwidth !== null) {
          wheel.spreaderInTitleWidth = currentwidth.offsetWidth * 0.3;
          wheel.spreaderOutTitleWidth = currentwidth.offsetWidth * 0.3;
          wheel.spreaderRadius = currentwidth.offsetWidth * 0.22;
        }
        wheel.rotateRound = false;
        wheel.rotateRoundCount = 0;
        wheel.spreaderPathInAttr = {
          fill: '#ffffff',
          'stroke-width': 0,
          cursor: 'default',
        };
        wheel.spreaderPathOutAttr = {
          fill: '#ffffff',
          'stroke-width': 0,
          cursor: 'default',
        };
        wheel.slicePathAttr = {
          fill: '#EBEFF5',
          stroke: '#333840',
          'stroke-width': 3,
        };
        wheel.sliceHoverAttr = {
          fill: '#EBEFF5',
          stroke: '#333840',
          'stroke-width': 3,
        };
        wheel.sliceSelectedAttr = {
          fill: '#fad4d4',
          stroke: '#333840',
          'stroke-width': 3,
        };
        wheel.titleWidth = 42;
        wheel.titleHeight = 42;
        wheel.titleHoverWidth = 46;
        wheel.titleHoverHeight = 46;
        wheel.titleSelectedWidth = 46;
        wheel.titleSelectedHeight = 46;

        wheel.colors = ['#EBEFF5'];
        wheel.keynavigateEnabled = true;
        wheel.keynavigateOnlyFocus = true;
        wheel.centerX = 10;
        wheel.centerY = 340;
        wheel.selectedPercent = 1.1;
        wheel.animatetime = 200;
        wheel.animateeffect = 'linear';
        wheel.maxPercent = 0.9;
        wheel.createWheel(items);
        wheel.navigateWheel(selectedKey);
        items.forEach((element: any, key: any) => {
          wheel.navItems[key].navigateFunction = function () {
            const clicked = wheel.navItems[key as number]
              .wheelItemIndex as number;
            console.log('clicked', data[clicked]);
            return [
              SetIndex(data[clicked].id),
              setEnable(false),
              setSelectedKey(clicked),
            ];
          };
        });
        setTimeout(() => {
          setChampionsList(data);
          setShowLoader(false);
        });
      },
      (error: any) => {
        if (error.response.status == 401) {
          oktaAuth.signOut();
          dispatch(isLoggedIn(false));
          dispatch(userToken(undefined));
        } else {
          setTimeout(() => {
            setShowLoader(false);
          });
        }
      }
    );
  };

  return (
    <Box>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          ml: 'auto',
          mr: 'auto',
          mb: '2%',
          maxWidth: '1200px',
        }}
        className="wheelLand">
        <Grid
          item
          sx={{
            width: '38%',
            backgroundImage: `url(${cut})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
          }}
          className="wheelAlign">
          <div
            id="wheelDiv"
            style={{
              width: '650px',
              height: '600px',
            }}
          />
        </Grid>

        <Grid item sx={{ width: '62%', zIndex: '1' }} className="cardAlign">
          {enable ? (
            <Fade in={enable}>
              <Grid
                item
                sx={{
                  ml: '1em',
                  margin: '0px',
                }}>
                <Grid
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    mr: '4em',
                  }}
                  className="cardInline">
                  {championsList.map((data: any, key: any) => {
                    return (
                      <Grid item key={data.id}>
                        <Card
                          onClick={() => {
                            SetIndex(data.id);
                            setEnable(!enable);
                            setSelectedKey(key as number);
                            // setSelectedService(data.id);
                          }}
                          sx={{
                            margin: '0px 18px 18px 0px',
                            borderRadius: '0.5em',
                          }}
                          className="cardOut">
                          <CardActionArea
                            sx={(theme) => ({
                              width: '241px',
                              height: '112px',
                              borderRadius: '0.5em',
                              justifyContent: 'center',
                              bgcolor: '#ebeff5',
                              boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
                              '&:hover': {
                                cursor: 'pointer',
                                bgcolor: theme.palette.primary.light,
                                color: theme.palette.primary.main,
                                img: {
                                  filter: ' brightness(0) invert(1)',
                                },
                              },
                            })}
                            className="cardView">
                            <Grid
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                              }}
                              className="cardSecu">
                              <Grid
                                item
                                sx={{
                                  padding: '5px 10px 5px 20px',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  height: 'fit-content',
                                }}>
                                {data.page_type == '1' ? (
                                  <img
                                    src={data.icon_image}
                                    alt="icon"
                                    width="54px"
                                  />
                                ) : (
                                  <img
                                    src="/default/image/subpageicon.png"
                                    alt="icon"
                                    width="54px"
                                  />
                                )}
                                {/* <img
                                  src={data.icon_image}
                                  alt="icon"
                                  width="54px"
                                /> */}
                                {/* <img src={devops} alt="icon" /> */}
                              </Grid>
                              <Grid
                                item
                                sx={{
                                  mx: '0.4em',
                                  my: '1em',
                                  maxWidth: '8em',
                                  alignSelf: 'center',
                                  fontSize: '14px',
                                  fontWeight: 600,
                                }}>
                                {data.name}
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Fade>
          ) : (
            <Grow in={!enable}>
              <Box>
                <Button
                  variant="text"
                  startIcon={<img src={gear_icon} alt="gear_icon" />}
                  color="error"
                  sx={{ margin: '35px 0px 19px 0px' }}
                  onClick={() => {
                    setEnable(!enable);
                  }}>
                  ALL SEO SERVICES
                </Button>

                <Card
                  sx={{
                    mx: '2em',
                    borderRadius: '0.5em',
                    mr: '16em',
                    ml: '5px',
                    // minHeight: '20em',
                    minWidth: '44rem',
                  }}
                  className="saasOper">
                  {championsList.map((data: any) => {
                    return (
                      <Box key={data.id}>
                        {index === (data.id as number) && (
                          <>
                            <Typography
                              sx={{ my: '1em', fontWeight: 600, mx: '2em' }}>
                              {data.name}
                            </Typography>
                            <Box
                              sx={{
                                mx: '2.4em',
                                mb: '2em',
                                fontWeight: 600,
                                height: 'auto',
                                minHeight: '260px',
                              }}
                              // style={{
                              //   backgroundImage: `url(${data.icon_image})`,
                              //   backgroundPosition: 'bottom right',
                              //   backgroundRepeat: 'no-repeat',
                              // }}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: data.short_description,
                                }}
                              />
                            </Box>
                            {data.icon_image !== null ? (
                              <Grid
                                style={{
                                  position: 'relative',
                                }}>
                                <img
                                  src={`${data.icon_image}`}
                                  alt="icon"
                                  style={{
                                    opacity: '0.3',
                                    width: '100px',
                                    position: 'absolute',
                                    top: '-70px',
                                    right: '50px',
                                  }}
                                />
                              </Grid>
                            ) : (
                              <Grid />
                            )}
                            {/* <Grid >
                              <img
                                src={`${data.icon_image}`}
                                alt="icon"
                                style={{
                                  opacity: '0.1',
                                  textAlign: 'right',
                                  marginRight: '1em',
                                }}
                              />
                            </Grid> */}

                            <Button
                              sx={(theme) => ({
                                // backgroundColor: 'red',
                                color: theme.palette.primary.light,
                                mx: '2.5em',
                                bottom: 10,
                                position: 'sticky',
                                fontWeight: 600,
                                mb: '30px',
                                '&:hover': {
                                  color: '#b80d0d',
                                },
                              })}
                              onClick={() => {
                                // data.url === '/mainframe' ||
                                // data.url === '/devops' ||
                                // data.url === '/saas-operations' ||
                                // data.url === '/software-tools-status'
                                //   ? navigate(data.url)
                                //   : data.url !== ''
                                //   ? window.open(data.url)
                                //   : navigate('/coming-soon');
                                data.is_link == '1'
                                  ? navigate(`/${data.slug}`)
                                  : window.open(`${data.link_page}`);
                              }}
                              variant="text">
                              Learn More ➜
                            </Button>
                          </>
                        )}
                      </Box>
                    );
                  })}
                </Card>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    my: '1em',
                    justifyContent: 'space-between',
                  }}
                  className="saasLeft">
                  <Grid item>
                    <Button
                      disabled={
                        championsList[selectedKey - 1] === undefined
                          ? true
                          : false
                      }
                      variant="text"
                      startIcon={<ArrowLeft />}
                      color="error"
                      onClick={() => {
                        // SetIndex(index);
                        setSelectedKey(selectedKey - 1);
                        SetIndex(championsList[selectedKey - 1].id);
                      }}>
                      {championsList[selectedKey - 1] === undefined
                        ? ''
                        : championsList[selectedKey - 1].name}
                      {/* {championsList[selectedService + 1].name} */}
                      {/* {championsList.map((res: any) => {
                        return res.id === 0
                          ? index !== 1
                            ? null
                            : 'DevOps'
                          : res.id === index - 1 && res.name;
                        // debugger;
                        // return index - 1 === 0
                        //   ? res.id === 1 && res.title
                        //   : res.id === index - 1 && res.title;
                      })} */}
                    </Button>
                  </Grid>
                  <Grid item sx={{ mr: '3em' }} className="platformLink">
                    <Button
                      disabled={
                        championsList[(selectedKey as number) + 1] === undefined
                          ? true
                          : false
                      }
                      onClick={() => {
                        setSelectedKey((selectedKey as number) + 1);
                        SetIndex(championsList[(selectedKey as number) + 1].id);
                        // if (index < championsList.length) {
                        //   SetIndex((index as number) + 1);
                        //   setEnable(false);
                        //   // setSelectedService((index as number) + 1);
                        // }
                      }}
                      variant="text"
                      endIcon={<ArrowRight />}
                      color="error">
                      {championsList[(selectedKey as number) + 1] === undefined
                        ? ''
                        : championsList[(selectedKey as number) + 1].name}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grow>
          )}
        </Grid>
      </Grid>

      {showLoader === true && (
        <div id="app-loader">
          <Bars
            height="80"
            width="80"
            color="rgb(204, 9, 47)"
            ariaLabel="bars-loading"
            wrapperClass=""
            visible={showLoader}
          />
        </div>
      )}
    </Box>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
  };
}

export default connect(mapDispatchToProps)(CardGrid);
