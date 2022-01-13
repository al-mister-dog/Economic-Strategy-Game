import {
  SET_DEPARTMENT,
  SET_DEPARTMENT_OPERATION,
  SET_BANK_RATE,
  SET_CPI,
} from "./actions";
import initialStore from "./store";
import functions from "./functions";
function reducerDbWrapper(state, action) {
  if (action.type === SET_DEPARTMENT) {
    const newDepartment = action.payload.department;
    return { ...state, department: newDepartment };
  }
  if (action.type === SET_DEPARTMENT_OPERATION) {
    const newDepartmentOperation = action.payload.departmentOperation;
    return { ...state, departmentOperation: newDepartmentOperation };
  }
  if (action.type === SET_BANK_RATE) {
    const newBankRate = action.payload.bankRate;
    return { ...state, bankRate: newBankRate };
  }
  if (action.type === SET_CPI) {
    const newCpi = action.payload.cpi;
    const newInflationRate = functions.getInflationRate(newCpi);

    const lastYear = state.inflationByYear[state.inflationByYear.length -1];
    const newYear = lastYear.year + 1;
    const newRate = parseFloat(newInflationRate)
    const newChange = parseFloat(lastYear.rate.toFixed(2)) + newRate
    const newElement = {year: newYear, rate: newRate, change: newChange}

    return { ...state, cpi: newCpi, inflationRate: newInflationRate, inflationByYear: [...state.inflationByYear, newElement] };
  }
  return state;
}
function reducer(state = initialStore, action) {
  const reducedState = reducerDbWrapper(state, action)
  // fetch('', {
  //   state
  // })
  console.log('saving to database')
  return reducedState
}

export default reducer;
