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
import InflationHome from "./inflation/InflationHome";
import InterestRate from "./interestRate/InterestRate";
import QuantitativeEasing from "./quantitative-easing/QuantitativeEasing";
// import CompoundInterestCalculator from "../../__reusable/tools/CompoundInterestCalculator";
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
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index } = props;
    return <>{value === index && <>{children}</>}</>;
  }
  return (
    <Box className={classes.container}>
      <Box className={classes.menuPanel}>
      <Typography variant="h5" className={classes.title}>
        Monetary Policy
      </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          TabIndicatorProps={{ style: { background: "white" } }}
        >
          <Tab className={classes.tab} label="Desk" />
          <Tab className={classes.tab} label="Interest Rate" />
          <Tab className={classes.tab} label="Inflation" />
          <Tab className={classes.tab} label="Quantitative Easing" />
          <Tab className={classes.tab} label="Forward Guidance" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper className={classes.paper}>
          <Box className={classes.box}>
            <Typography align="center" variant="h4">
              Desk
            </Typography>
            <Desk />
          </Box>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper className={classes.paper}>
          <Box className={classes.box}>
            <Typography align="center" variant="h4">
              Interest Rate
            </Typography>
            <InterestRate />
          </Box>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper className={classes.paper}>
          <Box className={classes.box}>
            <Typography align="center" variant="h4">
              Inflation
            </Typography>
            <InflationHome />
          </Box>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QuantitativeEasing />
      </TabPanel>
      <TabPanel value={value} index={4}>
        forward guidance
      </TabPanel>
    </Box>
  );
}
