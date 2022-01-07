// import { useState } from "react";
import {
  Paper,
  Box,
  Tabs,
  Tab,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import { Outlet } from "react-router-dom";
// import Desk from "./__Desk";
// import InflationHome from "./inflation/InflationHome";
// import InterestRate from "./interestRate/InterestRate";
// import QuantitativeEasing from "./quantitative-easing/QuantitativeEasing";
// // import CompoundInterestCalculator from "../../__reusable/tools/CompoundInterestCalculator";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    overflowX: "hidden",
  },
  menuPanel: {
    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: theme.palette.common.lightSecondary,
    color: "white"
  },
  title: {
    overflow: "hidden",
    marginLeft: "25px",
    marginRight: "25px",
    "@media (max-width: 620px)": {
      fontSize: "1.7rem",
    },
  },
  tab: {
    "@media (max-width: 620px)": {
      width: "0.5rem",
      fontSize: "0.4rem",
    },
  },
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    margin: "auto",
    marginTop: "2rem",
    padding: "25px",
    "@media (max-width: 620px)": {
      width: "100vw",
      padding: "5px",
    },
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));
export default function MonetaryPolicy() {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Outlet/>
    </Paper>
  );
}
