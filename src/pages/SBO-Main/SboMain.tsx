import Carousel from 'components/Carousel';
import * as React from 'react';
// import { Container, Page } from '@mineral/core';
// import { Caraousel } from 'components/Caraousel/Caraousel';
import CardGrid from 'components/CardGrid';
// import CardGrid2 from 'components/CardGrid2';
// import Carousel from 'components/Caraousel/Carousel';
// import Banner1 from '../../Assets/Banner/SBO.png';
// import Banner2 from '../../Assets/Banner/Slide2.png';
// import Banner3 from '../../Assets/Banner/Slide3.png';
// import Banner4 from '../../Assets/Banner/Slide4.png';
// import Banner5 from '../../Assets/Banner/Slide5.png';
// import { useEffect, useState } from 'react';
// import { useOktaAuth } from '@okta/okta-react';
// import { useDispatch } from 'react-redux';
// import { isLoggedIn } from 'reducer';

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

const SboMainPage: React.FC = () => {
  // const { authState, oktaAuth } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState<any>(null);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!authState || !authState.isAuthenticated) {
  //     console.log('Main page IF');
  //     setUserInfo(null);
  //   } else {
  //     console.log('Main page Else');
  //     oktaAuth.getUser().then((info: any) => {
  //       // console.log('INFORMATION:', info);
  //       setUserInfo(info);
  //       dispatch(isLoggedIn(true));
  //       // window.location.reload();
  //     });
  //   }
  // }, [authState]);

  // console.log('UESRINFO4', userInfo);
  // useEffect(() => {
  //   if (!authState || !authState.isAuthenticated) {
  //     setUserInfo(null);
  //   } else {
  //     oktaAuth.getUser().then((info: any) => {
  //       setUserInfo(info);
  //       // window.location.reload();
  //       console.log(userInfo);
  //     });
  //   }
  // }, [oktaAuth]);

  // const [value, SetValue] = React.useState(0);
  // const indexCount = (index: number) => {
  //   SetValue(index);
  // };
  return (
    // <Page data-testid="settingsPage">
    //   <Box>
    //     <Caraousel
    //       height="100%"
    //       width="100%"
    //       total={carouselData.length}
    //       SetStatus={indexCount}
    //       autoscrolldelay={5000}>
    //       {value === 0 ? (
    //         <img
    //           src={Banner1}
    //           alt="c1"
    //           style={{ width: 'inherit', height: '100%' }}
    //         />
    //       ) : value === 1 ? (
    //         <img
    //           src={Banner2}
    //           alt="c2"
    //           style={{ width: 'inherit', height: '100%' }}
    //         />
    //       ) : value === 2 ? (
    //         <img
    //           src={Banner3}
    //           alt="c3"
    //           style={{ width: 'inherit', height: '100%' }}
    //         />
    //       ) : value === 3 ? (
    //         <img
    //           src={Banner4}
    //           alt="c4"
    //           style={{ width: 'inherit', height: '100%' }}
    //         />
    //       ) : (
    //         value === 4 && (
    //           <img
    //             src={Banner5}
    //             alt="c5"
    //             style={{ width: 'inherit', height: '100%' }}
    //           />
    //         )
    //       )}
    //     </Caraousel>
    //   </Box>
    //   <Container>
    //     <CardGrid />
    //   </Container>
    // </Page>
    <div>
      <Carousel
        data={undefined}
        onEdit={false}
        keys={undefined}
        values={undefined}
      />
      {/* <CardGrid2 /> */}
      <CardGrid />
    </div>
  );
};

export default SboMainPage;
