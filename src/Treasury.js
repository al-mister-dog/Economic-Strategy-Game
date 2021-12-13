import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./Treasury.css";

export default function Treasury() {
  const duration = 300;
  const [data, setData] = useState([
    {
      year: 1999,
      debt: 702,
      revenue: 349,
      expenditure: 349,
      deficit: 0,
    },
  ]);
  function checkDebtAmount(newDebt) {
    return newDebt < 0 ? 0 : newDebt;
  }
  function checkDeficit(newRevenue, newExpenditure) {
    const deficit = newExpenditure - newRevenue;
    return -deficit;
  }
  function createNewData(newObj) {
    let { newYear, newDebt, newRevenue, newExpenditure, newDeficit } = newObj;
    newDebt = checkDebtAmount(newDebt);
    newDeficit = checkDeficit(newRevenue, newExpenditure);
    const newData = [
      ...data,
      {
        year: newYear,
        debt: newDebt,
        revenue: newRevenue,
        expenditure: newExpenditure,
        deficit: newDeficit,
      },
    ];
    setData(newData);
  }
  function raiseTaxes() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newDebt = prevYear.debt;
    const newRevenue = prevYear.revenue + 100;
    const newExpenditure = prevYear.expenditure;
    createNewData({ newYear, newDebt, newRevenue, newExpenditure });
  }
  function cutTaxes() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newDebt = prevYear.debt;
    const newRevenue = prevYear.revenue - 100;
    const newExpenditure = prevYear.expenditure;
    createNewData({ newYear, newDebt, newRevenue, newExpenditure });
  }
  function cutSpending() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newDebt = prevYear.debt;
    const newRevenue = prevYear.revenue;
    const newExpenditure = prevYear.expenditure - 100;
    createNewData({ newYear, newDebt, newRevenue, newExpenditure });
  }
  function increaseSpending() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newDebt = prevYear.debt;
    const newRevenue = prevYear.revenue;
    const newExpenditure = prevYear.expenditure + 100;
    createNewData({ newYear, newDebt, newRevenue, newExpenditure });
  }

  return (
    <div className="chart-container">
      <h2>HM Treasury</h2>
      <h3>UK debt, revenue, expenditure and deficit/surplus (Billion GBP)</h3>
      <LineChart className="chart" width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="debt"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          animationDuration={duration}
        />
        <Line
          type="monotone"
          animationDuration={duration}
          dataKey="revenue"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          animationDuration={duration}
          dataKey="deficit"
          stroke="#FF5733"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          animationDuration={duration}
          dataKey="expenditure"
          stroke="#FF2453"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => cutTaxes()}>Cut Taxes!</Button>
        <Button onClick={() => raiseTaxes()}>Raise Taxes!</Button>

        <Button onClick={() => cutSpending()}>Cut Spending!</Button>
        <Button onClick={() => increaseSpending()}>Increase Spending!</Button>
      </ButtonGroup>
    </div>
  );
}
