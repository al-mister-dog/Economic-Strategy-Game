import { connect } from "react-redux"
import {
  Paper,
  makeStyles,
} from "@material-ui/core";

import { Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    margin: "auto",
    marginTop: "6rem",
    padding: "25px",
    "@media (max-width: 620px)": {
      width: "95vw",
      padding: "5px",
      marginTop: "4rem",
    },
  },
}));
function CentralBank() {

  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Outlet/>
    </Paper>
  );
}

export default connect()(CentralBank)