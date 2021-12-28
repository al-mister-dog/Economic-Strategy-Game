import { useState, useEffect } from "react";
import taxAndSpending from "../__data__/taxAndSpending";
import HmReport from "./HmReport";
import Graph from "./Graph";
import SetBudget from "./SetBudget";
import Calculator from "./Calculator";
import { Paper, Box, Typography, makeStyles } from "@material-ui/core";

const FIRST_YEAR = [
  {
    year: 1999,
    revenue: 349,
    expenditure: 349,
    deficit: 0,
    long_term_deficit: 0,
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    height: "5rem"
  },
  titleMenu: {
    color: "black",
    fontSize: "2.3rem",
    width: "3rem",
    height: "3rem"
  },
  wrapper: {
    height: "90vh",
    margin: "0rem 9rem 5rem 9rem",
    display: "flex",
    "@media (max-width: 620px)": {
      height: "210vh",
      margin: "0.3rem",
      flexDirection: "column",
    },
  },
  boxOne: {
    display: "flex",
    flexDirection: "column",
    width: "68%",
    height: "100%",
    "@media (max-width: 620px)": {
      width: "100%",
      height: "50%",
    },
  },
  boxTwo: {
    display: "flex",
    flexDirection: "column",
    width: "32%",
    height: "100%",
    "@media (max-width: 620px)": {
      width: "100%",
      height: "50%",
    },
  },

  paperHmReport: {
    backgroundColor: "#fdfbf7",
    margin: "10px",
    padding: "10px",
    height: "20%",
    display: "flex",
    "@media (max-width: 620px)": {
      height: "25%",
    },
  },
  paperGraph: {
    backgroundColor: "#fdfbf7",
    margin: "10px",
    padding: "10px",
    height: "80%",
    "@media (max-width: 620px)": {
      padding: "0px",
    },
  },
  setBudgetAndCalculator: {
    backgroundColor: "#fdfbf7",
    height: "100%",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 620px)": {
      width: "88%",
      height: "100%",
    },
  },
  setBudget: {
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "@media (max-width: 620px)": {
      height: "20%",
      justifyContent: "space-evenly",
      alignItems: "space-evenly",
    },
  },
  calculator: {
    height: "70%",
    "@media (max-width: 620px)": {
      height: "80%",
    },
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
    <Box>
      <Typography variant="h2">Budget</Typography>
      <Box className={classes.wrapper}>
        <Box className={classes.boxOne}>
          <Paper elevation={0} className={classes.paperHmReport}>
            <HmReport
              budget={budget}
              settingBudget={settingBudget}
              setAnnualBudget={setAnnualBudget}
            />
          </Paper>
          <Paper elevation={0} className={classes.paperGraph}>
            <Graph budget={budget} />
          </Paper>
        </Box>
        <Box className={classes.boxTwo}>
          <Paper elevation={0} className={classes.setBudgetAndCalculator}>
            <Box className={classes.setBudget}>
              <SetBudget
                openSpendingCalculator={openSpendingCalculator}
                openTaxCalculator={openTaxCalculator}
                totalTax={totalTax}
                totalSpending={totalSpending}
                deficit={deficit}
                settingBudget={settingBudget}
                onSubmitBudget={onSubmitBudget}
                calcToggle={calcToggle}
              />
            </Box>
            <Box className={classes.calculator}>
              {calcToggle && (
                <Calculator
                  data={taxAndSpending.taxRevenueData}
                  settingBudget={settingBudget}
                  title={"Tax Revenues"}
                  budgetType={"TAX"}
                  calculateTotalAmount={calculateTotalAmount}
                />
              )}
              {!calcToggle && (
                <Calculator
                  data={taxAndSpending.spendingData}
                  settingBudget={settingBudget}
                  title={"Expenditures"}
                  budgetType={"SPENDING"}
                  calculateTotalAmount={calculateTotalAmount}
                />
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}