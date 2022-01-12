import { Box, makeStyles, Typography } from "@material-ui/core";
import encyclopedia from "../_encyclopedia";
import CpiPriceCalculator from "./CpiPriceCalculator";
import CpiWeightCalculator from "./CpiWeightCalculator";
import InflationChange from "./InflationChange";
import InflationRate from "./InflationRate";
import InflationSandBox from "./InflationSandBox";
const useStyles = makeStyles((theme) => ({
  textTitle: {
    padding: "25px",
    fontWeight: "bold",
    "@media (max-width: 620px)": {
      fontSize: "1.5rem",
    },
  },
  textSubHeading: {
    padding: "25px 0 25px 0",
    fontWeight: "bold",
    "@media (max-width: 620px)": {
      fontSize: "1.3rem",
    },
  },
  textIntro: {
    padding: "25px 0 25px 0",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
  textArticle: {
    padding: "25px 0 25px 0",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
  containerArticle: {
    padding: "0 6rem 0 6rem",
    "@media (max-width: 620px)": {
      padding: "0 1rem 0 1rem",
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
      <Box className={classes.containerArticle}>
        <Typography variant="h4" className={classes.textTitle}>
          Inflation
        </Typography>
        <hr></hr>
        <Typography align="justify" className={classes.textIntro}>
          {encyclopedia.inflationRate.textIntro}
        </Typography>
      </Box>

      <Box className={classes.box}>
        <Box
          className={classes.containerCharts}
          style={{ marginBottom: "25px" }}
        >
          <InflationChange />
          <InflationRate />
        </Box>
        <Box
          className={classes.containerCpiWeight}
          style={{ marginBottom: "25px" }}
        >


          <Box className={classes.containerArticle}>
            <Typography
            className={classes.textSubHeading}
            align="left"
              variant="h4"
            >
              Consumer Price Index
            </Typography>
            <Typography
              align="justify"
              className={classes.textArticle}
            >
              {encyclopedia.inflationRate.cpi}
            </Typography>
            <Typography
              className={classes.textSubHeading}
              align="left"
              variant="h5"
            >
              CPI Price
            </Typography>
            <Typography
              align="justify"
              className={classes.textArticle}
            >
              {encyclopedia.inflationRate.cpiPrice}
            </Typography>
          </Box>

          <CpiPriceCalculator />
          <Box className={classes.containerArticle}>
            <Typography
              className={classes.textSubHeading}
              align="left"
              variant="h5"
              style={{ marginTop: "25px" }}
            >
              CPI Weight
            </Typography>
            <Typography
              align="justify"
              className={classes.textArticle}
              style={{ marginBottom: "25px" }}
            >
              {encyclopedia.inflationRate.cpiWeight}
            </Typography>
          </Box>

          <CpiWeightCalculator />
        </Box>
        <Box>
          <Typography
            align="justify"
            className={classes.paragraphText}
            style={{ margin: "25px 0 25px 0", fontWeight: "bold" }}
          >
            Try adjusting the price changes and cpi weight and see the effect on
            the inflation rate and change in future years.
          </Typography>
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
