import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./state/reducer";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/Theme";
import Navbar from "./components/nav/Navbar";

import SignIn from "./pages/auth/SignIn"

import Bloc from "./pages/Bloc";
import CentralBank from "./pages/CentralBank";
import Budget from "./components/treasury/BudgetPage/Budget";
import Performance from "./pages/Performance";

// import CpiWeightCalculator from "./components/__reusable/tools/CpiWeightCalculator"
import Treasury from "./pages/Treasury";
import MonetaryPolicy from "./components/central-bank/monetary-policy/__MonetaryPolicy";
import FinancialPolicy from "./components/central-bank/financial-policy/__FinancialPolicy";
import Regulation from "./components/central-bank/regulation/__Regulation";
import Reserves from "./components/central-bank/reserves/__Reserves";
import SignUp from "./pages/auth/SignUp";


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
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
            {/* <Route path="cpi" element={<CpiWeightCalculator />} /> */}
            <Route path="bloc" element={<Bloc />} />
            <Route path="central-bank" element={<CentralBank />}>
              <Route path="monetarypolicy" element={<MonetaryPolicy />} />
              <Route path="financialpolicy" element={<FinancialPolicy />} />
              <Route path="regulation" element={<Regulation />} />
              <Route path="reserves" element={<Reserves />} />
            </Route>
            <Route path="performance" element={<Performance />} />
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
