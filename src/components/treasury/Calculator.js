import { useState, useEffect } from "react";
import { Paper, Typography, Slider, FormGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  calculatorContainer: {  
    padding: "20px",
    width: "17rem",
    height: "36.8rem",
    margin: "0 10px 0 10px",
  },
  label: {
    textAlign: "left",
  },
  slider: {
    width: "80%",
  },
}));
export default function Calculator({ data, budgetType, calculateTotalAmount }) {
  const [amount, setAmount] = useState(data);
  // const [totalAmount, setTotalAmount] = useState();


  const handleChangeSlider = (index) => (e, value) => {
    const newArr = [...amount];
    newArr[index].amount = value;
    setAmount(newArr);
  };

  useEffect(() => {
    calculateTotalAmount(amount, budgetType);
  }, [amount]);

  const classes = useStyles();
  return (
    <Paper className={classes.calculatorContainer}>
      <FormGroup >
        {amount.map((object, index) => {
          const { name, amount } = object;
          return (
            <div key={index}>
              <Typography className={classes.label} gutterBottom>
                {name}
              </Typography>
              <Slider
                className={classes.slider}
                aria-label="Temperature"
                defaultValue={amount}
                onChange={handleChangeSlider(index)}
                valueLabelDisplay="auto"
                marks
                min={0}
                max={100}
              />
            </div>
          );
        })}
      </FormGroup>
    </Paper>
  );
}
