import {
  SET_DEPARTMENT,
  SET_DEPARTMENT_OPERATION,
  SET_BANK_RATE,
  SET_CPI,
} from "./actions";
import initialStore from "./store";
import functions from "./functions";

function reducer(state = initialStore, action) {
  if (action.type === SET_DEPARTMENT) {
    const newDepartment = action.payload.department;
    console.log(state.department)
    return { ...state, department: newDepartment };
  }
  if (action.type === SET_DEPARTMENT_OPERATION) {
    const newDepartmentOperation = action.payload.departmentOperation;
    console.log(state.department)
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

export default reducer;
