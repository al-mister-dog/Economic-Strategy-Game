import { useState, useEffect } from "react";
import { Typography, Slider, FormGroup, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  title: {
    marginBottom: "5px",
  },
  label: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#808080",
    textAlign: "left",
    width: "40%",
  },
  num: {
    width: "10%",
  },
  sliders: {
    display: "flex",
    flexDirection: "column",
  },
  slider: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
    // width: "50%"
  },
  sliderTrack: {
    width: "40%",
    // height: "100px"
    // margin: "20px"
  },
}));
export default function CpiWeightCalculator() {
  const data = [
    {
      category: "Food & non-alcoholic beverages",
      weight: 8.9,
      change: 0,
      min: 0,
      max: 0,
    },
    { category: "Alcohol & tobacco", weight: 3.5, change: 0, min: 0, max: 0 },
    { category: "Clothing & footwear", weight: 5.9, change: 0, min: 0, max: 0 },
    {
      category: "Housing & household services",
      weight: 32.8,
      change: 0,
      min: 0,
      max: 0,
    },
    {
      category: "Furniture & household goods",
      weight: 4.9,
      change: 0,
      min: 0,
      max: 0,
    },
    { category: "Health", weight: 2.0, change: 0, min: 0, max: 0 },
    { category: "Transport", weight: 10.7, change: 0, min: 0, max: 0 },
    { category: "Communication", weight: 1.9, change: 0, min: 0, max: 0 },
    {
      category: "Recreation & culture",
      weight: 11.2,
      change: 0,
      min: 0,
      max: 0,
    },
    { category: "Education", weight: 3.0, change: 0, min: 0, max: 0 },
    {
      category: "Restaurants & hotels",
      weight: 6.9,
      change: 0,
      min: 0,
      max: 0,
    },
    {
      category: "Miscellaneous goods & services",
      weight: 8.3,
      change: 0,
      min: 0,
      max: 0,
    },
  ];
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  const max = 100;

  function valuetext(value) {
    // return `${parseFloat(value.toFixed(2))}`
    return 'A'
  }
  function total() {
    return data.reduce((acc, cur) => ({ weight: acc.weight + cur.weight }));
  }
  function handleChange(index, value) {
    const newArr = [...data];
    newArr[index].weight = value;
    let unallocated = max - total(newArr).weight;
    let slidersToChange = newArr.filter((el, i) => i !== index);
    if (unallocated > 0) {
      slidersToChange.sort((a, b) => b.weight - a.weight);
    } else {
      slidersToChange.sort((a, b) => a.weight - b.weight);
    }
    let sliderCount = data.length;

    newArr.map((item, index) => {
      let targetAllocation = unallocated / sliderCount;
      let result = item.weight + targetAllocation;
      if (result < 0) {
        targetAllocation -= result;
      }
      item.weight += targetAllocation;
      unallocated -= targetAllocation;
      sliderCount -= 1;
      return item
    });
    setItems(newArr)
  }
  const handleChangeSlider = (index) => (e, value) => {
    setIndex(index)
    setValue(value)
  };

  useEffect(() => {
    handleChange(index, value)
  }, [index, value])

  const classes = useStyles();
  return (
    <>
      <Typography align="left" variant="h6" className={classes.title}>
        bla
      </Typography>
      <FormGroup className={classes.sliders}>
        {items.map((object, index) => {
          const { category, weight } = object;
          return (
            <div key={index} className={classes.slider}>
              <Typography className={classes.label} variant="body2">
                {category}:
              </Typography>
              <Typography className={classes.num}>{parseFloat(weight.toFixed(2))}</Typography>
              <Slider
                className={classes.sliderTrack}
                value={parseFloat(weight.toFixed(2))}
                onChange={handleChangeSlider(index)}
                aria-labelledby="discrete-slider-custom"
                getAriaValueText={valuetext}
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
