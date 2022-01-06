import { useState, useEffect, memo } from "react";
import ReactTooltip from "react-tooltip";

import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import {
  Sphere,
  Graticule,
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { scaleLinear } from "d3-scale";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const roundedMil = (num) => {
  if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "Tn";
  } else if (num > 10000) {
    return Math.round(num / 100) / 10 + "Bn";
  } else {
    return Math.round(num / 1000) / 10 + "Mn";
  }
};
const roundedTril = (num) => {
  if (num > 1000) {
    return Math.round(num / 100) / 10 + "Tn";
  } else if (num > 100) {
    return Math.round(num / 10) / 10 + "Bn";
  } else {
    return Math.round(num / 100) / 10 + "Mn";
  }
};
const MapChart = ({ countries, keys }) => {
  const [value, setValue] = useState("female");

  const [content, setContent] = useState("");
  const [objectKey, setObjectKey] = useState("gdp");
  // const [min, setMin] = useState(Math.min(...countries.map((country) => country[objectKey])))
  // const [max, setMax] = useState(Math.max(...countries.map((country) => country[objectKey])))
  const min = Math.min(...countries.map((country) => country[objectKey]));
  const max = Math.max(...countries.map((country) => country[objectKey]));
  // const [domain, setDomain] = useState([min, max]);
  const [range, setRange] = useState(["#ffedea", "#ff5233"]);
  const colorScale = scaleLinear().domain([min, max]).range(range);

  function getExpression(mappedCountry) {
    const expressions = {
      debtToGdp: `%${parseFloat(mappedCountry[objectKey]).toFixed(2)}`,
      externalDebt: `${roundedMil(
        parseFloat(mappedCountry[objectKey]).toFixed(2)
      )}`,
      ppp: `${roundedTril(parseFloat(mappedCountry[objectKey]).toFixed(2))}`,
    };
    return expressions[objectKey];
  }
  function handleChangeForm(event) {
    setValue(event.target.value);
    setMetric(event.target.value);
  }

  function setMetric(name) {
    setObjectKey(name);
    // setMin(Math.min(...countries.map((country) => country[objectKey])))
    // setMax(Math.max(...countries.map((country) => country[objectKey])))
  }

  function setFill(mappedCountry) {
    return colorScale(mappedCountry[objectKey]);
  }

  function setToolTip(mappedCountry) {
    const expression = getExpression(mappedCountry);

    setContent(`${mappedCountry.NAME} ${mappedCountry[objectKey]}`);
  }
useEffect(() => {
  console.log(objectKey)
  console.log({min, max})
}, [min, max])
  return (
    <>
      <Box sx={{ border: "1px solid #d7d7d7", borderRadius: "5px" }}>
        <div style={{ width: "100%", height: "60vh" }}>
          <ComposableMap
            data-tip=""
            width={900}
            height={400}
            projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
          >
            <ZoomableGroup>
              <Sphere stroke="#000" strokeWidth={0.3} />
              <Graticule stroke="#000" strokeWidth={0.3} />
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const mappedCountry = countries.find(
                      (country) => country.iso === geo.properties.ISO_A3
                    );

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={mappedCountry ? setFill(mappedCountry) : "#333"}
                        // fill={mappedCountry ? colorScale : "#333"}
                        onMouseEnter={() => {
                          mappedCountry
                            ? setToolTip(mappedCountry)
                            : setContent("no data");
                        }}
                        onMouseLeave={() => {
                          setContent("");
                        }}
                        style={{
                          hover: {
                            fill: "#2D4263",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <ReactTooltip>{content}</ReactTooltip>
        </div>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="radiogroupmap"
            name="radiogroupmap1"
            value={value}
            onChange={handleChangeForm}
          >
            {keys.map((key) => {
              const { name, category, label } = key;
              return (
                <FormControlLabel
                  labelPlacement="top"
                  value={name}
                  control={<Radio color="primary" />}
                  label={label}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default memo(MapChart);
