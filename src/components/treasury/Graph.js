import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Treasury.css";

export default function Treasury({budget}) {
  const duration = 300;

  return (
    <div className="chart-container">
      <h3>UK revenue, expenditure and deficit/surplus (Billion GBP)</h3>
      <LineChart className="chart" width={500} height={300} data={budget}>
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
      <p>Deficit shown on chart is long term deficit</p>
    </div>
  );
}
