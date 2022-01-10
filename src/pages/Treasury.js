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
    marginTop: "7rem",
    padding: "25px",
    "@media (max-width: 620px)": {
      width: "95vw",
      padding: "5px",
      marginTop: "4rem",
    },
  },
}));
export default function Treasury() {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Outlet/>
    </Paper>
  );
}
