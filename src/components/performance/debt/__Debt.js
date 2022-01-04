import { useState } from "react";
import {
  Paper,
  Box,
  Tabs,
  Tab,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Desk from "./__Desk";
import DebtToGdp from "../../__reusable/maps/components/DebtToGdp";
import InteractiveMap from "../../__reusable/maps/components/InteractiveMap"
// import InflationHome from "./inflation/InflationHome";
// import InterestRate from "./interestRate/InterestRate";
// import QuantitativeEasing from "./QuantitativeEasing";
// import CompoundInterestCalculator from "../../__reusable/tools/CompoundInterestCalculator";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
  },
  title: {
    overflow: "hidden",
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
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Debt
      </Typography>
      <Paper className={classes.paper}>
        <Box className={classes.box}>
          {/* <DebtToGdp /> */}
          <InteractiveMap />
        </Box>
      </Paper>
    </Box>
  );
}
