import { connect } from "react-redux";
import { Link } from "react-router-dom";
import encyclopedia from "./_encyclopedia";

import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerOverview: {
    marginTop: "25px",
    padding: "25px",
    display: "flex",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    justifyContent: "space-between",
    "@media (max-width: 620px)": {
      padding: "10px",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  overviewItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 620px)": {
      flexDirection: "row",
      marginBottom: "5px",
    },
  },
  overviewItemNumber: {
    "@media (max-width: 620px)": {
      marginLeft: "15px",
    },
  },
}));

function Desk({
  bankRate,
  inflationRate,
  inflationTarget,
  quantitativeEasing,
  reserves,
}) {
  const classes = useStyles();
  const overviewItems = [
    {
      text: "Interest Rate",
      number: `%${bankRate}`,
      path: "interest",
    },
    {
      text: "Inflation Rate",
      number: `%${inflationRate}`,
      path: "inflation",
    },
    {
      text: "Inflation Target",
      number: `%${inflationTarget}`,
      path: "inflation",
    },
    {
      text: "Quantitative Easing",
      number: `${quantitativeEasing}bn`,
      path: "quantitativeeasing",
    },
    {
      text: "Reserves",
      number: `${reserves}mn`,
      path: "reserves",
    },
  ];
  return (
    <>
      <Typography variant="h4" align="left" style={{ marginBottom: "25px" }}>
        Desk: Monetary Policy
      </Typography>
      <hr></hr>
      <Typography align="left" style={{ marginTop: "25px" }}>
        {encyclopedia.welcome}
      </Typography>
      <Box className={classes.containerOverview}>
        {overviewItems.map((item) => {
          const { text, number, path } = item;
          return (
            <Box className={classes.overviewItem}>
              <Link to={path} style={{textDecoration: "none", color: "black"}}>
                <Typography
                  variant="body1"
                  align="left"
                  style={{ fontWeight: "bold" }}
                >
                  {text}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  className={classes.overviewItemNumber}
                >
                  {number}
                </Typography>
              </Link>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  const {
    bankRate,
    inflationRate,
    inflationTarget,
    quantitativeEasing,
    reserves,
  } = state;
  return {
    bankRate,
    inflationRate,
    inflationTarget,
    quantitativeEasing,
    reserves,
  };
};
export default connect(mapStateToProps)(Desk);
