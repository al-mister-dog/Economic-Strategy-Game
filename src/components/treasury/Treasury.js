import Graph from "./Graph";
import Tax from "./departments/TaxCalculator";
import Spending from "./departments/SpendingCalculator";
import ExchequerIcon from "./ExchequerIcon";
import "./Treasury.css";

export default function Treasury() {
  return (
    <div className="treasury">
      <div className="title">
        <ExchequerIcon />
        <h2>HM Treasury</h2>
      </div>
      <div className="body">
        <Graph />
        <div className="budget">
          <Tax />
          <Spending />
        </div>
      </div>
    </div>
  );
}
