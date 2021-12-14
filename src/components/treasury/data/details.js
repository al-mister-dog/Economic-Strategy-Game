import { Typography, Slider, FormGroup, makeStyles } from "@material-ui/core";
const taxRevenue = [
  { receipt: "Business rates", revenue: 16 },
  { receipt: "Corporation Tax", revenue: 30 },
  { receipt: "Council Tax", revenue: 13 },
  { receipt: "Excise Duties", revenue: 36 },
  { receipt: "Income Tax", revenue: 88 },
  { receipt: "National Insurance", revenue: 56 },
  { receipt: "VAT", revenue: 54 },
  { receipt: "other", revenue: 56 },
];

const spending = [
  { department: "Debt Interest", expenditure: 26 },
  { department: "Defense", expenditure: 22 },
  { department: "Education", expenditure: 41 },
  { department: "Health", expenditure: 61 },
  { department: "Housing & Environment", expenditure: 13 },
  { department: "Industry, Agriculture, Employment", expenditure: 15 },
  { department: "Law & Order", expenditure: 19 },
  { department: "Other", expenditure: 41 },
  { department: "Social Security", expenditure: 102 },
  { department: "Transport", expenditure: 9 },
];
const totalRevenue = taxRevenue.reduce((a, b) => a.revenue + b.revenue, 0)

const useStyles = makeStyles(() => ({
  form: {
    borderRadius: "20px",
    border: "3px solid black",
    boxSizing: "border-box",
    // height: "500px",
    padding: "20px",
    width: "320px",
    margin: "auto",
    marginTop: "100px",
  },
  label: {
    textAlign: "left"
  },
  slider: {
    width: "80%",
  },
}));
export default function Form() {
  const totalRevenue = taxRevenue.reduce((a, b) => ({revenue: a.revenue + b.revenue}))
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <FormGroup>
        {taxRevenue.map((receipt) => {
          return (
            <>
              <Typography className={classes.label} gutterBottom>{receipt.receipt}</Typography>
              <Slider
                className={classes.slider}
                aria-label="Temperature"
                defaultValue={receipt.revenue}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                // step={10}
                marks
                min={0}
                max={100}
              />
            </>
          );
        })}
        <Typography>Total: {totalRevenue.revenue}</Typography>
      </FormGroup>
    </div>
  );
}
