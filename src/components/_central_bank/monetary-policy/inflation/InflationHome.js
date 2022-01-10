import { Paper, Box, makeStyles, Typography } from "@material-ui/core";
import encyclopedia from "../_encyclopedia";
import CpiWeightCalculator from "./CpiWeightCalculator";
import InflationChange from "./InflationChange";
import InflationRate from "./InflationRate";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 620px)": {
      width: "90%",

    },
  },
  containerCharts: {
    display: "flex",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    paddingBottom: "70px",
    "@media (max-width: 620px)": {
      flexDirection: "column",
    },
  },
  containerCpiWeight: {
    // marginTop: "30px",
    display: "flex",
    flexDirection: "column",
  },
  cpiWeightText: {
    "@media (max-width: 620px)": {
      padding: "5px",
      fontSize: "0.7rem"
    },
  }
}));
export default function InflationHome() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Typography align="left" variant="h4" style={{ marginBottom: "25px" }}>
          Inflation
        </Typography>
        <Box
          className={classes.containerCharts}
          style={{ marginBottom: "25px" }}
        >
          <InflationChange />
          <InflationRate />
        </Box>
        <Box className={classes.containerCpiWeight}>
          <Typography
            align="left"
            variant="h4"
            style={{ marginBottom: "25px" }}
          >
            CPI Weight
          </Typography>
          <Typography
            align="justify"
            variant="body"
            className={classes.cpiWeightText}
            style={{ marginBottom: "25px" }}
          >
            {encyclopedia.inflationRate.cpiWeight}
          </Typography>
          <CpiWeightCalculator />
        </Box>
      </Box>
    </>
  );
}
/**
 * show inflation rate over time
 * show cpi index
 * cpi index shows price change
 * toggle cpi index
 */
