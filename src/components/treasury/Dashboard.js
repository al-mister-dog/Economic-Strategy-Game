import "./Treasury.css";
import colorScheme from "./data/colorScheme";
import { Paper, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paperBudget: {
    margin: "10px",
    padding: "12px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonSubmit: {
    maxWidth: "50%",
    position: "relative",
    left: "50%",
  },
}));
export default function Dashboard({
  totalTax,
  totalSpending,
  deficit,
  budget,
  settingBudget,
  onSubmitBudget,
}) {
  const classes = useStyles();
  const annualBudget = budget[budget.length - 1];
  return (
    <Paper className={classes.paperBudget}>
      <div className="dashboard-totals">
        <div className="dashboard-total">
          <Typography variant="h6" >
            Tax Revenue
          </Typography>
          <Typography variant="h6" >
            £{totalTax || 349} bn
          </Typography>
        </div>
        <div className="dashboard-total">
          <Typography variant="h6" >
            Expenditure
          </Typography>
          <Typography variant="h6" >
            £{totalSpending || 349} bn
          </Typography>
        </div>
        <div className="dashboard-total">
          <Typography variant="h6" >
            {deficit > 0 ? "Surplus" : "Deficit"}
          </Typography>
          <Typography variant="h6" >
            £{deficit} bn
          </Typography>
        </div>
      </div>

      <Button
        className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        disabled={!settingBudget}
        onClick={() => onSubmitBudget(totalTax, totalSpending)}
      >
        Submit Annual Budget
      </Button>
    </Paper>
  );
}
