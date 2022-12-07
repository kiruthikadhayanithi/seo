import React from 'react';
import previous from '../../Assets/Mainframe/prev.svg';
import next from '../../Assets/Mainframe/nex.svg';
// import video_icon from '../../Assets/Mainframe/video-icon.svg';
// import ReactPlayer from 'react-player';
import AliceCarousel from 'react-alice-carousel';
import '../../styles/pages/champions-template.css';
import { Typography } from '@mineral/core';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Divider, Grid } from '@mui/material';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

type VideoProps = {
  data: any;
};

const VideosBlock: React.FC<VideoProps> = (props: any) => {
  const decodeURL = (url: any) => {
    if (url.includes('youtube')) {
      return url.replace('watch?v=', 'embed/');
    } else if (url.includes('drive.google')) {
      return url.replace('view', 'preview');
    } else {
      return url;
    }
  };

  return (
    <Grid item xs={12}>
      <div
        style={{
          background: props.data.card === 1 ? '#f5f7fa' : 'transparent',
          padding: '15px',
          border: props.data.card === 1 ? '1px solid #C6C6C6' : '0px solid',
          borderRadius: '4px',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <div
            style={{
              background: '#CE0930',
              borderRadius: '90px',
              width: 'auto',
              height: 'auto',
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
              style={{ width: '45px' }}
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
        <Divider style={{ margin: '10px' }} />
        <div
          style={{
            paddingTop: '10px',
            marginLeft: '40px',
            marginRight: '40px',
          }}>
          <AliceCarousel
            renderPrevButton={() => {
              return (
                <span
                  style={{
                    background: '#e2e2e2',
                    padding: '5px 8px',
                    borderRadius: '90px',
                    cursor: 'pointer',
                  }}>
                  <img
                    src={previous}
                    alt="no_image"
                    style={{
                      width: '10px',
                      margin: '0px 0px -1px -2px',
                    }}
                  />
                </span>
              );
            }}
            renderNextButton={() => {
              return (
                <span
                  style={{
                    background: '#e2e2e2',
                    padding: '5px 8px',
                    borderRadius: '90px',
                    cursor: 'pointer',
                  }}>
                  <img
                    src={next}
                    alt="no_image"
                    style={{
                      width: '10px',
                      margin: '0px -2px -1px 0px',
                    }}
                  />
                </span>
              );
            }}
            mouseTracking
            items={props.data.block_detial_json.map((ele: any) => (
              <div
                key={ele.block_detial_json_id}
                style={{
                  textAlign: 'center',
                  borderRadius: '10px',
                  padding: '10px',
                }}>
                {ele.block_detial_json_type.toString() === '2' ? (
                  <video controls width="100%" height="220px">
                    <source src={ele.block_detial_json_file} />
                    <track
                      src={ele.block_detial_json_file}
                      kind="captions"
                      label="english_captions"
                    />
                  </video>
                ) : (
                  <iframe
                    src={decodeURL(ele.block_detial_json_url)}
                    width="100%"
                    height="220px"
                    title="video"
                    style={{ borderRadius: '10px' }}
                  />
                )}
              </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
            touchTracking={false}
          />
        </div>
      </div>
    </Grid>
  );
};

export default VideosBlock;
