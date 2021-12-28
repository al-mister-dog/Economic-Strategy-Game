import { useState } from "react";
import encyclopedia from "./_encyclopedia";
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

const useStyles = makeStyles(() => ({
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
export default function CentralBank() {
  const classes = useStyles();
  const [bankRate, setBankRate] = useState(0.25);
  const minBankRate = 0.01;
  const maxBankRate = 0.5;
  const step = 0.1;
  function handleChangeBankRate(e, value) {
    setBankRate(e.target.value);
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Tooltip title={encyclopedia.bankrate}>
          <Typography>Bank Rate</Typography>
        </Tooltip>
        <TextField
          className={classes.textField}
          type="number"
          defaultValue={bankRate}
          placeholder={0.1}
          // label="Principal"
          onChange={handleChangeBankRate}
          inputProps={{ min: minBankRate, max: maxBankRate, step: {step} }}
        />
      </Paper>
    </>
  );
}
