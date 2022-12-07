import { OktaAuth } from '@okta/okta-auth-js';

export const oktaAuthConfig = {
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/${process.env.REACT_APP_OKTA_DOMAIN_SLUG}`,
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  redirectUri: `${process.env.REACT_APP_OKTA_REDIRECT_URI}`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

const authClient = new OktaAuth(oktaAuthConfig);

console.log('From: auth init ********** ', authClient);

const ss = authClient.getAccessToken();

console.log('From: auth ++ ******* ', ss);

class Authentication {
  isAutheticated() {
    return localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  }
}

const Auth = new Authentication();

export default Auth;
