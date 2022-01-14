import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

import PerformanceMapChart from "../__reusable/maps/components/MapChart";

const useStyles = makeStyles(() => ({
  title: {
    overflow: "hidden",
    "@media (max-width: 620px)": {
      fontSize: "1.7rem",
    },
  },
}));

function BalanceOfPayments({ countries, keysData }) {
  const classes = useStyles();
  const keys = keysData.balanceOfPayments;
  return (
    <>
      <Typography variant="h4" align="left" className={classes.title}>
        Balance of Payments
      </Typography>

      <PerformanceMapChart countries={countries} keys={keys} />
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.countriesData,
    keysData: ownProps.keysData,
    inflationTarget: state.inflationTarget,
  };
};

export default connect(mapStateToProps)(BalanceOfPayments);
