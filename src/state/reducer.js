import { SET_BANK_RATE, SET_CPI } from "./actions";
import initialStore from "./store";
import functions from "./functions"


function reducer(state = initialStore, action) {
  if (action.type === SET_BANK_RATE) {
    const newBankRate = action.payload.bankRate;
    return { ...state, bankRate: newBankRate };
  }
  if (action.type === SET_CPI) {
    const newCpi = action.payload.cpi;
    const newInflationRate = functions.getInflationRate(newCpi)
    return { ...state, cpi: newCpi, inflationRate: newInflationRate}
  }
  return state;
}

export default reducer;
