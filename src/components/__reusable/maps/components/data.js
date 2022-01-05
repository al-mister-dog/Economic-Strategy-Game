import countriesDebt from "../data/debt2gdp";
import externalDebt from "../data/externalDebt";
import ppp from "../data/ppp";
import gdpConstant from "../data/gdpConstant"

const data = {
  debt: {
    dataSet: {
      debtToGdp: countriesDebt,
      externalDebt: externalDebt,
    },
    domains: {
      debtToGdp: [0, 240],
      externalDebt: [0, 23000000],
    },
    ranges: {
      debtToGdp: ["#ffedea", "#ff5233"],
      externalDebt: ["#ffedea", "#ff5233"],
    },
    objectVars: { debtToGdp: "debt2gdpratio", externalDebt: "externalDebt" }
  },
  money: {
    dataSet: {
      ppp: ppp,
      gdpContant: gdpConstant
    },
    domains: {
      ppp: [0, 24143],
    },
    ranges: {
      ppp: ["#ffedea", "#ff5233"],
    },
    objectVars: { ppp: "ppp", gdpConstant: "realGdpGrowth" }
  }
}
