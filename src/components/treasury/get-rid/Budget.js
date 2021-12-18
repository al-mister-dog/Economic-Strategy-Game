import { useState } from "react";
import Dashboard from "./Dashboard";
import Calculator from "../Calculator";
import taxAndSpending from "../data/taxAndSpending";
import "./Treasury.css";

export default function Budget({ budget, onSubmitBudget }) {
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

  return (
    <>
      <Dashboard
        totalTax={totalTax}
        totalSpending={totalSpending}
        budget={budget}
        onSubmitBudget={onSubmitBudget}
      />
      <div className="calculator-container">
        <div>
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
        </div>
      </div>
    </>
  );
}
