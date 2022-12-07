import * as React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AppShell from '../../components/AppLayout/AppShell';
import ChampionsTemplate from '../../pages/ChampionsTemplate';
import NotFoundPage from '../../components/ErrorPage/NotFound';
import ChampionsList from '../../pages/admin/Champions';
import ChampionsForm from '../../pages/admin/Champions/Form';
import BannersList from '../../pages/admin/Banners';
import BannerForm from '../../pages/admin/Banners/Form';
import SoftwaresTools from '../SoftwareTools/SoftwaresTools';
import Default from '../../pages/admin/Dashboard/Dashboard';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import ReleaseManagement from '../../pages/new/ReleaseManagement';
import ReleaseGovernance from '../../pages/new/ReleaseGovernance';
import SEOTeam from 'pages/new/SEOTeam';
// import Loginpage from 'pages/new/Loginpage';
// import PublicRouter from './PublicRouter';
// import Loginpage from 'pages/new/Loginpage';
// import PublicRouter from './PublicRouter';
// import PublicRouter from './PubilcRouter';
// import Loginpage from 'pages/admin/Login/Loginpage';
// import LoginPortal from 'pages/admin/Login/LoginPortal';
// import PrivateRouter from './PrivateRouter';
// import SboAppBar from './SBOAppBar/SboAppBar';
// import Footer from './Footer';
// import PublicRouter from './PubilcRouter';
// import LoginPortal from 'pages/admin/Login/LoginPortal';
import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginCallback } from '@okta/okta-react';
import { useDispatch } from 'react-redux';
import VersionStandardization from 'pages/new/VersionStandariztion';
import { isLoggedIn, userGroup, userToken } from '../../reducer/action';
import CreateWalkthrough from 'pages/new/CreateWalkthrough';
import DeliveryChecklist from 'pages/new/DeliveryChecklist';
// import PublicRouter from './PubilcRouter';
// import {RequiredAuth} from './SecureRouter'
const SearchResultsPage = React.lazy(
  () => import('../../pages/SearchResultsPage/SearchResultsPage')
);

const MainPage = React.lazy(() => import('../../pages/SBO-Main'));

export const oktaAuthConfig = {
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/${process.env.REACT_APP_OKTA_DOMAIN_SLUG}`,
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  redirectUri: `${process.env.REACT_APP_OKTA_REDIRECT_URI}`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

const oktaAuth = new OktaAuth(oktaAuthConfig);

export const Router: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const restoreOriginalUri = React.useCallback(
    (_oktaAuth: OktaAuth, originalUri: string) => {
      history(originalUri);
      const groups: any = [];
      const isAuthenticated: any = _oktaAuth
        .isAuthenticated()
        .then((info: any) => info);
      // console.log('isAuthenticated router', isAuthenticated);
      if (isAuthenticated) {
        dispatch(isLoggedIn(isAuthenticated));
        dispatch(userToken(oktaAuth.getAccessToken()));
        const promise: any = _oktaAuth.getUser();
        promise.then((info: any) => {
          // console.log('userInfo from router', info);
          info.groups.forEach((element: any) => {
            if (element.includes('OM_SEO_')) {
              groups.push(element);
            }
          });
          dispatch(userGroup(groups));
        });
      }
    },

    [history]
  );

  return (
    <React.Suspense fallback={null}>
      <Security
        oktaAuth={oktaAuth}
        // onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<MainPage />} />
          </Route>

          {/* <Route element={<AppShell />}>
            <Route path="/login" element={<LoginPortal />} />
          </Route> */}

          <Route element={<AppShell />}>
            <Route
              path="/:id"
              element={<ChampionsTemplate data={undefined} />}
            />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/coming-soon" element={<NotFoundPage />} />
          </Route>

          {/* <Route element={<AppShell />}> */}
          <Route path="/login/callback" element={<LoginCallback />} />
          {/* </Route> */}
          <Route path="/search" element={<AppShell />}>
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/search/*" element={<Navigate to="/" />} />
          </Route>
          <Route element={<AppShell />}>
            <Route path="/admin/dashboard" element={<Default />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/admin/champions" element={<ChampionsList />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/admin/banners" element={<BannersList />} />
          </Route>
          <Route element={<AppShell />}>
            <Route path="/admin/champions/add" element={<ChampionsForm />} />
          </Route>
          <Route element={<AppShell />}>
            <Route
              path="/admin/champions/edit/:id"
              element={<ChampionsForm />}
            />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/admin/banners/add" element={<BannerForm />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/admin/banners/edit/:id" element={<BannerForm />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/software-tools-status" element={<SoftwaresTools />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/release-management" element={<ReleaseManagement />} />
          </Route>

          <Route element={<AppShell />}>
            <Route
              path="/version-standardization"
              element={<VersionStandardization />}
            />
          </Route>

          <Route element={<AppShell />}>
            <Route
              path="/governance-management"
              element={<ReleaseGovernance />}
            />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/create-walkthrough" element={<CreateWalkthrough />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/delivery-checklist" element={<DeliveryChecklist />} />
          </Route>

          <Route element={<AppShell />}>
            <Route path="/seo-team" element={<SEOTeam />} />
          </Route>

          <Route element={<AppShell />}>
            <Route
              path="/not-found"
              element={<ErrorPage error={undefined} />}
            />
          </Route>

          <Route element={<AppShell />}>
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Route>
        </Routes>
      </Security>
    </React.Suspense>
  );
};
