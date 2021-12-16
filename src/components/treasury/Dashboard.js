import "./Treasury.css";
import colorScheme from "./data/colorScheme";
import { Paper, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paperBudget: {
    margin: "0 20px 0 20px",
    width: "17rem",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  muiButton: {
    width: "8rem",
    marginRight: "3px",
  },
  muiButtonActive: {
    background: colorScheme.blue,
    fontWeight: "bold",
    width: "8rem",
    marginRight: "3px",
  },
  muiButtonSubmit: {
    margin: "5px auto",
  },
}));
export default function Dashboard({totalTax, totalSpending, budget, onSubmitBudget}) {
  const classes = useStyles()
  const annualBudget = budget[budget.length - 1];
  return (
    <Paper className={classes.paperBudget}>

        <Typography variant="h5" align="right">
          Total: {totalTax || 349}
        </Typography>

        <Typography variant="h5" align="right">
          Total: {totalSpending}
        </Typography>
      
    
    <div>
      <Typography variant="subtitle1" align="left">
        Year: {annualBudget.year}
      </Typography>
      <Typography variant="subtitle1" align="left">
        Revenue: £{annualBudget.revenue} bn
      </Typography>
      <Typography variant="subtitle1" align="left">
        Expenditure: £{annualBudget.expenditure} bn
      </Typography>
      <Typography variant="subtitle1" align="left">
        {annualBudget.deficit > 0 ? "Surplus" : "Deficit"}: £
        {annualBudget.deficit} bn
      </Typography>
    </div>
    <Button
      className={classes.muiButtonSubmit}
      variant="contained"
      onClick={() => onSubmitBudget(totalTax, totalSpending)}
    >
      Submit Budget
    </Button>
  </Paper>
  )
}