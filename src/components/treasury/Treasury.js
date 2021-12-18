import { useState, useEffect } from "react";
import HmReport from "./HmReport";
import Graph from "./Graph";
import SetBudget from "./SetBudget";
import Calculator from "./Calculator";
import { Paper, Box, makeStyles } from "@material-ui/core";
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
    // height: "100vh",
    backgroundColor: "#ebe1e1",
  },
  treasuryContainer: {
    height: "82vh",
    margin: "3rem 10rem 5rem 10rem",
    display: "flex",
    "@media (max-width: 620px)": {
      height: "200vh",
      flexDirection: "column",
      margin: "1rem",
    },
  },
  boxOne: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "100%",
    "@media (max-width: 620px)": {
      width: "100%",
      height: "50%",
    },
  },
  boxTwo: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "100%",
    "@media (max-width: 620px)": {
      width: "100%",
      height: "50%",
    },
  },

  paperHmReport: {
    margin: "10px",
    padding: "10px",
    height: "20%",
    display: "flex",

    // justifyContent: "center",
  },
  paperGraph: {
    margin: "10px",
    height: "80%",
  },
  paperCalculator: {
    padding: "25px",
    margin: "10px",
    height: "70%",
    "@media (max-width: 620px)": {
     
    height: "80%",
    }
  },
  paperSetBudget: {
    margin: "10px",
    padding: "10px",

    height: "26%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "@media (max-width: 620px)": {
    height: "20%",
    justifyContent: "space-evenly",
    alignItems: "space-evenly"
    }
  },

  paperTabs: {
    margin: "10px",
    padding: "10px",
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
      <Box className={classes.treasuryContainer}>
        <Box className={classes.boxOne}>
          <Paper className={classes.paperHmReport}>
            <HmReport
              budget={budget}
              // totalTax={totalTax}
              // totalSpending={totalSpending}
              // deficit={deficit}
              settingBudget={settingBudget}
              setAnnualBudget={setAnnualBudget}
            />
          </Paper>
          <Paper className={classes.paperGraph}>
            <Graph budget={budget} />
          </Paper>
        </Box>

        <Box className={classes.boxTwo}>
          <Paper className={classes.paperSetBudget}>
            <SetBudget
              openSpendingCalculator={openSpendingCalculator}
              openTaxCalculator={openTaxCalculator}
              totalTax={totalTax}
              totalSpending={totalSpending}
              deficit={deficit}
              settingBudget={settingBudget}
              onSubmitBudget={onSubmitBudget}
            />
          </Paper>
          <Paper className={classes.paperCalculator}>
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
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
