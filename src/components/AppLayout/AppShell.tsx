import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import {
  AppShell as MineralAppShell,
  AppShellProps,
  styled,
} from '@mineral/core';
import SboAppBar from './AppBar';
import Footer from './AppFooter';
import LoginPortal from 'pages/admin/Login/LoginPortal';
// import SoftwaresTools from '../SoftwareTools/SoftwaresTools';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import { connect } from 'react-redux';

const AppShell: React.FC<AppShellProps> = (props: any) => {
  const StyledAppShell = styled(MineralAppShell)(() => ({
    flexDirection: 'column',
  }));

  if (!props.isLoggedIn) {
    return <LoginPortal />;
    // return <SoftwaresTools />;
  } else {
    // console.log('Group', props?.userGroup);
    // console.log('Group length', props.userGroup?.length);
    if (props.userGroup?.length < 1 && window.location.href.includes('admin')) {
      return (
        <>
          <Helmet
            titleTemplate="%s | SEO Broadcom"
            defaultTitle="SEO Broadcom"
          />
          <StyledAppShell
            appBar={<SboAppBar />}
            footer={<Footer />}
            sx={{
              '& .css-xzpouq-MnrlAppShell-toolbar': {
                minHeight: '0px',
              },
              '& .MuiContainer-root': {
                padding: 0,
              },
            }}>
            <ErrorPage error={undefined} />
          </StyledAppShell>
        </>
      );
    } else {
      return (
        <>
          <Helmet
            titleTemplate="%s | SEO Broadcom"
            defaultTitle="SEO Broadcom"
          />
          <StyledAppShell
            appBar={<SboAppBar />}
            footer={<Footer />}
            sx={{
              '& .css-xzpouq-MnrlAppShell-toolbar': {
                minHeight: '0px',
              },
              '& .MuiContainer-root': {
                padding: 0,
              },
            }}>
            <Outlet />
          </StyledAppShell>
        </>
      );
    }
  }

  // else {
  //   // console.log(oktaAuth);

  //   if (props.userGroup?.length !== 1) {
  //     return (
  //       <>
  //         <Helmet
  //           titleTemplate="%s | SEO Broadcom"
  //           defaultTitle="SEO Broadcom"
  //         />
  //         <StyledAppShell
  //           appBar={<SboAppBar />}
  //           footer={<Footer />}
  //           sx={{
  //             '& .css-xzpouq-MnrlAppShell-toolbar': {
  //               minHeight: '0px',
  //             },
  //             '& .MuiContainer-root': {
  //               padding: 0,
  //             },
  //           }}>
  //           <Outlet />
  //         </StyledAppShell>
  //       </>
  //     );
  //   } else {
  //     if (
  //       props?.userGroup?.length === 1 &&
  //       window.location.href.includes('admin')
  //     ) {
  //       return (
  //         <>
  //           <Helmet
  //             titleTemplate="%s | SEO Broadcom"
  //             defaultTitle="SEO Broadcom"
  //           />
  //           <StyledAppShell
  //             appBar={<SboAppBar />}
  //             footer={<Footer />}
  //             sx={{
  //               '& .css-xzpouq-MnrlAppShell-toolbar': {
  //                 minHeight: '0px',
  //               },
  //               '& .MuiContainer-root': {
  //                 padding: 0,
  //               },
  //             }}>
  //             <ErrorPage error={undefined} />
  //           </StyledAppShell>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <Helmet
  //             titleTemplate="%s | SEO Broadcom"
  //             defaultTitle="SEO Broadcom"
  //           />
  //           <StyledAppShell
  //             appBar={<SboAppBar />}
  //             footer={<Footer />}
  //             sx={{
  //               '& .css-xzpouq-MnrlAppShell-toolbar': {
  //                 minHeight: '0px',
  //               },
  //               '& .MuiContainer-root': {
  //                 padding: 0,
  //               },
  //             }}>
  //             <Outlet />
  //           </StyledAppShell>
  //         </>
  //       );
  //     }
  // }
  // }
};

function mapDispatchToProps(state: any) {
  return {
    isLoggedIn: state.isLoggedIn,
    userGroup: state.userGroup,
  };
}

export default connect(mapDispatchToProps)(AppShell);
