import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 1999, rate: 1.753 },
  { year: 2000, rate: 1.183 },
  { year: 2001, rate: 1.5323 },
  { year: 2002, rate: 1.5204 },
  { year: 2003, rate: 1.3765 },
  { year: 2004, rate: 1.3904 },
  { year: 2005, rate: 2.0891 },
  { year: 2006, rate: 2.4557 },
  { year: 2007, rate: 2.3866 },
  { year: 2008, rate: 3.5214 },
  { year: 2009, rate: 1.9617 },
  { year: 2010, rate: 2.4927 },
  { year: 2011, rate: 3.8561 },
  { year: 2012, rate: 2.5732 },
  { year: 2013, rate: 2.2917 },
  { year: 2014, rate: 1.4511 },
  { year: 2015, rate: 0.368 },
  { year: 2016, rate: 1.0084 },
  { year: 2017, rate: 2.5578 },
  { year: 2018, rate: 2.2928 },
  { year: 2019, rate: 1.7381 },
  { year: 2020, rate: 0.9895 },
];

export default function Chart() {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="rate"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
