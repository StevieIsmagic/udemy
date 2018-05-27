import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "stevieismagic.auth0.com",
    clientID: "jDIMZ00yit24AtkyWkZZORP9LzgWIilG",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://stevieismagic.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.strin
      }
    })
  }

  isAuthenticated() {

  }
}