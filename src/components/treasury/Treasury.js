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
  },
];
export default function Treasury() {
  const [annualBudget, setAnnualBudget] = useState(FIRST_YEAR);
  const [longTermBudget, setLongTermBudget] = useState(FIRST_YEAR);

  const newYear = () => {
    return annualBudget[annualBudget.length - 1].year + 1;
  };
  const prevLongTermYear = () => {
    return longTermBudget[longTermBudget.length - 1];
  };
  const prevAnnualYear = () => {
    return annualBudget[annualBudget.length - 1];
  };

  function calculateDeficit(newRevenue, newExpenditure) {
    const deficit = newExpenditure - newRevenue;
    return -deficit;
  }

  function calculateLongTermDeficit(revenue, expenditure) {
    let deficit = calculateDeficit(revenue, expenditure);
    deficit >= prevAnnualYear().deficit
      ? (deficit += prevLongTermYear().deficit)
      : (deficit -= prevLongTermYear().deficit);
    return deficit;
  }

  function submitLongTermBudget(year, revenue, expenditure) {
    const deficit = calculateLongTermDeficit(revenue, expenditure);
    const newLongTermBudget = [
      ...longTermBudget,
      {
        year,
        revenue,
        expenditure,
        deficit,
      },
    ];
    setLongTermBudget(newLongTermBudget);
  }

  function submitAnnualBudget(year, revenue, expenditure) {
    const deficit = calculateDeficit(revenue, expenditure);
    const newAnnualBudget = [
      ...annualBudget,
      {
        year,
        revenue,
        expenditure,
        deficit,
      },
    ];
    setAnnualBudget(newAnnualBudget);
  }

  function onSubmitBudget(totalTax, totalSpending) {
    submitAnnualBudget(newYear(), totalTax, totalSpending);
    submitLongTermBudget(newYear(), totalTax, totalSpending);
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
          <Graph budget={longTermBudget} />
        </div>
        <div className="budget">
          <Budget budget={annualBudget} onSubmitBudget={onSubmitBudget} />
        </div>
      </div>
    </div>
  );
}
