import { useState, useEffect } from "react";
import Graph from "./Graph";
import Dashboard from "./Dashboard";
import Calculator from "./Calculator";
import ExchequerIcon from "./ExchequerIcon";
import { Paper, Box, Typography, Button, makeStyles } from "@material-ui/core";
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
  body: {
    height: "100vh",
    backgroundColor: "#ebe1e1",
  },

  title: {
    margin: "0px 50px 10px 10px",
    fontWeight: "bold",
    fontSize: "1.6rem",
  },
  paperHmReport: {
    margin: "10px",
    padding: "12px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  hmReportTitle: {
    display: "flex",
    marginTop: "10px",
    marginLeft: "25px",
  },
  paperTabs: {
    margin: "10px",
    padding: "10px",
  },
  totalBtn: {
    width: "7rem",
    margin: "5px",
  },
  totalBtnTitle: {
    color: "#808080",
  },
  totalBtnNum: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  buttonSubmit: {
    maxWidth: "50%",
    position: "relative",
    left: "50%",
  },
}));

export default function Treasury() {
  const classes = useStyles();

  const [budget, setBudget] = useState(FIRST_YEAR);
  const [totalTax, setTotalTax] = useState(349);
  const [totalSpending, setTotalSpending] = useState(349);
  const [deficit, setDeficit] = useState(0);
  const [calcToggle, setCalcToggle] = useState(true);
  const [settingBudget, setSettingBudget] = useState(false);
  function setAnnualBudget() {
    setSettingBudget(!settingBudget);
  }
  function openTaxCalculator() {
    setCalcToggle(true);
  }
  function openSpendingCalculator() {
    setCalcToggle(false);
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
  
  function calculateAnnualDeficit() {
    const deficit = totalTax - totalSpending;
    setDeficit(deficit);
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
    setSettingBudget(false);
  }

  function onSubmitBudget(totalTax, totalSpending) {
    submitBudget(newYear(), totalTax, totalSpending);
  }

  useEffect(() => {
    calculateAnnualDeficit();
  }, [totalTax, totalSpending]);

  return (
    <Box className={classes.body}>
      <body className="treasury-body">
        <div className="top-row">
          <Paper className={classes.paperHmReport}>
            <Box className={classes.hmReportTitle}>
              <ExchequerIcon className="exchequer-icon" />
              <Typography variant="h5" className={classes.title} align="left">
                HM Treasury Report: {budget[budget.length - 1].year}
              </Typography>
            </Box>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              onClick={() => setAnnualBudget(totalTax, totalSpending)}
            >
              {settingBudget ? "Cancel" : "Set Annual Budget"}
            </Button>
          </Paper>

          <Dashboard
            totalTax={totalTax}
            totalSpending={totalSpending}
            deficit={deficit}
            budget={budget}
            settingBudget={settingBudget}
            onSubmitBudget={onSubmitBudget}
          />
        </div>

        <div className="bottom-row">
          <Graph budget={budget} />
          <div className="calculator-and-buttons">
            <Paper className={classes.paperTabs}>
              <div className="totals">
                <div className="total">
                  <Typography className={classes.totalBtnNum}>
                    £{totalTax} bn
                  </Typography>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.totalBtn}
                    onClick={openTaxCalculator}
                  >
                    Tax
                  </Button>
                </div>
                <div class="total">
                  <Typography className={classes.totalBtnNum}>
                    £{totalSpending} bn
                  </Typography>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.totalBtn}
                    onClick={openSpendingCalculator}
                  >
                    Spend
                  </Button>
                </div>
              </div>
            </Paper>

            {calcToggle && (
              <Calculator
                data={taxAndSpending.taxRevenueData}
                settingBudget={settingBudget}
                budgetType={"TAX"}
                calculateTotalAmount={calculateTotalAmount}
              />
            )}
            {!calcToggle && (
              <Calculator
                data={taxAndSpending.spendingData}
                settingBudget={settingBudget}
                budgetType={"SPENDING"}
                calculateTotalAmount={calculateTotalAmount}
              />
            )}
          </div>
        </div>
      </body>
    </Box>
  );
}
