import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/Theme";
import Navbar from "./components/nav/Navbar";
import Bloc from "./pages/Bloc";
import CentralBank from "./pages/CentralBank";
import Performance from "./pages/Performance";
import Treasury from "./pages/Treasury";
import MonetaryPolicy from "./components/central-bank/MonetaryPolicy";
import FinancialPolicy from "./components/central-bank/FinancialPolicy";
import Regulation from "./components/central-bank/Regulation"
import Reserves from "./components/central-bank/Reserves"
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="bloc" element={<Bloc />} />
            <Route path="central-bank" element={<CentralBank />}>
              <Route path="monetarypolicy" element={<MonetaryPolicy />} />
              <Route path="financialpolicy" element={<FinancialPolicy />} />
              <Route path="regulation" element={<Regulation />} />
              <Route path="reserves" element={<Reserves />} />
            </Route>
            <Route path="performance" element={<Performance />} />
            <Route path="treasury" element={<Treasury />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
