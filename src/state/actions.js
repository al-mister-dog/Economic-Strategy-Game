export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_BANK_RATE = "SET_BANK_RATE";

export const loginUser = () => {
  return { type: LOGIN };
};

export const logoutUser = () => {
  return { type: LOGOUT };
};

export const setBankRate = () => {
  return { type: SET_BANK_RATE };
};
