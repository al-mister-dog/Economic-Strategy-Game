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
  box: {
    width: "100%",
    overflowX: "hidden",
    // "@media (max-width: 620px)": {
    //   width: "50px"
    // }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  objective: {
        "@media (max-width: 620px)": {
     fontSize: "0.8rem"
    }
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
      
    },
  },
  containerSetRate: {
    width: "30%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 620px)": {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  containerChart: {
    width: "70%",
    height: "30vh",
    marginLeft: "20px",
    "@media (max-width: 620px)": {
      height: "40vh",
      width: "100%",
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
    "@media (max-width: 620px)": {
      width: "45%",
     }
  },
  submitBtn: {
    width: 200,
    marginTop: 25,
    "@media (max-width: 620px)": {
      fontSize: "0.6rem",
      width: "45%",
      margin: "10px 0 10px 0",
     }
  },
  setRateText: {
        "@media (max-width: 620px)": {
     fontSize: "0.7rem",
     marginBottom: "10px"
    }
  }
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
      <Box>
        <Typography align="left" variant="h4" style={{marginBottom: "25px"}}>
          Interest Rate
        </Typography>
        <Typography align="justify" style={{marginBottom: "25px"}} className={classes.objective}>
          {encyclopedia.interestRate.objective}
        </Typography>
        <Box className={classes.containerInterestRate}>
          <Box className={classes.containerSetRate}>
            <Tooltip
              align="left"
              title={<h3>{encyclopedia.interestRate.bankrate}</h3>}
            >
              <Typography className={classes.setRateText}>Bank Rate: %{bankRate}</Typography>
            </Tooltip>
            <Tooltip
              align="left"
              title={<h3>{encyclopedia.interestRate.inflationRate}</h3>}
            >
              <Typography className={classes.setRateText}>Inflation Rate: %{inflationRate}</Typography>
            </Tooltip>
            <Tooltip
              align="left"
              title={<h3>{encyclopedia.interestRate.inflationTarget}</h3>}
            >
              <Typography className={classes.setRateText}>Inflation Target: %{inflationTarget}</Typography>
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
            className={classes.submitBtn}
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
      </Box>
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
