import React, { useEffect, useState } from 'react';
import { Button } from '@mineral/core';
import back from '../../Assets/Mainframe/back.svg';
import { CircularProgress, Grid } from '@mui/material';
// import {
//   DevopsData,
//   MainframeData,
//   SaasOperationData,
//   SampleGetResponse,
// } from '../../utils/Data';
import { useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import '../../styles/pages/champions-template.css';
// import Overview from 'components/ChampionsTemplate/Overview';
import Videos from 'components/ChampionBlocks/VideosBlock';
import TopBanner from 'components/ChampionBlocks/BannerBlock';
// import FeaturedBlocks from 'components/ChampionsTemplate/FeaturedBlocks';
import CommonBlocks from 'components/ChampionBlocks/CommonBlocks';
import FeaturedBlocks from 'components/ChampionBlocks/FeaturedBlocks';
import Env from 'utils/Services/Env';
import { ErrorBoundary } from 'components/ErrorPage/ErrorBoundary';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { isLoggedIn, userToken } from 'reducer/action';

interface DataProps {
  data: any;
}

const ChampionsTemplate: React.FC<DataProps> = (props: any) => {
  const { oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();
  const script = document.createElement('script');
  const navigate = useNavigate();
  const [champions, setChampions] = useState<any>(null);
  const [showLoader, setshowLoader] = useState<boolean>(true);

  useEffect(() => {
    if (props.data === undefined) {
      getChampionDetails();
    } else {
      setChampions(props.data);
      setTimeout(() => {
        script.innerHTML = props.data.script_dynamic;
        document.head.appendChild(script);
        setshowLoader(false);
      }, 2000);
    }
  }, []);

  const getChampionDetails = () => {
    const id = window.location.pathname.includes('admin')
      ? window.location.pathname.split('/')[2]
      : window.location.pathname.split('/')[1];
    const getData: any = Env.get(`champion/slug/${id}`, props.userToken);
    getData.then(
      (response: any) => {
        const data = response.data.data;
        data.blocks.sort((previous: any, next: any) => {
          return previous.block_order - next.block_order;
        });
        setChampions(data);
        setTimeout(() => {
          script.innerHTML = data.script_dynamic;
          document.head.appendChild(script);
        });
      },
      (error: any) => {
        console.error(error);
        if (error.response.status == 401) {
          oktaAuth.signOut();
          dispatch(isLoggedIn(false));
          dispatch(userToken(undefined));
        } else {
          navigate('/not-found');
        }
      }
    );
    setshowLoader(false);
  };
  // window.location.pathname === '/devops'
  //   ? SampleGetResponse
  //   : window.location.pathname === '/mainframe'
  //   ? MainframeData
  //   : window.location.pathname === '/saas-operations'
  //   ? SaasOperationData
  //   : navigate('/');
  return (
    <div style={{ minHeight: '800px' }}>
      {champions !== null ? (
        <div>
          <TopBanner data={champions} />
          <div
            style={{ width: '1200px', margin: '20px auto' }}
            className="devopsPlat">
            <Grid container spacing={4} style={{ marginTop: '-25px' }}>
              {!window.location.pathname.includes('admin') && (
                <Grid item xs={12}>
                  <Button
                    size="medium"
                    style={{ color: '#CE0930', border: '1px solid #C8D1E0' }}
                    onClick={() => navigate('/')}>
                    {/* onClick={() => (window.location.href = '/')}> */}
                    <img
                      src={back}
                      style={{ width: '20px', height: 'auto' }}
                      alt="no_image"
                    />
                    <span style={{ fontSize: '13px', padding: '0px 5px' }}>
                      Go Back to SEO Areas
                    </span>
                  </Button>
                </Grid>
              )}
              {champions !== null ? (
                champions?.blocks
                  .filter((element: any) => element.status === true)
                  .map((item: any, index: any) => (
                    <React.Fragment key={index}>
                      {item.block_name !== 'Banner' && (
                        <Grid
                          item
                          lg={item.layout_size.toString() === '1' ? 12 : 6}
                          xs={12}>
                          {item.block_name === 'Videos' ? (
                            item.block_detial_json !== null &&
                            item.block_detial_json !== '' && (
                              <Videos data={item} />
                            )
                          ) : item.block_name === 'Features' ? (
                            item.block_detial_json !== null &&
                            item.block_detial_json !== '' && (
                              <FeaturedBlocks data={item} />
                            )
                          ) : (
                            <CommonBlocks data={item} />
                          )}
                        </Grid>
                      )}
                    </React.Fragment>
                  ))
              ) : (
                <Grid
                  item
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40em',
                  }}
                  xs={12}>
                  <CircularProgress color="secondary" />
                </Grid>
              )}
            </Grid>
            {!window.location.pathname.includes('admin') && (
              <div style={{ marginTop: '25px' }}>
                <Button
                  size="medium"
                  style={{ color: '#CE0930', border: '1px solid #C8D1E0' }}
                  onClick={() => navigate('/')}>
                  {/* onClick={() => (window.location.href = '/')}> */}
                  <img
                    src={back}
                    style={{ width: '20px', height: 'auto' }}
                    alt="no_image"
                  />
                  <span style={{ fontSize: '13px', padding: '0px 5px' }}>
                    Go Back to SEO Areas
                  </span>
                </Button>
              </div>
            )}
          </div>
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
        </div>
      ) : (
        <ErrorBoundary />
      )}
    </div>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
  };
}

export default connect(mapDispatchToProps)(ChampionsTemplate);
