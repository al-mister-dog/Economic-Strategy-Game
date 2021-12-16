import { Paper, Typography, makeStyles } from "@material-ui/core";
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
import "./Treasury.css";

const budgetRed = "#f44335";
const budgetGreen = "#35f46e";
const budgetBlue = "#5135f4";
const budgetOrange = "#f4a135";

const useStyles = makeStyles(() => ({
  paper: {
    margin: "0 10px 0 10px",
    height: "20rem",
    width: "35rem",
  },
}));

export default function Treasury({ budget }) {
  const classes = useStyles();
  const duration = 300;

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">
        UK revenue, expenditure and deficit/surplus (Billion GBP)
      </Typography>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart data={budget}>
          <CartesianGrid strokeDasharray="3 3" strokeWidth={2} />
          <XAxis dataKey="year" strokeWidth={1} />
          <YAxis strokeWidth={1} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="revenue"
            stroke={budgetRed}
            strokeWidth={1}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="deficit"
            stroke={budgetGreen}
            strokeWidth={1}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="long_term_deficit"
            stroke={budgetBlue}
            strokeWidth={1}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="expenditure"
            stroke={budgetOrange}
            strokeWidth={1}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
