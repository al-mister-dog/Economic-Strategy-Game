import {
  Paper,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CpiWeightCalculator from "./CpiWeightCalculator";
import InflationChange from "./InflationChange";
import InflationRate from "./InflationRate";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
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
  return (
    <>
      <Paper className={classes.paper}> 
        <Box className={classes.box}>
        <Typography>Inflation</Typography> 
        <CpiWeightCalculator />
        <InflationChange />
        <InflationRate />
         </Box> 
        
       </Paper>
    </>
  );
}
/**
 * show inflation rate over time
 * show cpi index
 * cpi index shows price change
 * toggle cpi index
 */