import { useState } from "react";
import Graph from "./Graph";
import Dashboard from "./Dashboard";
import Calculator from "./Calculator";
import ExchequerIcon from "./ExchequerIcon";
import { Box, Toolbar, Typography, makeStyles } from "@material-ui/core";
import "./Treasury.css";
import taxAndSpending from "./data/taxAndSpending";

const FIRST_YEAR = [
  {
    year: 1999,
    revenue: 349,
    expenditure: 349,
    deficit: 0,
    long_term_deficit: 0,
  },
];

const useStyles = makeStyles(() => ({
  toolbar: {
    marginTop: "5px",
  },
  title: {
    margin: "10px 50px 10px 10px",
  },
}));
export default function Treasury() {
  const classes = useStyles();
  const [budget, setBudget] = useState(FIRST_YEAR);
  const [totalTax, setTotalTax] = useState(349);
  const [totalSpending, setTotalSpending] = useState(349);

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

  const newYear = () => {
    return budget[budget.length - 1].year + 1;
  };
  const prevYear = () => {
    return budget[budget.length - 1];
  };

  function calculateDeficit(newRevenue, newExpenditure) {
    const deficit = newExpenditure - newRevenue;
    return -deficit;
  }

  function calculateLongTermDeficit(revenue, expenditure) {
    let deficit = calculateDeficit(revenue, expenditure);
    deficit >= prevYear().deficit
      ? (deficit += prevYear().long_term_deficit)
      : (deficit -= prevYear().long_term_deficit);
    return deficit;
  }

  function submitBudget(year, revenue, expenditure) {
    const deficit = calculateDeficit(revenue, expenditure);
    const long_term_deficit = calculateLongTermDeficit(revenue, expenditure);
    const newBudget = [
      ...budget,
      {
        year,
        revenue,
        expenditure,
        deficit,
        long_term_deficit,
      },
    ];
    setBudget(newBudget);
  }

  function onSubmitBudget(totalTax, totalSpending) {
    submitBudget(newYear(), totalTax, totalSpending);
  }

  return (
    <Box>
      <Toolbar className={classes.toolbar}>
        <ExchequerIcon />
        <Typography variant="h6" className={classes.title}>
          HM Treasury
        </Typography>
      </Toolbar>
      <body className="treasury-body">
        <Graph budget={budget} />
        <Dashboard
          totalTax={totalTax}
          totalSpending={totalSpending}
          budget={budget}
          onSubmitBudget={onSubmitBudget}
        />
        <Calculator
          data={taxAndSpending.taxRevenueData}
          budgetType={"TAX"}
          calculateTotalAmount={calculateTotalAmount}
        />

        <Calculator
          data={taxAndSpending.spendingData}
          budgetType={"SPENDING"}
          calculateTotalAmount={calculateTotalAmount}
        />
      </body>
    </Box>
  );
}
