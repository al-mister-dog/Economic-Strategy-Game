import { connect } from "react-redux"
import { Box } from "@material-ui/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

function InflationChart({data}) {
  console.log(data)
  console.log("hello")
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <p>% Rate of Change</p>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="change" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.inflationByYear
  }
}

export default connect(mapStateToProps)(InflationChart)