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
import colorScheme from "./data/colorScheme";

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
          <XAxis dataKey="year" strokeWidth={2} />
          <YAxis strokeWidth={2} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="revenue"
            stroke={colorScheme.red}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="deficit"
            stroke={colorScheme.green}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="long_term_deficit"
            stroke={colorScheme.blue}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            animationDuration={duration}
            dataKey="expenditure"
            stroke={colorScheme.orange}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
