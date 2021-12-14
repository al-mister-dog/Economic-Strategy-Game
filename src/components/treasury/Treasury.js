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
import ExchequerIcon from "./ExchequerIcon"

export default function Treasury() {
  const duration = 300;
  const [data, setData] = useState([
    {
      year: 1999,
      revenue: 349,
      expenditure: 349,
      deficit: 0,
    },
  ]);
  function checkDeficit(newRevenue, newExpenditure) {
    const deficit = newExpenditure - newRevenue;
    return -deficit;
  }
  function createNewData(newObj) {
    let { newYear, newRevenue, newExpenditure, newDeficit } = newObj;
    newDeficit = checkDeficit(newRevenue, newExpenditure);
    const newData = [
      ...data,
      {
        year: newYear,
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
    const newRevenue = prevYear.revenue + 100;
    const newExpenditure = prevYear.expenditure;
    createNewData({ newYear, newRevenue, newExpenditure });
  }
  function cutTaxes() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newRevenue = prevYear.revenue - 100;
    const newExpenditure = prevYear.expenditure;
    createNewData({ newYear, newRevenue, newExpenditure });
  }
  function cutSpending() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newRevenue = prevYear.revenue;
    const newExpenditure = prevYear.expenditure - 100;
    createNewData({ newYear, newRevenue, newExpenditure });
  }
  function increaseSpending() {
    const prevYear = data[data.length - 1];
    const newYear = prevYear.year + 1;
    const newRevenue = prevYear.revenue;
    const newExpenditure = prevYear.expenditure + 100;
    createNewData({ newYear, newRevenue, newExpenditure });
  }

  return (
    <div className="chart-container">
      <ExchequerIcon />
      <h2>HM Treasury</h2>
      <h3>UK revenue, expenditure and deficit/surplus (Billion GBP)</h3>
      <LineChart className="chart" width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" strokeWidth={2}/>
        <XAxis dataKey="year" strokeWidth={3}/>
        <YAxis strokeWidth={3}/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          animationDuration={duration}
          dataKey="revenue"
          stroke="#82ca9d"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          animationDuration={duration}
          dataKey="deficit"
          stroke="#FF5733"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          animationDuration={duration}
          dataKey="expenditure"
          stroke="#FF2453"
          strokeWidth={3}
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