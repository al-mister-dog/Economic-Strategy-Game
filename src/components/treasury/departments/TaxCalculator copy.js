import { useState, useEffect } from "react";
import { Typography, Slider, FormGroup, makeStyles } from "@material-ui/core";
const taxRevenueData = [
  { receipt: "Business rates", revenue: 16 },
  { receipt: "Corporation Tax", revenue: 30 },
  { receipt: "Council Tax", revenue: 13 },
  { receipt: "Excise Duties", revenue: 36 },
  { receipt: "Income Tax", revenue: 88 },
  { receipt: "National Insurance", revenue: 56 },
  { receipt: "VAT", revenue: 54 },
  { receipt: "other", revenue: 56 },
];

const useStyles = makeStyles(() => ({
  form: {
    borderRadius: "20px",
    border: "3px solid black",
    boxSizing: "border-box",
    // height: "500px",
    padding: "20px",
    width: "320px",
  },
  label: {
    textAlign: "left",
  },
  slider: {
    width: "80%",
  },
}));
export default function Calculator() {
  const [taxRevenue, setTaxRevenue] = useState(taxRevenueData);
  const [totalRevenue, setTotalRevenue] = useState(349);

  function calculateTotalRevenue() {
    const total = taxRevenue.reduce((a, b) => ({
      revenue: a.revenue + b.revenue,
    }));
    setTotalRevenue(total.revenue);
  }

  const handleChangeSlider = (index) => (e, value) => {
    const newArr = [...taxRevenue];
    newArr[index].revenue = value;
    setTaxRevenue(newArr)
  };

  useEffect(() => {
    calculateTotalRevenue();
  }, [taxRevenue]);

  const classes = useStyles();
  return (
    <div className={classes.form}>
      <FormGroup>
        {taxRevenue.map((object, index) => {
          const {receipt, revenue} = object
          return (
            <div key={index}>
              <Typography className={classes.label} gutterBottom>
                {receipt}
              </Typography>
              <Slider
                className={classes.slider}
                aria-label="Temperature"
                defaultValue={revenue}
                onChange={handleChangeSlider(index)}
                valueLabelDisplay="auto"
                marks
                min={0}
                max={100}
              />
            </div>
          );
        })}
        <Typography>Total: {totalRevenue}</Typography>
      </FormGroup>
    </div>
  );
}
