export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_BANK_RATE = "SET_BANK_RATE";
export const SET_CPI = "SET_CPI";
export const SET_DEPARTMENT = "SET_DEPARTMENT"
export const SET_DEPARTMENT_OPERATION = "SET_DEPARTMENT_OPERATION"

export const loginUser = () => {
  return { type: LOGIN };
};

export const logoutUser = () => {
  return { type: LOGOUT };
};

export const setDepartment = () => {
  return { type: SET_DEPARTMENT };
};

export const setDepartmentOperation = () => {
  return { type: SET_DEPARTMENT_OPERATION };
};

export const setBankRate = () => {
  return { type: SET_BANK_RATE };
};

export const setCpi = () => {
  return { type: SET_CPI };
};


