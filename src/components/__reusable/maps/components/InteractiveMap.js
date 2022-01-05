import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";
import countriesDebt from "../json/debt2gdp";
import externalDebt from "../json/externalDebt";
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
};
const domains = {
  debtToGdp: [0, 240],
  externalDebt: [0, 23000000],
};
const ranges = {
  debtToGdp: ["#ffedea", "#ff5233"],
  externalDebt: ["#ffedea", "#ff5233"],
};
const objectVars = { debtToGdp: "debt2gdpratio", externalDebt: "externalDebt" };

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = () => {
  const [value, setValue] = useState("female");

  const [content, setContent] = useState("");
  const [countries, setCountries] = useState(data["debtToGdp"]);
  const [domain, setDomain] = useState(domains["debtToGdp"]);
  const [range, setRange] = useState(ranges["debtToGdp"]);
  const [objectVar, setObjectVar] = useState(objectVars["debtToGdp"]);

  const colorScale = scaleLinear().domain(domain).range(range);

  function handleChangeForm(event) {
    setValue(event.target.value);
    setMetric(event.target.value);
  }

  function setMetric(name) {
    setCountries(data[name]);
    setDomain(domains[name]);
    setRange(ranges[name]);
    setObjectVar(objectVars[name]);
  }

  function setFill(mappedCountry) {
    return colorScale(mappedCountry[objectVar]);
  }

  function setToolTip(mappedCountry) {
    setContent(
      `${mappedCountry.NAME} %${parseFloat(mappedCountry[objectVar]).toFixed(
        2
      )}`
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
            aria-label="debt"
            name="debt1"
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
              value="other"
              control={<Radio color="primary" />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default memo(MapChart);
