import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Bloc from "./pages/Bloc";
import CentralBank from "./pages/CentralBank";
import Performance from "./pages/Performance";
import Treasury from "./pages/Treasury";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/bloc" element={<Bloc />} />
          <Route path="/central-bank" element={<CentralBank />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/treasury" element={<Treasury />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
