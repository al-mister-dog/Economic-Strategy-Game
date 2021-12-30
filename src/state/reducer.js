import { SET_BANK_RATE, SET_CPI } from "./actions";

import initialStore from "./store";
function reducer(state = initialStore, action) {
  if (action.type === SET_BANK_RATE) {
    const newBankRate = action.payload.bankRate;
    return { ...state, bankRate: newBankRate };
  }
  if (action.type === SET_CPI) {
    const newCpi = action.payload.cpi;
    return { ...state, cpi: newCpi}
  }
  return state;
}

export default reducer;
