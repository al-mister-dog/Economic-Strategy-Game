import { useState } from "react";
import InterestCalculator from "../../../../calculators/interest/interestClass";
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
import {
  Paper,
  Box,
  TextField,
  MenuItem,
  Button,
  makeStyles,
  Typography,
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
  },
  form: {
    width: 300,
    // margin: "auto",
    padding: 25,
  },
  textField: {
    width: 200,
    marginBottom: 10
  },
  calculateBtn: {
    width: 200,
    marginTop: 25
  }
}));
export default function CentralBank() {
  const classes = useStyles();

  return (
    <>
      <h1>Under Contruction</h1>
    </>
  );
}
