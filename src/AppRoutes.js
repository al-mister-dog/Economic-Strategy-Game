import { connect } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SET_DEPARTMENT, SET_DEPARTMENT_OPERATION } from "./state/actions";

import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import NotFound from "./pages/NotFound"
import User from "./pages/User"

import CentralBank from "./pages/CentralBank";
import OverviewCentralBank from "./components/_central_bank/Overview";
import MonetaryPolicy from "./components/_central_bank/monetary-policy/__MonetaryPolicy";
import DeskMonetaryPolicy from "./components/_central_bank/monetary-policy/__Desk";
import Inflation from "./components/_central_bank/monetary-policy/inflation/InflationHome";
import FinancialPolicy from "./components/_central_bank/financial-policy/__FinancialPolicy";
import Regulation from "./components/_central_bank/regulation/__Regulation";
import Reserves from "./components/_central_bank/reserves/__Reserves";
import QuantitativeEasing from "./components/_central_bank/monetary-policy/quantitative-easing/QuantitativeEasing"

import Treasury from "./pages/Treasury";
import OverviewTreasury from "./components/_treasury/Overview";
import Budget from "./components/_treasury/Budget/Budget";
import Balances from "./components/_treasury/balances/Balances"

import Performance from "./pages/Performance";
import OverviewPerformance from "./components/_performance/Overview";
import BalanceOfPayments from "./components/_performance/BalanceOfPayments";
import GovernmentFinance from "./components/_performance/GovernmentFinance";
import Monetary from "./components/_performance/Monetary";
import NationalAccounts from "./components/_performance/NationalAccounts";
import People from "./components/_performance/People";
import Trade from "./components/_performance/Trade";
import keysData from "../src/data/performance"

import Bloc from "./pages/Bloc";
import OverviewBloc from "./components/_bloc/Overview";
import BlocTrade from "./components/_bloc/Trade";
import Alliance from "./components/_bloc/Alliance";
import InterestRate from "./components/_central_bank/monetary-policy/interestRate/InterestRate";
import ForwardGuidance from "./components/_central_bank/monetary-policy/forward_guidance/forwardGuidance";

function AppRoutes({ departments, setDepartment, setDepartmentOperation }) {
  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      let segments = location.pathname
        .split("/")
        .filter((segment) => segment !== "");

      if (segments.length === 0) {
        setDepartment("");
      }
      if (segments.length === 1) {
        let department = departments.find((d) => d.path === segments[0]);
        setDepartment(department);
        setDepartmentOperation("");
      }

      if (segments.length > 1) {
        let department = departments.find((d) => d.path === segments[0]);
        console.log(department);
        let departmentOperation = department.menuItems.find(
          (dOp) => dOp.path === segments[1]
        );
        setDepartment(department);
        setDepartmentOperation(departmentOperation);
      }
    }, [location]);
  }
  const loggedin = false;
  usePageViews();
  return (
    <Routes>
      {loggedin ? (
        <Route index element={<LogIn />} />
      ) : (
        <Route index element={<SignUp />} />
      )}
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="User" element={<User/>}>
        
      </Route>
      <Route path="bloc" element={<Bloc />}>
        <Route index element={<OverviewBloc />} />
        <Route path="overview" element={<OverviewBloc />} />
        <Route path="trade" element={<BlocTrade />} />
        <Route path="alliance" element={<Alliance />} />
      </Route>
      <Route path="centralbank" element={<CentralBank />}>
        <Route index element={<OverviewCentralBank />} />
        <Route path="overview" element={<OverviewCentralBank />} />
        <Route path="monetarypolicy" element={<MonetaryPolicy />}>
          <Route index element={<DeskMonetaryPolicy />} />
          <Route path="desk" element={<DeskMonetaryPolicy />} />
          <Route path="inflation" element={<Inflation />} />
          <Route path="interest" element={<InterestRate />} />
          <Route path="quantitativeeasing" element={<QuantitativeEasing />} />
          <Route path="forwardguidance" element={<ForwardGuidance />} />
        </Route>
        <Route path="financialpolicy" element={<FinancialPolicy />} />
        <Route path="regulation" element={<Regulation />} />
        <Route path="reserves" element={<Reserves />} />
      </Route>
      <Route path="performance" element={<Performance />}>
        <Route index element={<OverviewPerformance />} />
        <Route path="overview" element={<OverviewPerformance />} />
        <Route path="balanceofpayments" element={<BalanceOfPayments keysData={keysData}/>} />
        <Route path="governmentfinance" element={<GovernmentFinance keysData={keysData}/>} />
        <Route path="monetary" element={<Monetary keysData={keysData}/>} />
        <Route path="nationalaccounts" element={<NationalAccounts keysData={keysData}/>} />
        <Route path="people" element={<People keysData={keysData}/>} />
        <Route path="trade" element={<Trade keysData={keysData}/>} />
      </Route>
      <Route path="treasury" element={<Treasury />}>
        <Route index element={<OverviewTreasury />} />
        <Route path="overview" element={<OverviewTreasury />} />
        <Route path="budget" element={<Budget />} />
        <Route path="balances" element={<Balances />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    department: state.department,
    departmentOperation: state.departmentOperation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDepartment: (department) =>
      dispatch({
        type: SET_DEPARTMENT,
        payload: { department },
      }),
    setDepartmentOperation: (departmentOperation) =>
      dispatch({
        type: SET_DEPARTMENT_OPERATION,
        payload: { departmentOperation },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
