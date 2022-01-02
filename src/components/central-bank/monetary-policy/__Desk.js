import { connect } from "react-redux";
import encyclopedia from "./_encyclopedia";

import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

function Desk({
  bankRate,
  inflationRate,
  inflationTarget,
  quantitativeEasing,
  reserves,
}) {
  // const classes = useStyles();
  return (
    <>
      <Typography align="left">{encyclopedia.welcome}</Typography>
      <Typography variant="h4" align="left">
        Overview
      </Typography>
      <Typography variant="h5" align="left">
        Interest Rate: %{bankRate}
      </Typography>
      <Typography variant="h5" align="left">
        Inflation Rate: %{inflationRate}
      </Typography>
      <Typography variant="h5" align="left">
        Inflation Target: %{inflationTarget}
      </Typography>
      <Typography variant="h5" align="left">
        Quanitative Easing: £{quantitativeEasing}bn
      </Typography>
      <Typography variant="h5" align="left">
        Reserves: £{reserves}mn
      </Typography>
    </>

    //   </Box>
    // </Paper>
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
