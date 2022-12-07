const OktaJwtVerifier = require('@okta/jwt-verifier');

const config = require('../config/vars');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${config.okta.domain}/oauth2/${config.okta.authserverid}`,
});
module.exports = oktaJwtVerifier;
