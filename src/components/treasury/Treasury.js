import { useState } from "react";
import Graph from "./Graph";
import Calculator from "./departments/Calculator";
import taxAndSpending from "./data/taxAndSpending";
import ExchequerIcon from "./ExchequerIcon";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import "./Treasury.css";

const useStyles = makeStyles(() => ({
  muiButton: {
    border: "2px solid black",
    fontWeight: "bold"
  }
}));

export default function Treasury() {
  const classes = useStyles()
  const [settingBudget, setSettingBudget] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [calculatingTax, setCalculatingTax] = useState(false);
  const [calculatingSpending, setCalculatingSpending] = useState(false);

  function createBudget() {
    setSettingBudget(true);
  }
  function openTaxRevenue() {
    setCalculatingSpending(false);
    setCalculatingTax(true);
    setCalculating(true);
  }
  function openSpending() {
    setCalculatingTax(false);
    setCalculatingSpending(true);
    setCalculating(true);
  }
  return (
    <div className="treasury">
      <div className="nav">
        <div className="title">
          <ExchequerIcon />
          <h2>HM Treasury</h2>
        </div>

        <div className="buttons">
          <Button className={classes.muiButton} variant="contained" color="primary" onClick={() => createBudget()}>Create Budget</Button>
          {settingBudget && (
            <ButtonGroup
              variant="outlined"
              aria-label="outlined primary button group"
            >
              <Button className={classes.muiButton} variant="contained" color="secondary" onClick={() => openTaxRevenue()}>Tax Revenue</Button>
              <Button className={classes.muiButton} variant="contained" color="secondary" onClick={() => openSpending()}>Spending</Button>
            </ButtonGroup>
          )}
        </div>
      </div>

      <div className="body">
        <div className="graph">
        <Graph />
        </div>
        <div className="budget">
          {calculating && (
            <div>
              {calculatingTax && (
                <Calculator data={taxAndSpending.taxRevenueData} />
              )}
              {calculatingSpending && (
                <Calculator data={taxAndSpending.spendingData} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
