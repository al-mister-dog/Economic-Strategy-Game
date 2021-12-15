import { useState, useEffect } from "react";
import { Typography, Slider, FormGroup, makeStyles } from "@material-ui/core";

const spendingData = [
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
  const [spending, setSpending] = useState(spendingData);
  const [totalSpending, setTotalSpending] = useState(349);

  function calculateTotalExpenditure() {
    const total = spending.reduce((a, b) => ({
      expenditure: a.expenditure + b.expenditure,
    }));
    setTotalSpending(total.expenditure);
  }

  const handleChangeSlider = (index) => (e, value) => {
    const newArr = [...spending];
    newArr[index].expenditure = value;
    setSpending(newArr)
  };

  useEffect(() => {
    calculateTotalExpenditure();
  }, [spending]);

  const classes = useStyles();
  return (
    <div className={classes.form}>
      <FormGroup>
        {spending.map((object, index) => {
          const {department, expenditure} = object
          return (
            <div key={index}>
              <Typography className={classes.label} gutterBottom>
                {department}
              </Typography>
              <Slider
                className={classes.slider}
                aria-label="Temperature"
                defaultValue={expenditure}
                onChange={handleChangeSlider(index)}
                valueLabelDisplay="auto"
                marks
                min={0}
                max={100}
              />
            </div>
          );
        })}
        <Typography>Total: {totalSpending}</Typography>
      </FormGroup>
    </div>
  );
}
