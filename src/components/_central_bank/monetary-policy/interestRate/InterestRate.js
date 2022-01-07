import { useState } from "react";
import { connect } from "react-redux";
import encyclopedia from "../_encyclopedia";
import Chart from "./Chart";
import { SET_BANK_RATE } from "../../../../state/actions";

import {
  Box,
  TextField,
  Button,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    height: "80vh",
    padding: "25px",
    margin: "auto",
    marginTop: "2rem",
    display: "flex",
    overflowX: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerInterestRate: {
    margin: "10px",
    marginTop: "20px",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    padding: "20px",
    display: "flex",
    "@media (max-width: 620px)": {
      margin: 0,
      flexDirection: "column",
      width: "100%"
    },
  },
  containerSetRate: {
    width: "30%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 620px)": {
      // width: "100vw",
    },
  },
  containerChart: {
    width: "70%",
    height: "30vh",
    marginLeft: "20px",
    "@media (max-width: 620px)": {
      height: "40vh",
      width: "100vw",
      marginLeft: "0px",
    },
  },
  tooltip: {
    fontSize: "2rem",
  },
  form: {
    width: 300,
    padding: 25,
  },
  textField: {
    width: 200,
    marginBottom: 10,
  },
  calculateBtn: {
    width: 200,
    marginTop: 25,
  },
}));
function InterestRate({
  bankRate,
  inflationRate,
  inflationTarget,
  submitBankRate,
}) {
  const classes = useStyles();
  const [formBankRate, setFormBankRate] = useState(0.25);
  const minBankRate = 0.01;
  const maxBankRate = 0.5;
  const step = 0.01;
  function handleChangeBankRate(e, value) {
    setFormBankRate(e.target.value);
  }

  return (
    <>
      {/* <Paper className={classes.paper}>
        <Box className={classes.container}>
        <Typography align="center" variant="h4">
              Interest Rate
            </Typography> */}
          <Typography align="left">
            {encyclopedia.interestRate.objective}
          </Typography>
          <Box className={classes.containerInterestRate}>
            <Box className={classes.containerSetRate}>
              <Tooltip align="left" title={<h3>{encyclopedia.interestRate.bankrate}</h3>}>
                <Typography>Bank Rate: %{bankRate}</Typography>
              </Tooltip>
              <Tooltip
                align="left" title={<h3>{encyclopedia.interestRate.inflationRate}</h3>}
              >
                <Typography>Inflation Rate: %{inflationRate}</Typography>
              </Tooltip>
              <Tooltip
                align="left" title={<h3>{encyclopedia.interestRate.inflationTarget}</h3>}
              >
                <Typography>Inflation Target: %{inflationTarget}</Typography>
              </Tooltip>
              <TextField
                className={classes.textField}
                type="number"
                defaultValue={bankRate}
                placeholder={0.1}
                label="Change Bank Rate"
                onChange={handleChangeBankRate}
                inputProps={{
                  min: minBankRate,
                  max: maxBankRate,
                  step: { step },
                }}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => submitBankRate(formBankRate)}
              >
                submit
              </Button>
            </Box>
            <Box className={classes.containerChart}>
              <Chart />
            </Box>
          </Box>
        {/* </Box>
      </Paper> */}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    bankRate: state.bankRate,
    inflationRate: state.inflationRate,
    inflationTarget: state.inflationTarget,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  // const { bankRate } = ownProps;
  return {
    submitBankRate: (formBankRate) =>
      dispatch({ type: SET_BANK_RATE, payload: { bankRate: formBankRate } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InterestRate);
