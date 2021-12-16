import { useState } from "react";
import Graph from "./Graph";
import Budget from "./Budget";
import ExchequerIcon from "./ExchequerIcon";
import { Box, Toolbar, Typography, makeStyles } from "@material-ui/core";
import "./Treasury.css";

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
    marginTop: "5px"
  },
  title: {
    margin: "10px 50px 10px 10px",
  },
}));
export default function Treasury() {
  const classes = useStyles();
  const [annualBudget, setAnnualBudget] = useState(FIRST_YEAR);

  const newYear = () => {
    return annualBudget[annualBudget.length - 1].year + 1;
  };
  const prevYear = () => {
    return annualBudget[annualBudget.length - 1];
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

  function submitAnnualBudget(year, revenue, expenditure) {
    const deficit = calculateDeficit(revenue, expenditure);
    const long_term_deficit = calculateLongTermDeficit(revenue, expenditure);
    const newAnnualBudget = [
      ...annualBudget,
      {
        year,
        revenue,
        expenditure,
        deficit,
        long_term_deficit,
      },
    ];
    setAnnualBudget(newAnnualBudget);
  }

  function onSubmitBudget(totalTax, totalSpending) {
    submitAnnualBudget(newYear(), totalTax, totalSpending);
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
      <Graph budget={annualBudget} />
      <Budget budget={annualBudget} onSubmitBudget={onSubmitBudget} />  
      </body>
    </Box>
  );
}
