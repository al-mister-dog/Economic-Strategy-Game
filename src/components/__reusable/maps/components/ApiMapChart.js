import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";
import { roundToMillion, roundToBillion } from "../../tools/RoundNums";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  makeStyles,
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
const keysData = {
  govFinance: [
    {
      name: "generalGovTotalExp",
      label: "General Government Total Expenditure",
      unit: "percent",
      category: "government finance",
    }, 
    { 
      name: "generalGovRevenue",
      label: "General Government Revenue",
      unit: "percent",
      category: "government finance"
    },
    { 
      name: "generalGovNetLendBorrow",
      label: "General Government Net Lending/Borrowing",
      unit: "percent",
      category: "government finance"
    },
    { 
      name: "generalGovStrucBal",
      label: "General Government Structural Balance",
      unit: "percent",
      category: "government finance"
    },
    { 
      name: "genGovNetPriLenBor",
      label: "General Government Net Primary Lending/Borrowing",
      unit: "percent",
      category: "government finance"
    },
    { 
      name: "generalGovGrossDebt",
      label: "General Government Gross Debt",
      unit: "percent",
      category: "government finance"
    },
  ],
  balanceOfPayments: [
    { 
      name: "currentAccBal",
      label: "Current Account Balance",
      unit: "billion",
      category: "balance of payments"
    },
    { 
      name: "currentAccBalGDP",
      label: "Current Account Balance GDP",
      unit: "percent",
      category: "balance of payments"    
    },
  ],
  monetary: [
    {
      name: "inflationAvgCP",
      label: "Inflation Average Consumer Prices",
      unit: "percent",
      category: "monetary",
    },
    {
      name: "inflationEndOfPeriodCP",
      label: "Inflation Average End of Period Consumer Prices",
      unit: "percent",
      category: "monetary",
    },
  ],
  nationalAccounts: [
    {
      name: "gdpConstPricePct",
      label: "Real GDP Growth",
      unit: "percent",
      category: "national accounts",
    },
    {
      name: "ppp",
      label: "Purchasing Power Parity",
      unit: "billion",
      category: "national accounts",
    },
    {
      name: "gdpConstPrice",
      path: "/api/v1/performance/gdpconstantprice",
      label: "Gross Domestic Product",
      unit: "billion",
      category: "national account",
    },
  ],
  trade: [
    {
      name: "exportVolGdsSvcs",
      label: "Export Volume of Goods and Services",
      unit: "percentChange",
      category: "trade",
    },
    {
      name: "exportVolGds",
      label: "Export Volume of Goods",
      unit: "percentChange",
      category: "trade",
    },
    {
      name: "importVolGdsSvcs",
      label: "Import Volume of Goods and Services",
      unit: "percentChange",
      category: "trade",
    },
    {
      name: "importVolGds",
      label: "Import Volume of Goods",
      unit: "percentChange",
      category: "trade",
    },
  ],
  people: [
    {
      name: "unemployment",
      label: "Unemployment: Percent of Labor Force",
      unit: "percent",
      category: "people",
    },
  ]
}
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ countries, keys }) => {

  const [radioGroupValue, setRadioGroupValue] = useState(keys[0].name);
  const [objectKey, setObjectKey] = useState(keys[0].name);
  const [content, setContent] = useState("");
  const min = Math.min(...countries.map((country) => country.amount));
  const max = Math.max(...countries.map((country) => country.amount));
  const range = ["#ffe9e3", "#ff410d"];
  const colorScale = scaleLinear().domain([min, max]).range(range);

  function getExpression(country) {
    const expressions = {
      int: `${country.amount}`,
      percent: `${parseFloat(country.amount).toFixed(2)}%`,
      percentChange: `${parseFloat(country.amount).toFixed(
        2
      )}% change`,
      million: `${roundToMillion(
        parseFloat(country.amount).toFixed(2)
      )}`,
      billion: `${roundToBillion(
        parseFloat(country.amount).toFixed(2)
      )}`,
    };
    
    return expressions[country.unit];
  }

  function handleChangeForm(event) {
    setRadioGroupValue(event.target.value);
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
      <Box sx={{ border: "1px solid #d7d7d7", borderRadius: "5px", padding: "10px" }}>
        <div style={{ width: "100%" }}>
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
                      (country) => country.isoCode === geo.properties.ISO_A3
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
          // sx={{display: "flex", }}
          row
            aria-label="radiogroupmap"
            name="radiogroupmap1"
            value={radioGroupValue}
            onChange={handleChangeForm}
          >
            {keys.map((key) => {
              const { name, label } = key;
              return (
                <FormControlLabel
                  labelPlacement="right"
                  value={name}
                  control={<Radio color="primary" />}
                  label={<Typography style={{fontSize: "0.8rem"}}>{label}</Typography>}
                  // label={label}
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
