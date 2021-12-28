import { useState } from "react";
import { connect } from "react-redux";
import encyclopedia from "./_encyclopedia";
import { SET_BANK_RATE } from "../../../state/actions";
import InterestCalculator from "../../../calculators/interest/interestClass";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  Legend,
} from "recharts";
import {
  Paper,
  Box,
  TextField,
  MenuItem,
  Button,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles(({ bankRate }) => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    height: "80vh",
    padding: "25px",
    margin: "auto",
    marginTop: "2rem",
    display: "flex",
    alignItems: "flex-start",
    overflowX: "hidden",
  },
  tooltip: {
    fontSize: "2rem",
  },
  form: {
    width: 300,
    // margin: "auto",
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
function InterestRate({ bankRate, submitBankRate }) {
  const classes = useStyles();
  const [formBankRate, setFormBankRate] = useState(0.25);
  const minBankRate = 0.01;
  const maxBankRate = 0.5;
  const step = 0.1;
  function handleChangeBankRate(e, value) {
    setFormBankRate(e.target.value);
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Tooltip title={encyclopedia.bankrate}>
          <Typography>Bank Rate: {bankRate}</Typography>
        </Tooltip>
        <TextField
          className={classes.textField}
          type="number"
          defaultValue={bankRate}
          placeholder={0.1}
          // label="Principal"
          onChange={handleChangeBankRate}
          inputProps={{ min: minBankRate, max: maxBankRate, step: { step } }}
        />
        <Button onClick={() => submitBankRate(formBankRate)}>submit</Button>
      </Paper>
    </>
  );
}
const mapStateToProps = (state) => {
  return { bankRate: state.bankRate };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  // const { bankRate } = ownProps;
  return {
    submitBankRate: (formBankRate) =>
      dispatch({ type: SET_BANK_RATE, payload: { bankRate: formBankRate } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InterestRate);
