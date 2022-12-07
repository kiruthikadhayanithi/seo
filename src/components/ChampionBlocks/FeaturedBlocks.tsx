import React from 'react';
import { Divider, Typography } from '@mineral/core';
import { Grid } from '@mui/material';
// import '../../Assets/styles/CommonTemplate.css';

type FeaturedProps = {
  data: any;
};

const FeaturedBlocks: React.FC<FeaturedProps> = (props: any) => {
  // useEffect(() => {
  // const toggleButton = document.querySelectorAll('.toggle-button');
  // const showMoreElement = document.querySelectorAll('.more-less');
  // toggleButton.forEach((element) => {
  //   const keyValue = element.className.includes('cab') ? 'Agenda' : 'Summary';
  //   element.innerHTML = `${keyValue} ▼`;
  //   element.addEventListener('click', function (event: any) {
  //     const key = event.target.className.split(' ');
  //     if (event.target.textContent === `${keyValue} ▼`) {
  //       const showall = document.querySelectorAll<HTMLElement>(
  //         `.${key[1]}${event.target.id}`
  //       );
  //       showall.forEach((item) => {
  //         item.style.display = 'revert';
  //       });
  //       element.innerHTML = `${keyValue} ▲`;
  //     } else {
  //       const showall = document.querySelectorAll<HTMLElement>(
  //         `.${key[1]}${event.target.id}`
  //       );
  //       showall.forEach((item) => {
  //         item.style.display = 'none';
  //       });
  //       element.innerHTML = `${keyValue} ▼`;
  //     }
  //   });
  // });
  // showMoreElement.forEach((element) => {
  //   element.innerHTML = 'Show More ▼';
  //   element.addEventListener('click', function (event: any) {
  //     if (event.target.textContent === 'Show More ▼') {
  //       const showall = document.querySelectorAll<HTMLElement>(
  //         `.table${event.target.id}`
  //       );
  //       showall.forEach((item) => {
  //         item.style.display = 'revert';
  //       });
  //       element.innerHTML = 'Show Less ▲';
  //     } else {
  //       const showall = document.querySelectorAll<HTMLElement>(
  //         `.table${event.target.id}`
  //       );
  //       showall.forEach((item) => {
  //         item.style.display = 'none';
  //       });
  //       element.innerHTML = 'Show More ▼';
  //     }
  //   });
  // });
  // }, []);

  const sortedData = props.data.block_detial_json;
  sortedData.sort((previous: any, next: any) => {
    return previous.block_detial_json_order - next.block_detial_json_order;
  });

  return (
    <Grid container spacing={2}>
      {sortedData.map((element: any, index: any) => (
        <Grid
          item
          sm={
            element.block_detial_json_layout_size &&
            element.block_detial_json_layout_size.toString() === '1'
              ? 12
              : 6
          }
          key={index}>
          <div
            style={{
              border:
                element.block_detial_json_card &&
                element.block_detial_json_card.toString() === '1'
                  ? '1px solid #DDE3ED'
                  : '0px solid',
              boxShadow:
                element.block_detial_json_card &&
                element.block_detial_json_card.toString() === '1'
                  ? '4px 8px 7px -2px rgba(0, 0, 0, 0.25)'
                  : 'none',
              borderRadius: '10px',
              background:
                element.block_detial_json_card &&
                element.block_detial_json_card.toString() === '1'
                  ? '#FAFBFE'
                  : 'transparent',
              marginBottom:
                element.block_detial_json_card &&
                element.block_detial_json_card.toString() === '1'
                  ? '30px'
                  : '0px',
            }}>
            <div>
              {element.block_detial_json_show_header === true && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding:
                      element.block_detial_json_card &&
                      element.block_detial_json_card.toString() === '1'
                        ? '15px'
                        : '0px 15px',
                  }}>
                  {element.block_detial_json_icon !== '' &&
                  element.block_detial_json_icon !== null ? (
                    <div
                      style={{
                        background: '#CE0930',
                        borderRadius: '90px',
                        minWidth: '45px',
                        height: '45px',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                      {element.block_detial_json_icon !== '' &&
                      element.block_detial_json_icon !== null ? (
                        <img
                          // src={require(`../../Assets/Static/features.svg`).default}
                          src={element.block_detial_json_icon}
                          alt="no_image"
                          style={{ zoom: '0.8', width: '39px', height: '39px' }}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  ) : (
                    ''
                  )}
                  <div>
                    <Typography
                      variant="h4"
                      style={{ padding: '0px 15px', color: '#000' }}>
                      {element.block_detial_json_name}
                    </Typography>
                  </div>
                </div>
              )}
              {element.block_detial_json_show_header === true && (
                <Divider
                  style={{
                    margin:
                      element.block_detial_json_card &&
                      element.block_detial_json_card.toString() === '1'
                        ? '0px'
                        : '10px',
                  }}
                />
              )}

              <div
                style={{
                  padding:
                    element.block_detial_json_show_header === true
                      ? '10px'
                      : '0px 10px',
                }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: element.block_detial_json_description,
                  }}
                />
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedBlocks;
