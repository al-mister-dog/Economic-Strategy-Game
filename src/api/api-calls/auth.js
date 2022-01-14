import host from "../servers";
import setOptions from "../options";
export const hostUrl = host;

const auth = {
  login(options) {
    return fetch(`${host}/api/v1/auth/login`, setOptions(options));
  },

  signup(options) {
    return fetch(`${host}/api/v1/user/signup`, setOptions(options));
  },

  removeToken(options) {
    return fetch(`${host}/api/v1/auth/token/remove-token`, setOptions(options));
  },

  checkToken(tokenString) {
    return fetch(`${host}/api/v1/auth/get-token/?token=${tokenString}`);
  },
};

export default auth;