import Treasury from "./components/treasury/Treasury";
import "./App.css";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar color="white" position="static">
        <Toolbar>
          <Typography variant="h6">Trial of the Pyx</Typography>
        </Toolbar>
      </AppBar>

      <Treasury />
    </div>
  );
}

export default App;
