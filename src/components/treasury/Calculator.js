import { useState, useEffect } from "react";
import { Typography, Slider, FormGroup, makeStyles } from "@material-ui/core";
import "./Treasury.css"
const useStyles = makeStyles(() => ({

  label: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#808080",
    textAlign: "left",
    width: "50%",
  },
  sliders: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  slider: {
    width: "50%",
  },
}));
export default function Calculator({ data, settingBudget, budgetType, calculateTotalAmount }) {
  const [amount, setAmount] = useState(data);

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
    <>
      <FormGroup className={classes.sliders}>
        {amount.map((object, index) => {
          const { name, amount } = object;
          return (
            <div key={index} className="slider">
              <Typography className={classes.label} variant="body2">
                {name}:
              </Typography>
              <Slider
                className={classes.slider}
                aria-label="Temperature"
                disabled={!settingBudget}
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
    </>
  );
}
