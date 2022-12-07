/* eslint-disable no-debugger, no-console */
import axios from 'axios';
// import { OktaAuth } from '@okta/okta-auth-js';

// export const oktaAuthConfig = {
//   issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/${process.env.REACT_APP_OKTA_DOMAIN_SLUG}`,
//   clientId: `${process.env.REACT_APP_CLIENT_ID}`,
//   redirectUri: `${process.env.REACT_APP_OKTA_REDIRECT_URI}`,
//   scopes: ['openid', 'profile', 'email'],
//   pkce: true,
// };

// const { authState, authClient }: any = new OktaAuth(oktaAuthConfig);

// const { authState, authClient }: any = new OktaAuth(oktaAuthConfig);

// if (authState || authState?.isAuthenticated) {
//   console.log('iNin ======> ', authState);
// }

// console.log('From: interceptor', authClient);

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${authClient?.getAccessToken()}`,
  },
});

AxiosInstance.interceptors.request.use((config) => {
  return config;
});

export default AxiosInstance;
