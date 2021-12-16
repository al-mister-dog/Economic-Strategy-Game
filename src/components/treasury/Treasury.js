import { useState } from "react";
import Graph from "./Graph";
import Budget from "./Budget";
import ExchequerIcon from "./ExchequerIcon";
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
export default function Treasury() {
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
    const long_term_deficit = calculateLongTermDeficit(revenue, expenditure)
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
    <div className="treasury">
      <div className="nav">
        <div className="title">
          <ExchequerIcon />
          <h2>HM Treasury</h2>
        </div>
      </div>

      <div className="body">
        <div className="graph">
          <Graph budget={annualBudget} />
        </div>
        <div className="budget">
          <Budget budget={annualBudget} onSubmitBudget={onSubmitBudget} />
        </div>
      </div>
    </div>
  );
}
