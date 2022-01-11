import { Box, makeStyles, Typography } from "@material-ui/core";
import encyclopedia from "../_encyclopedia";
import CpiPriceCalculator from "./CpiPriceCalculator";
import CpiWeightCalculator from "./CpiWeightCalculator";
import InflationChange from "./InflationChange";
import InflationRate from "./InflationRate";
import InflationSandBox from "./InflationSandBox"
const useStyles = makeStyles((theme) => ({
  titleText: {
    padding: "25px",
  },
  introductoryText: {
    padding: "25px 0 25px 0",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
  paragraphText: {
    fontSize: "1rem",
    "@media (max-width: 620px)": {
      padding: "5px",
      fontSize: "0.7rem",
    },
  },
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
}));
export default function InflationHome() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" align="left" className={classes.title}>
        Inflation
      </Typography>
      <hr></hr>
      <Typography align="justify" className={classes.introductoryText}>
        {encyclopedia.inflationRate.introductoryText}
      </Typography>
      <Box className={classes.box}>
        <Box
          className={classes.containerCharts}
          style={{ marginBottom: "25px" }}
        >
          <InflationChange />
          <InflationRate />
        </Box>
        <Box className={classes.containerCpiWeight} style={{marginBottom: "25px"}}>
        <Typography
            align="left"
            variant="h4"
            style={{ marginBottom: "25px" }}
          >
            Consumer Price Index
          </Typography>
          <Typography
            align="justify"
            variant="body"
            className={classes.paragraphText}
            style={{ marginBottom: "25px" }}
          >
            {encyclopedia.inflationRate.cpi}
          </Typography>
        <Typography
            align="left"
            variant="h5"
            style={{ marginBottom: "25px" }}
          >
            CPI Price
          </Typography>
          <Typography
            align="justify"
            variant="body"
            className={classes.paragraphText}
            style={{ marginBottom: "25px" }}
          >
            {encyclopedia.inflationRate.cpiPrice}
          </Typography>
          <CpiPriceCalculator />
          <Typography
            align="left"
            variant="h5"
            style={{ margin: "25px 0 25px 0" }}
          >
            CPI Weight
          </Typography>
          <Typography
            align="justify"
            variant="body"
            className={classes.paragraphText}
            style={{ marginBottom: "25px" }}
          >
            {encyclopedia.inflationRate.cpiWeight}
          </Typography>
          <CpiWeightCalculator />
        </Box>
        <Box>
          <Typography align="justify" className={classes.paragraphText} style={{ margin: "25px 0 25px 0" }}>Try adjusting the price changes and cpi weight and see the effect on the inflation rate and change in future years.</Typography>
        <InflationSandBox />
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
