import { useState } from "react";
import Calculator from "./departments/Calculator";
import taxAndSpending from "./data/taxAndSpending";
import { Button, makeStyles, Typography } from "@material-ui/core";
import "./Treasury.css";

const useStyles = makeStyles(() => ({
  muiButton: {
    border: "2px solid gray",
  },
  muiButtonActive: {
    border: "2px solid green",
    fontWeight: "bold",
  },
  muiButtonSubmit: {
    border: "2px solid black",
    fontWeight: "bold",
    margin: "5px auto",
  },
}));

export default function Budget({ budget, onSubmitBudget }) {
  const classes = useStyles();
  const annualBudget = budget[budget.length -1]
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
      <div className="dashboard">
        <div className="dashboard-buttons">
          <div className="dashboard-button">
            <Button
              className={
                calculatingTax ? classes.muiButtonActive : classes.muiButton
              }
              variant="contained"
              color="primary"
              onClick={() => openTaxRevenue()}
            >
              Tax Revenue
            </Button>
            <Typography variant="h5" align="left">
              Total: {totalTax || 349}
            </Typography>
          </div>
          <div className="dashboard-button">
            <Button
              className={
                calculatingSpending
                  ? classes.muiButtonActive
                  : classes.muiButton
              }
              variant="contained"
              color="primary"
              onClick={() => openSpending()}
            >
              Spending
            </Button>
            <Typography variant="h5" align="left">
              Total: {totalSpending}
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant="h6" align="left">
            Year: {annualBudget.year}
          </Typography>
          <Typography variant="h6" align="left">
            Revenue: £{annualBudget.revenue} bn
          </Typography>
          <Typography variant="h6" align="left">
            Expenditure: £{annualBudget.expenditure} bn
          </Typography>
          <Typography variant="h6" align="left">
            {annualBudget.deficit > 0 ? "Surplus" : "Deficit"}: £{annualBudget.deficit} bn
          </Typography>
        </div>
        <Button
          className={classes.muiButtonSubmit}
          variant="contained"
          color="secondary"
          onClick={() => onSubmitBudget(totalTax, totalSpending)}
        >
          Submit Budget
        </Button>
      </div>
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
