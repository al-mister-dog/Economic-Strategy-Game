import { useState, useEffect, memo } from "react";
import ReactTooltip from "react-tooltip";
import countriesDebt from "../json/debt2gdp";
import externalDebt from "../json/externalDebt";

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
  const domains = {
    "debtToGdp": [0, 240],
    "externalDebt": [0, 23000000]
  }
const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const colorScale = scaleLinear().domain(domains["debtToGdp"]).range(["#ffedea", "#ff5233"]);
const MapChart = () => {
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState(countriesDebt);
  function setMetric() {

  }
  return (
    <>
      <div style={{ width: "60vw", height: "60vh" }}>
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
                  const isos = countries.find(
                    (s) => s.NAME === geo.properties.NAME || s.NAME === geo.properties.NAME_LONG
                  );

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isos ? colorScale(isos["debt2gdpratio"]) : "#333"}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setContent(
                          `${NAME} %${parseFloat(isos["debt2gdpratio"]).toFixed(
                            2
                          )}`
                        );
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                      style={{
                        // default: {
                        //   fill: "#D6D6DA",
                        //   outline: "none",
                        // },
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
    </>
  );
};

export default memo(MapChart);
