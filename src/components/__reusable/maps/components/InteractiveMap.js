import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";
import countriesDebt from "../data/debt2gdp";
import externalDebt from "../data/externalDebt";
import ppp from "../data/ppp"
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

  const data = {
    debtToGdp: countriesDebt,
    externalDebt: externalDebt,
    ppp: ppp
  };
  const domains = {
    debtToGdp: [0, 240],
    externalDebt: [0, 23000000],
    ppp: [0, 24143],
  };
  const ranges = {
    debtToGdp: ["#ffedea", "#ff5233"],
    externalDebt: ["#ffedea", "#ff5233"],
    ppp: ["#ffedea", "#ff5233"],
  };
  const objectKeys = { debtToGdp: "debt2gdpratio", externalDebt: "externalDebt", ppp: "ppp" };

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
const MapChart = () => {
  const [value, setValue] = useState("female");

  const [content, setContent] = useState("");
  const [countries, setCountries] = useState(data["debtToGdp"]);
  const [domain, setDomain] = useState(domains["debtToGdp"]);
  const [range, setRange] = useState(ranges["debtToGdp"]);
  const [objectKey, setObjectKey] = useState(objectKeys["debtToGdp"]);
const min = Math.min(...countries.map((country) => country[objectKey]));
const max = Math.max(...countries.map((country) => country[objectKey]))
  // const min = Math.min.apply(Math, countries.map(country => country[objectKey]));
  // const max = Math.max.apply(Math, countries.map(country => country[objectKey]));
  // const colorScale = scaleLinear().domain([min, max]).range(range);
  const colorScale = scaleLinear().domain(domain).range(range);
  function getExpression(mappedCountry) {
    const expressions = {
      debtToGdp: `%${parseFloat(mappedCountry[objectKey]).toFixed(2)}`,
      externalDebt: `${roundedMil(parseFloat(mappedCountry[objectKey]).toFixed(2))}`,
      ppp: `${roundedTril(parseFloat(mappedCountry[objectKey]).toFixed(2))}`
    };
    return expressions[objectKey]
  }
  function handleChangeForm(event) {
    setValue(event.target.value);
    setMetric(event.target.value);
  }

  function setMetric(name) {
    setCountries(data[name]);
    setDomain(domains[name]);
    setRange(ranges[name]);
    setObjectKey(objectKeys[name]);
  }

  function setFill(mappedCountry) {
    return colorScale(mappedCountry[objectKey]);
  }

  function setToolTip(mappedCountry) {
    const expression = getExpression(mappedCountry);
    console.log("hello")
    setContent(
      `${mappedCountry.NAME} ${expression}`
    );
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
                  geographies.map((geo, index) => {
                    const mappedCountry = countries.find(
                      (country) =>
                        country.NAME === geo.properties.NAME ||
                        country.NAME === geo.properties.NAME_LONG
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
            <FormControlLabel
              labelPlacement="top"
              value="debtToGdp"
              control={<Radio color="primary" />}
              label="Debt to GDP"
            />
            <FormControlLabel
              labelPlacement="top"
              value="externalDebt"
              control={<Radio color="primary" />}
              label="External Debt"
            />
            <FormControlLabel
              labelPlacement="top"
              value="ppp"
              control={<Radio color="primary" />}
              label="PPP"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default memo(MapChart);