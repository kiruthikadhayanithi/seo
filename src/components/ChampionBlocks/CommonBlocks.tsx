import React from 'react';
import { Typography } from '@mineral/core';
import { Divider, Grid, Stack } from '@mui/material';
import '../../styles/pages/champions-template.css';
// import bg_image from '../../Assets/Static/devops-bg.svg';

type LinkProps = {
  data: any;
};

const CommonBlocks: React.FC<LinkProps> = (props: any) => {
  return (
    <div>
      {props.data.show_header === true &&
      props.data.block_name !== 'Overview' ? (
        <div
          style={{
            background: props.data.card === 1 ? '#f5f7fa' : 'transparent',
            padding: '15px 0px',
            border: props.data.card === 1 ? '1px solid #C6C6C6' : '0px solid',
            borderRadius: '4px',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
            }}>
            <div
              style={{
                background: '#CE0930',
                borderRadius: '90px',
                width: '45px',
                height: '45px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}>
              <img
                src={
                  props.data.block_icon === null
                    ? null
                    : props.data.block_icon.includes('fakepath')
                    ? null
                    : require(`../../Assets/Static/${props.data.block_icon}`)
                }
                alt="no_image"
                style={{ zoom: '0.8' }}
              />
            </div>
            <div>
              <Typography
                variant="h4"
                style={{ padding: '0px 15px', color: '#000' }}>
                {props.data.block_name}
              </Typography>
            </div>
          </div>
          <Divider style={{ margin: '10px' }} />{' '}
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.block_detial,
            }}
          />
        </div>
      ) : props.data.block_name === 'Overview' ? (
        <div
          style={{
            background:
              props.data.card === 1 ? 'rgb(250, 251, 254)' : 'transparent',
            padding: '15px',
            border:
              props.data.card === 1
                ? '1px solid rgb(221, 227, 237)'
                : '0px solid',
            borderRadius: '10px',
            boxShadow:
              props.data.card === 1
                ? 'rgb(0 0 0 / 25%) 4px 8px 7px -2px'
                : 'none',
          }}>
          {props.data.show_header === true && (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                }}>
                <div
                  style={{
                    background: '#CE0930',
                    borderRadius: '90px',
                    width: '45px',
                    height: '45px',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <img
                    src={require(`../../Assets/Static/features.svg`).default}
                    alt="no_image"
                    style={{ zoom: '0.8' }}
                  />
                </div>
                <div>
                  <Typography
                    variant="h4"
                    style={{ padding: '0px 15px', color: '#000' }}>
                    {props.data.block_name}
                  </Typography>
                </div>
              </div>
              <Divider style={{ margin: '10px' }} />{' '}
            </>
          )}
          {/* <div
            style={{
              backgroundImage: `url(${props.data.block_icon})`,
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              height: 'auto',
            }}>
            {props.data.block_detial && (
              <div style={{ padding: '0px 0px', width: '80%' }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.data.block_detial,
                  }}
                />
              </div>
            )}
          </div> */}
          <Grid>
            <Stack direction="row">
              <Grid item sm={10}>
                {props.data.block_detial && (
                  // <div style={{ padding: '0px 0px', width: '80%' }}>
                  <div style={{ padding: '0px 0px' }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.data.block_detial,
                      }}
                    />
                  </div>
                )}
              </Grid>
              <Grid item sm={2} sx={{ mt: '10px' }}>
                {props.data.block_icon !== null ? (
                  <img
                    src={props.data.block_icon}
                    alt="overview_bg"
                    width="auto"
                    height="100px"
                  />
                ) : (
                  <div />
                )}
              </Grid>
            </Stack>
          </Grid>
        </div>
      ) : (
        props.data.block_detial && (
          <div style={{ padding: '0px 0px' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.block_detial,
              }}
            />
          </div>
        )
      )}

      {/* <div
        style={{
          backgroundImage: `url(${props.data.block_icon})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          height: 'auto',
        }}>
        {props.data.block_detial && (
          <div style={{ padding: '0px 15px' }}>
            <Typography variant="h5" style={{ color: '#CE0930' }}>
              {' '}
              {props.data.block_detial}
            </Typography>
          </div>
        )}
        {props.data.items === null ? (
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.block_detial,
            }}
          />
        ) : (
          <div>
            <Grid
              container
              spacing={2}
              style={{ margin: '0px', padding: '0px 0px' }}
              className="useLinks">
              {props.data.description && (
                <Grid item xs={12}>
                  <Typography variant="h4" style={{ padding: '0px' }}>
                    {props.data.description}
                  </Typography>
                </Grid>
              )}
              {props.data.items.map((data: any, id: number) => (
                <Grid
                  item
                  sm={12}
                  xs={12}
                  key={id}
                  lg={data.layout}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  />
                </Grid>
              ))}

            </Grid>
            <Grid
              container
              spacing={2}
              style={{ marginTop: '0px', padding: '0px 15px' }}>
              {props.data.others.map((data: any, id: number) => (
                <Grid xs={3} key={id}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      border: '1px solid #C6C6C6',
                      height: '60px',
                      margin: '5px',
                      padding: '10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}>
                    <div>
                      <img src={data.icon} alt="no_image" />
                    </div>
                    <div
                      style={{
                        padding: '0px 10px',
                        fontWeight: 600,
                        fontSize: '16px',
                      }}>
                      {data.name}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CommonBlocks;
