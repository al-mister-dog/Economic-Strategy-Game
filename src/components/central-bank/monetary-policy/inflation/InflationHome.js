import { Paper, Box, makeStyles, Typography } from "@material-ui/core";
import encyclopedia from "../_encyclopedia";
import CpiWeightCalculator from "./CpiWeightCalculator";
import InflationChange from "./InflationChange";
import InflationRate from "./InflationRate";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    margin: "auto",
    marginTop: "2rem",
    display: "flex",
    alignItems: "flex-start",
    padding: "20px",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  containerCharts: {
    display: "flex",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    paddingBottom: "70px"
  },
  containerCpiWeight: {
    // marginTop: "30px",
    display: "flex",
    flexDirection: "column"
  }
}));
export default function CentralBank() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Box className={classes.box}>
        <Typography align="center" variant="h4">
              Inflation
            </Typography>
          <Box className={classes.containerCharts}>
            <InflationChange />
            <InflationRate />
          </Box>
          <Box className={classes.containerCpiWeight}>
            <Typography align="left" variant="h4">
              CPI Weight
            </Typography>
            <Typography align="left" variant="body">
              {encyclopedia.inflationRate.cpiWeight}
            </Typography>
            <CpiWeightCalculator />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
/**
 * show inflation rate over time
 * show cpi index
 * cpi index shows price change
 * toggle cpi index
 */
