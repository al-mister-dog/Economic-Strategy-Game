import Treasury from "./components/treasury/Treasury";
import "./App.css";

import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  nav: {
    background: "black",
    color: "white",
    boxShadow: "none"
  }
}))
function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <AppBar className={classes.nav} position="sticky">
        <Toolbar>
          <Typography variant="h6">Trial of the Pyx</Typography>
        </Toolbar>
      </AppBar>

      <Treasury />
    </div>
  );
}

export default App;
