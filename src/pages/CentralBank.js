import { useState } from "react";
import InterestCalculator from "../calculators/keepers/interestClass";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    width: 300,
    margin: "auto",

    padding: 25,
  },
  textField: {
    width: 200,
  },
}));
export default function CentralBank() {
  const classes = useStyles();

  const [principal, setPrincipal] = useState("1000");
  const [interestRate, setInterestRate] = useState("0.05");
  const [inflationRate, setInflationRate] = useState("0.02");
  const [years, setYears] = useState("10");

  const [graphResult, setGraphResult] = useState([]);

  function handleChangePrincipal(e) {
    setPrincipal(e.target.value);
  }
  function handleChangeInterestRate(e) {
    setInterestRate(e.target.value);
  }
  function handleChangeInflationRate(e) {
    setInflationRate(e.target.value);
  }
  function handleChangeYears(e) {
    setYears(e.target.value);
  }

  function getCompoundInterest() {
    let numPrincipal = parseFloat(principal);
    let numInterestRate = parseFloat(interestRate);
    let numInflationRate = parseFloat(inflationRate);
    let numYears = parseFloat(years);

    const futures = new InterestCalculator(
      numPrincipal,
      numInterestRate,
      numInflationRate,
      numYears
    );
    const eachYear = Array.from({ length: years }, (_, i) => i + 2020);
    const compoundRealInterest = futures.getRealCompoundInterestPercent();
    const compoundInterest = futures.getCompoundInterestPercent();
    const graphData = eachYear.map((_, index) => {
      return {
        year: eachYear[index],
        "real interest": parseFloat(compoundRealInterest[index]),
        interest: parseFloat(compoundInterest[index]),
      };
    });
    console.log(graphData);
    setGraphResult(graphData);
  }
  return (
    <>
      <h1>Central Bank</h1>
      <Box
        sx={{
          width: 300,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          className={classes.textField}
          type="number"
          placeholder={principal}
          label="principal"
          onChange={handleChangePrincipal}
          inputProps={{ min: 0 }}
        />
        <TextField
          className={classes.textField}
          type="number"
          placeholder={interestRate}
          label="interest rate (%)"
          onChange={handleChangeInterestRate}
          inputProps={{ min: -100, max: 100 }}
        />
        <TextField
          className={classes.textField}
          type="number"
          placeholder={inflationRate}
          label="inflation rate (%)"
          onChange={handleChangeInflationRate}
          inputProps={{ min: -100, max: 100 }}
        />
        <TextField
          className={classes.textField}
          type="number"
          placeholder={years}
          label="years"
          onChange={handleChangeYears}
          inputProps={{ min: 1, max: 10 }}
        />
        <Button onClick={getCompoundInterest}>Calculate</Button>
      </Box>
      <Box sx={{ height: 600, width: 600, margin: "auto" }}>
        <ResponsiveContainer width="93%" height="80%">
          <LineChart data={graphResult}>
            <CartesianGrid strokeDasharray="3 3" strokeWidth={2} />
            <XAxis dataKey="year" strokeWidth={2} />
            <YAxis
              type="number"
              domain={["dataMin", "dataMax"]}
              strokeWidth={2}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              // animationDuration={duration}
              dataKey="real interest"
              stroke="red"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              // animationDuration={duration}
              dataKey="interest"
              stroke="blue"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
}
