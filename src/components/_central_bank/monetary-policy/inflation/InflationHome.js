import { Paper, Box, makeStyles, Typography } from "@material-ui/core";
import encyclopedia from "../_encyclopedia";
import CpiWeightCalculator from "./CpiWeightCalculator";
import InflationChange from "./InflationChange";
import InflationRate from "./InflationRate";

const useStyles = makeStyles((theme) => ({
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
  containerCharts: {
    display: "flex",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    paddingBottom: "70px",
  },
  containerCpiWeight: {
    // marginTop: "30px",
    display: "flex",
    flexDirection: "column",
  },
}));
export default function InflationHome() {
  const classes = useStyles();
  return (
    <>
        <Typography align="left" variant="h4" style={{marginBottom: "25px"}}>
          Inflation
        </Typography>
      <Box className={classes.containerCharts} style={{marginBottom: "25px"}}>
        <InflationChange />
        <InflationRate />
      </Box>
      <Box className={classes.containerCpiWeight}>
        <Typography align="left" variant="h4" style={{marginBottom: "25px"}}>
          CPI Weight
        </Typography>
        <Typography align="left" variant="body" style={{marginBottom: "25px"}}>
          {encyclopedia.inflationRate.cpiWeight}
        </Typography>
        <CpiWeightCalculator />
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
