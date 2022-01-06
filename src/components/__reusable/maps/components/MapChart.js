import { useState, useEffect, memo } from "react";
import ReactTooltip from "react-tooltip";
import { roundToMillion, roundToBillion } from "../../tools/RoundNums";
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

const MapChart = ({ countries, keys }) => {
  const [value, setValue] = useState("gdp");
  const [content, setContent] = useState("");
  const [objectKey, setObjectKey] = useState("gdp");
  const [range, setRange] = useState(["#ffedea", "#ff5233"]);
  const min = Math.min(...countries.map((country) => country[objectKey]));
  const max = Math.max(...countries.map((country) => country[objectKey]));
  const colorScale = scaleLinear().domain([min, max]).range(range);

  function getExpression(mappedCountry) {
    const expressions = {
      percent: `${parseFloat(mappedCountry[objectKey]).toFixed(2)}%`,
      million: `${roundToMillion(
        parseFloat(mappedCountry[objectKey]).toFixed(2)
      )}`,
      billion: `${roundToBillion(
        parseFloat(mappedCountry[objectKey]).toFixed(2)
      )}`,
    };
    const target = keys.find((el) => el.name === objectKey);
    return expressions[target.unit];
  }

  function handleChangeForm(event) {
    setValue(event.target.value);
    setMetric(event.target.value);
  }

  function setMetric(name) {
    setObjectKey(name);
  }

  function setFill(mappedCountry) {
    return colorScale(mappedCountry[objectKey]);
  }

  function setToolTip(mappedCountry) {
    const expression = getExpression(mappedCountry);
    setContent(`${mappedCountry.NAME}: ${expression}`);
  }

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
              const { name, label } = key;
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
