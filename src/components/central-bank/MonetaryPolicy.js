import { useState } from "react";
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
}));
export default function MonetaryPolicy() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  return (
    <Box className={classes.container}>
      <Typography variant="h2">Monetary Policy</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "auto"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Interest Rate" />
          <Tab label="Inflation" />
          <Tab label="Quantitative Easing" />
          <Tab label="Forward Guidance" />
        </Tabs>
      </Box>
      {
        value === 0 && <CompoundInterestCalculator/>
      }
    </Box>
  );
}
