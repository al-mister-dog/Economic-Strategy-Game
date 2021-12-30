import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { SET_CPI } from "../../../../state/actions"
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  Button,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  title: {
    marginBottom: "5px",
  },
  boxCpi: {
    padding: 25,
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
  },
  sliders: {
    display: "flex",
    flexDirection: "column",
  },
  slider: {
    display: "flex",
    height: "40px",
  },
  labelCategory: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#808080",
    textAlign: "left",
    width: "40%",
  },
  labelWeight: {
    width: "10%",
  },

  sliderTrack: {
    width: "50%",
  },
}));
function CpiWeightCalculator({cpiData, submitCpi}) {
  const [cpi, setCpi] = useState(cpiData);
  const [inflationIndex, setInflationIndex] = useState(0);
  const [inflationRate, setInflationRate] = useState(0);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  const max = 100;

  function total(arr) {
    return arr.reduce((acc, cur) => ({ weight: acc.weight + cur.weight }));
  }

  function handleChange(index, value) {
    //deep copy cpi
    const newCpi = cpi.map((item) => ({ ...item }));
    //set this weight to value
    newCpi[index].weight = value;
    // Calculate the difference between the intended maximum and the real total
    let unallocated = max - total(newCpi).weight;
    // Get a list of all the other slider keys
    // If the real total exceeds the intended maximum, sort sliders by lowest to highest value
    let slidersToChangeArr = newCpi.filter((el, i) => i !== index);
    //deep copy slidersToChangeArr
    let slidersToChange = slidersToChangeArr.map((item) => ({ ...item }));
    if (unallocated > 0) {
      slidersToChange.sort((a, b) => b.weight - a.weight);
    } else {
      slidersToChange.sort((a, b) => a.weight - b.weight);
    }
    //number of sliders left to iterate through
    let lengthMinusOne = cpi.length - 1;
    let sliderCount = lengthMinusOne;
    // Iterate through sliders
    slidersToChange.forEach((item, index) => {
      // In a perfect world, add or subtract the same amount from all remaining sliders
      let targetAllocation = unallocated / sliderCount;
      let result = slidersToChange[index].weight + targetAllocation;
      // If we go under the minimum value of a slider, change the target allocation so that the result will be 0
      if (result < 0) {
        targetAllocation -= result;
      }
      // Add or subtract the target allocation
      slidersToChange[index].weight += targetAllocation;
      //set new values to newCpi
      const found = newCpi.find(
        (el) => el.category === slidersToChange[index].category
      );
      const foundIndex = newCpi.indexOf(found);
      newCpi[foundIndex] = slidersToChange[index];
      // Recalculate the reamining allocation
      unallocated -= targetAllocation;
      sliderCount -= 1;
    });
    setCpi(newCpi);
  }
  const handleChangeSlider = (index) => (e, value) => {
    setIndex(index);
    setValue(value);
  };
  function getInflationRate() {
    let weightedIndex = [];
    const priceIndex = cpi.map((i) => {
      return 100 + i.change;
    });

    cpi.forEach((item, index) => {
      weightedIndex = [
        ...weightedIndex,
        (item.weight / 10) * priceIndex[index],
      ];
    });
    const weightedIndexSum = weightedIndex.reduce((a, b) => a + b) / 10;

    const newInflationIndex = weightedIndexSum;
    const newInflationRate = newInflationIndex - 100;

    setInflationIndex(newInflationIndex.toFixed(2));
    setInflationRate(newInflationRate.toFixed(2));
  }

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      handleChange(index, value);
    }
  }, [value]);
  useEffect(() => {
    getInflationRate();
  }, [cpi]);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.boxCpi}>
        <Typography variant="h6">Inflation index: {inflationIndex}</Typography>
        <Typography variant="h6">Inflation rate: %{inflationRate}</Typography>
        <Typography align="left" variant="h6" className={classes.title}>
          Weight allocation of items to Consumer Prices Index
        </Typography>
        <FormGroup className={classes.sliders}>
          {cpi.map((object, index) => {
            const { category, weight, change } = object;
            return (
              <div key={index} className={classes.slider}>
                <Typography className={classes.labelCategory} variant="body2">
                  {category}:
                </Typography>
                <Typography className={classes.labelChange}>
                  %{change}
                </Typography>
                <Typography className={classes.labelWeight}>
                  {parseFloat(weight.toFixed(2))}
                </Typography>
                <Slider
                  className={classes.sliderTrack}
                  value={parseFloat(weight.toFixed(2))}
                  onChange={handleChangeSlider(index)}
                  aria-labelledby="discrete-slider-custom"
                  valueLabelDisplay="auto"
                  marks
                  min={0}
                  max={100}
                />
              </div>
            );
          })}
        </FormGroup>
        <Button variant="outlined" onClick={() => submitCpi(cpi)}>Submit New Weights</Button>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return { cpiData: state.cpi };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitCpi: (cpi) =>
      dispatch({ type: SET_CPI, payload: { cpi } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CpiWeightCalculator);