import { useState } from "react";
import InterestCalculator from "../../../calculators/interest/interestClass";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Paper,
  Box,
  TextField,
  MenuItem,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CpiWeightCalculator from "../../__reusable/tools/CpiWeightCalculator";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    height: "80vh",
    
    margin: "auto",
    marginTop: "2rem",
    display: "flex",
    alignItems: "flex-start",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
}));
export default function CentralBank() {
  const classes = useStyles();

  const cpih = [
    { category: "Food & non-alcoholic beverages", weight: 8.9, change: 10 },
    { category: "Alcohol & tobacco", weight: 3.5, change: 5 },
    { category: "Clothing & footwear", weight: 5.9, change: 0 },
    { category: "Housing & household services", weight: 32.8, change: 20 },
    { category: "Furniture & household goods", weight: 4.9, change: 10 },
    { category: "Health", weight: 2.0, change: 3 },
    { category: "Transport", weight: 10.7, change: 2 },
    { category: "Communication", weight: 1.9, change: 5 },
    { category: "Recreation & culture", weight: 11.2, change: 15 },
    { category: "Education", weight: 3.0, change: 14 },
    { category: "Restaurants & hotels", weight: 6.9, change: 13 },
    { category: "Miscellaneous goods & services", weight: 8.3, change: 0 },
  ];
  
  function getInflationRate(cpi) {
    let weightedIndex = [];
  
    let priceIndex = cpi.map((i) => {
      return 100 + i.change;
    });
  
    cpi.forEach((item, index) => {
      weightedIndex = [...weightedIndex, (item.weight / 10) * priceIndex[index]];
    });
    
    let weightedIndexSum = weightedIndex.reduce((a, b) => a + b) / 10;
    
    const inflationIndex = weightedIndexSum
    const inflationRate = inflationIndex - 100 
    return {inflationIndex: inflationIndex.toFixed(2), inflationRate: inflationRate.toFixed(2)}
  }

  return (
    <>
      <Paper className={classes.paper}> 
        <Box className={classes.box}>
        <Typography>Inflation</Typography> 
        <CpiWeightCalculator />
         </Box> 
        
       </Paper>
    </>
  );
}
