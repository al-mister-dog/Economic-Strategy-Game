
// function getSectoralBalance(savings, investment, imports, exports, taxRevenue, outlays) {
//   return (savings - investment) + (imports - exports) + (taxRevenue - outlays)
// }

// const savings = 10
// const investment = 12
// const imports = 5
// const exports = 7
// const taxRevenue = 3
// const outlays = 12

// console.log(getSectoralBalance(savings, investment, imports, exports, taxRevenue, outlays))

function getGdp(consumption, investment, govSpending, exports, imports) {
  return consumption + investment + govSpending + (exports - imports)
}

const consumption = 10
const investment = 10
const govSpending = 10
const exports  = 10
const imports = 10

const saving = 10
const taxation = 10

function anotherApproach(consumption, saving, taxation) {
  return consumption + saving + taxation
}
console.log(getGdp(consumption, investment, govSpending, exports, imports))
console.log(anotherApproach(consumption, saving, taxation))

const savingAndTaxation = investment + govSpending + (exports - imports)
console.log(savingAndTaxation)

