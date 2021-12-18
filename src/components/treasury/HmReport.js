import ExchequerIcon from "./ExchequerIcon";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import "./Treasury.css";

const useStyles = makeStyles(() => ({
  hmReportTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "75%"
  },
  logoAndButton: {
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.6rem",
  },
  totals: {
    display: "flex",
    justifyContent: "space-around",
  },
  submitBtn: {
    minWidth: "10rem"
  }
}));
export default function HmReport({
  budget,
  settingBudget,
  setAnnualBudget,
}) {
  const classes = useStyles();
  const {
    year,
    revenue,
    expenditure,
    deficit,
    long_term_deficit,
  } = budget[budget.length - 1]
  return (
    <>
      <Box className={classes.hmReportTitle}>
        <Typography variant="h5" className={classes.title}>
          HM Treasury Report: {year}
        </Typography>
        <Box className={classes.totals}>
          <Box>
            <Typography variant="subtitle1">Tax Revenue</Typography>
            <Typography variant="subtitle1">£{revenue || 349} bn</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Expenditure</Typography>
            <Typography variant="subtitle1">
              £{expenditure || 349} bn
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              {deficit > 0 ? "Surplus" : "Deficit"}
            </Typography>
            <Typography variant="subtitle1">£{deficit} bn</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              {long_term_deficit > 0 ? "Long Term Surplus" : "Long Term Deficit"}
            </Typography>
            <Typography variant="subtitle1">£{long_term_deficit} bn</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.logoAndButton}>
        <ExchequerIcon className="exchequer-icon" />
        <Button
        className={classes.submitBtn}
          variant="contained"
          color="primary"
          onClick={() => setAnnualBudget()}
        >
          {settingBudget ? "Cancel" : "Set Budget"}
        </Button>
      </Box>
    </>
  );
}
