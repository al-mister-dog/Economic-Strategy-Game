import { useState } from "react";
import Calculator from "./Calculator";
import taxAndSpending from "./data/taxAndSpending";
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

export default function Budget({ budget, onSubmitBudget }) {
  const classes = useStyles();
  const annualBudget = budget[budget.length - 1];
  const [calculatingTax, setCalculatingTax] = useState(false);
  const [calculatingSpending, setCalculatingSpending] = useState(true);
  const [totalTax, setTotalTax] = useState(349);
  const [totalSpending, setTotalSpending] = useState(349);

  function openTaxRevenue() {
    setCalculatingSpending(false);
    setCalculatingTax(true);
  }
  function openSpending() {
    setCalculatingTax(false);
    setCalculatingSpending(true);
  }

  function calculateTotalAmount(amount, budgetType) {
    const total = amount.reduce((a, b) => ({
      amount: a.amount + b.amount,
    }));
    if (budgetType === "TAX") {
      setTotalTax(total.amount);
    }
    if (budgetType === "SPENDING") {
      setTotalSpending(total.amount);
    }
  }

  return (
    <>
      <Paper className={classes.paperBudget}>
        <div className="btns-and-totals">
          <div
            className={
              calculatingTax ? "btn-and-total clicked" : "btn-and-total"
            }
            onClick={() => openTaxRevenue()}
          >
            <Button
              className={
                calculatingTax ? classes.muiButtonActive : classes.muiButton
              }
              variant="contained"
              color="primary"
            >
              Tax Revenue
            </Button>
            <Typography variant="h5" align="right">
              Total: {totalTax || 349}
            </Typography>
          </div>
          <div
            className={
              calculatingSpending ? "btn-and-total clicked" : "btn-and-total"
            }
            onClick={() => openSpending()}
          >
            <Button
              className={
                calculatingSpending
                  ? classes.muiButtonActive
                  : classes.muiButton
              }
              variant="contained"
              color="primary"
            >
              Spending
            </Button>
            <Typography variant="h5" align="right">
              Total: {totalSpending}
            </Typography>
          </div>
        </div>
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

      <div className="calculator-container">
        <div>
          {calculatingTax && (
            <Calculator
              data={taxAndSpending.taxRevenueData}
              budgetType={"TAX"}
              calculateTotalAmount={calculateTotalAmount}
            />
          )}
          {calculatingSpending && (
            <Calculator
              data={taxAndSpending.spendingData}
              budgetType={"SPENDING"}
              calculateTotalAmount={calculateTotalAmount}
            />
          )}
        </div>
      </div>
    </>
  );
}
