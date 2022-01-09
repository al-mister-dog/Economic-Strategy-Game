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
  return consumption + investment + govSpending + (exports - imports);
}

const consumption = 10;
const investment = 10;
const govSpending = 10;
const exports = 10;
const imports = 10;

const saving = 10;
const taxation = 10;

function anotherApproach(consumption, saving, taxation) {
  return consumption + saving + taxation;
}
console.log(getGdp(consumption, investment, govSpending, exports, imports));
console.log(anotherApproach(consumption, saving, taxation));

const savingAndTaxation = investment + govSpending + (exports - imports);
 

const traditionalBank = {
  assets: [
    { asset: "loans" },
    { asset: "securities" }, 
    { asset: "cash", liquid: Boolean }],//does the bank have the ability to make payments to depositors - sell securities
  liabilities: [
    { liability: "deposits" },
    { liability: "other borrowing" },
    { liability: "net worth", solvent: Boolean },//are the assets worth more than the liabilities - net worth more than zero
  ],
};

const shadowBank = {
  assets: [
    { asset: "residential mortgage backed securities" }, //loans turned into a bond
    { asset: "interest rate swap" }, //getting rid of interest risk involved
    { asset: "credit default swap" }], //getting rid of credit risk by selling it off - so you have collateral for wholsale in the money market
  liabilities: [
    { liability: "money market borrowing" }, //money market mutual funds - corporate investors - using repurchase agreements, eurodollars, asset back commercial paper
    { liability: "repurchase agreements" },
    { liability: "eurodollars" },
    { liability: "asset backed commercial paper" },
  ], //liquidity in shadow banks is about being able to roll over the funding. short term. if money market freezes you have to liquidate
}
/**
 * Bankers think more about liquidity. They have to clear their accounts
 * Economists think more about solvency
 */