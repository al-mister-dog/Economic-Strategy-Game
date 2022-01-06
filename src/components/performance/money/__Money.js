import {
  Paper,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { countriesData, keysData } from "../../__reusable/maps/data/fullCountries";
import ObjectMap from "../../__reusable/maps/components/ObjectMap";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
  },
  title: {
    overflow: "hidden",
    "@media (max-width: 620px)": {
      fontSize: "1.7rem",
    },
  },
  tab: {
    "@media (max-width: 620px)": {
      width: "0.5rem",
      fontSize: "0.4rem",
    },
  },
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    margin: "auto",
    marginTop: "2rem",
    padding: "25px",
    "@media (max-width: 620px)": {
      width: "100vw",
      padding: "5px",
    },
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));
export default function MonetaryPolicy() {
  const classes = useStyles();
  const countries = countriesData;
  const keys = [keysData[0], keysData[1], keysData[2]]
  return (
    <Box className={classes.container}>
      <Paper className={classes.paper}>
      <Typography variant="h4" align="left" className={classes.title}>
        Debt
      </Typography>
        <Box className={classes.box}>
          <ObjectMap countries={countries} keys={keys}/>
        </Box>
      </Paper>
    </Box>
  );
}
