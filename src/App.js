import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./state/reducer";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/Theme";
import Navbar from "./components/nav/Navbar";

import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";

import CentralBank from "./pages/CentralBank";
import MonetaryPolicy from "./components/_central_bank/monetary-policy/__MonetaryPolicy";
import MonetaryPolicyDesk from "./components/_central_bank/monetary-policy/__Desk";
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
import Overview from "./components/_bloc/Overview";
import BlocTrade from "./components/_bloc/Trade";
import Alliance from "./components/_bloc/Alliance";
import InterestRate from "./components/_central_bank/monetary-policy/interestRate/InterestRate";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="bloc" element={<Bloc />}>
              <Route index element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="trade" element={<BlocTrade />} />
              <Route path="alliance" element={<Alliance />} />
            </Route>
            <Route path="centralbank" element={<CentralBank />}>
              <Route path="monetarypolicy" element={<MonetaryPolicy />}>
                <Route index element={<MonetaryPolicyDesk />} />
                <Route path="desk" element={<MonetaryPolicyDesk />} />
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
      </ThemeProvider>
    </Provider>
  );
}

export default App;
