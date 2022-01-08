import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";

import CentralBank from "./pages/CentralBank";
import MonetaryPolicy from "./components/_central_bank/monetary-policy/__MonetaryPolicy";
import DeskMonetaryPolicy from "./components/_central_bank/monetary-policy/__Desk";
import Inflation from "./components/_central_bank/monetary-policy/inflation/InflationHome";
import FinancialPolicy from "./components/_central_bank/financial-policy/__FinancialPolicy";
import Regulation from "./components/_central_bank/regulation/__Regulation";
import Reserves from "./components/_central_bank/reserves/__Reserves";

import Treasury from "./pages/Treasury";
import Budget from "./components/_treasury/BudgetPage/Budget";

import Performance from "./pages/Performance";
import BalanceOfPayments from "./components/_performance/BalanceOfPayments";
import GovernmentFinance from "./components/_performance/GovernmentFinance";
import Monetary from "./components/_performance/Monetary";
import NationalAccounts from "./components/_performance/NationalAccounts";
import People from "./components/_performance/People";
import Trade from "./components/_performance/Trade";

import Bloc from "./pages/Bloc";
import OverviewBloc from "./components/_bloc/Overview";
import BlocTrade from "./components/_bloc/Trade";
import Alliance from "./components/_bloc/Alliance";
import InterestRate from "./components/_central_bank/monetary-policy/interestRate/InterestRate";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="bloc" element={<Bloc />}>
          <Route index element={<OverviewBloc />} />
          <Route path="overview" element={<OverviewBloc />} />
          <Route path="trade" element={<BlocTrade />} />
          <Route path="alliance" element={<Alliance />} />
        </Route>
        <Route path="centralbank" element={<CentralBank />}>
          <Route path="monetarypolicy" element={<MonetaryPolicy />}>
            <Route index element={<DeskMonetaryPolicy />} />
            <Route path="desk" element={<DeskMonetaryPolicy />} />
            <Route path="inflation" element={<Inflation />} />
            <Route path="interest" element={<InterestRate />} />
          </Route>
          <Route path="financialpolicy" element={<FinancialPolicy />} />
          <Route path="regulation" element={<Regulation />} />
          <Route path="reserves" element={<Reserves />} />
        </Route>
        <Route path="performance" element={<Performance />}>
          <Route path="balanceofpayments" element={<BalanceOfPayments />} />
          <Route path="governmentfinance" element={<GovernmentFinance />} />
          <Route path="monetary" element={<Monetary />} />
          <Route path="nationalaccounts" element={<NationalAccounts />} />
          <Route path="people" element={<People />} />
          <Route path="trade" element={<Trade />} />
        </Route>
        <Route path="treasury" element={<Treasury />}>
          <Route path="budget" element={<Budget />} />
        </Route>
      </Routes>
    </Router>
  );
}
