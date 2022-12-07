// import React from 'react';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Env from 'utils/Services/Env';
// import Banner1 from '../../Assets/Banner/SBO.png';
// import Banner2 from '../../Assets/Banner/Slide2.png';
// import Banner3 from '../../Assets/Banner/Slide3.png';
// import Banner4 from '../../Assets/Banner/Slide4.png';
// import Banner5 from '../../Assets/Banner/Slide5.png';
import '../../styles/pages/home-page.css';
import banner_image from '../../Assets/Banners/home.png';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { isLoggedIn, userToken } from 'reducer/action';

type BannerProps = {
  data: any;
  onEdit: boolean;
  keys: any;
  values: any;
};

// const carouselData = [
//   {
//     id: 1,
//     image: Banner1,
//     alt: 'c1',
//   },
//   {
//     id: 2,
//     image: Banner2,
//     alt: 'c2',
//   },
//   {
//     id: 3,
//     image: Banner3,
//     alt: 'c3',
//   },
//   {
//     id: 4,
//     image: Banner4,
//     alt: 'c4',
//   },
//   {
//     id: 5,
//     image: Banner5,
//     alt: 'c5',
//   },
// ];

const Carousel: React.FC<BannerProps> = (props: any) => {
  const [banners, setBanner] = useState<any>([]);
  const { oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    props.onEdit === false ? getBannerDetails() : setBanner(props.data);
  }, []);

  const getBannerDetails = () => {
    // const getData = Env.get(`banner?page_size=10&status=1`);
    const getData = Env.get(`banner?today=true`, props.userToken);
    getData.then(
      (response: any): void => {
        const data = response.data.homebanner;
        data.sort((previous: any, next: any) => {
          return previous.order_number - next.order_number;
        });
        setBanner(data);
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

  const getDynamicContents = (content: any) => {
    console.log('content', content);
    const apiKeys = props.keys;
    const apiValues = props.values;
    console.log('apiKeys', apiKeys);
    console.log('apiValues', apiValues);

    const size = apiKeys.length;
    if (size != undefined && size != '') {
      apiKeys.forEach((element: any, index: any) => {
        if (content.indexOf(element) != -1) {
          content = content.replaceAll(element, apiValues[index]);
        }
      });
    }

    return content;
  };

  return (
    <div>
      {props.data === undefined ? (
        <div className="carousel-block">
          <AliceCarousel
            autoPlay
            autoPlayInterval={3000}
            disableButtonsControls
            disableSlideInfo
            infinite>
            {banners.map((item: any, index: any) => (
              <div key={index}>
                {item.banner_type.toString() === '1' ||
                item.banner_type.toString() === '2' ? (
                  <div
                    style={{
                      backgroundImage: `url(${item.background_image})`,
                      // background: 'grey',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}>
                    <div
                      id="banner-content"
                      style={{
                        width: '1200px',
                        margin: 'auto',
                        minHeight: '365px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: props.onEdit === true ? '0px 25px' : '0px',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
                  </div>
                ) : (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${item.background_image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      minHeight: '365px',
                      height: '365px',
                    }}
                  />
                )}
              </div>

              // <img
              //   src={item.image}
              //   key={index}
              //   alt={item.alt}
              //   className="carousel-images"
              // />
            ))}
          </AliceCarousel>
        </div>
      ) : (
        <div className="carousel-block">
          <div style={{ fontSize: '22px', fontWeight: 600 }}>Preview</div>
          <AliceCarousel
            autoPlay={false}
            autoPlayInterval={3000}
            disableButtonsControls
            disableSlideInfo
            infinite>
            {props.data?.map((item: any, index: any) => (
              <div key={index}>
                {/* eslint-disable */}
                {item.banner_type.toString() === '1' || '2' ? (
                  <div
                    style={{
                      backgroundImage: `url(${item.background_image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}>
                    <div
                      id="banner-content"
                      style={{
                        width: '1200px',
                        margin: 'auto',
                        minHeight: '365px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0px 25px',
                        background:
                          item.background_image === ''
                            ? 'lightgrey'
                            : 'transparent',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: getDynamicContents(item.content),
                      }}
                    />
                  </div>
                ) : (
                  <div
                    key={index}
                    style={{
                      backgroundImage:
                        item.background_image !== null
                          ? `url(${item.background_image})`
                          : `url(${banner_image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      minHeight: '365px',
                      height: '365px',
                    }}
                  />
                )}
              </div>

              // <img
              //   src={item.image}
              //   key={index}
              //   alt={item.alt}
              //   className="carousel-images"
              // />
            ))}
          </AliceCarousel>
        </div>
      )}
    </div>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
  };
}

export default connect(mapDispatchToProps)(Carousel);
