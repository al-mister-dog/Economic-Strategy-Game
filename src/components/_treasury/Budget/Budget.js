import { useState, useEffect } from "react";
import taxAndSpending from "../__data__/taxAndSpending";
import HmReport from "./HmReport";
import Graph from "./Graph";
import SetBudget from "./SetBudget";
import Calculator from "./Calculator";
import { Box, Typography, makeStyles } from "@material-ui/core";
import encyclopedia from "../__data__/encyclopedia";

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
    marginTop: "1rem",
    height: "5rem",
  },
  titleMenu: {
    color: "black",
    fontSize: "2.3rem",
    width: "3rem",
    height: "3rem",
  },

  container: {
    marginTop: "25px",
    display: "flex",
    height: "80vh",
    "@media (max-width: 620px)": {
      flexDirection: "column",
      height: "160vh",
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

  boxHmReport: {
    backgroundColor: "#fdfbf7",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    marginTop: "10px",
    padding: "10px",
    height: "20%",
    display: "flex",
    "@media (max-width: 620px)": {
      height: "25%",
      flexDirection: "column",
    },
  },
  boxGraph: {
    backgroundColor: "#fdfbf7",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    marginTop: "10px",
    paddingTop: "10px",
    height: "80%",
    "@media (max-width: 620px)": {
      padding: "0px",
    },
  },
  boxBudgetCalculator: {
    backgroundColor: "#fdfbf7",
    border: "1px solid #d7d7d7",
    borderRadius: "5px",
    height: "100%",
    margin: "10px",
    marginBottom: "0px",
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
  containerDeficit: {
    marginTop: "25px",
  },
}));

export default function Treasury() {
  const classes = useStyles();
  const deficitText = encyclopedia.budget.deficit;

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
    <>
      <Typography variant="h4" align="left">
        Budget
      </Typography>
      <Box className={classes.container}>
        <Box className={classes.boxOne}>
          <Box className={classes.boxHmReport}>
            <HmReport
              budget={budget}
              settingBudget={settingBudget}
              setAnnualBudget={setAnnualBudget}
            />
          </Box>
          <Box className={classes.boxGraph}>
            <Graph budget={budget} />
          </Box>
        </Box>
        <Box className={classes.boxTwo}>
          <Box className={classes.boxBudgetCalculator}>
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
          </Box>
        </Box>
      </Box>
      <Box className={classes.containerDeficit}>
        <Typography align="left" variant="h4" style={{ marginBottom: "25px" }}>
          Deficit
        </Typography>
        <Typography
          align="justify"
          style={{ marginBottom: "25px", fontSize: "0.7rem" }}
        >
          {deficitText.p1}
        </Typography>
        <Typography
          align="justify"
          style={{ marginBottom: "25px", fontSize: "0.7rem" }}
        >
          {deficitText.p2}
        </Typography>
        <Typography
          align="justify"
          style={{ marginBottom: "25px", fontSize: "0.7rem" }}
        >
          {deficitText.p3}
        </Typography>
      </Box>
    </>
  );
}
