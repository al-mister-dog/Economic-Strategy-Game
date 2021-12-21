//NOMINAL = SIMPLE
const interestRate = 3.25
const inflationRate = 2
let principal = 100

function realInterestRate() {
  return interestRate - inflationRate
}

function nominalInterest(amount, interestRate) {
  return amount * interestRate
}

function annual(interestRate) {
  return interestRate / 100
}

function monthly(amount) {
  return amount / 12
}

function annualNominalInterest(amount, interestRate) {
  return nominalInterest(amount, annual(interestRate)).toFixed(2)
}

function monthlyNominalInterest(amount, interestRate) {
  return nominalInterest(amount, monthly(annual(interestRate))).toFixed(2)
}

const annualReturns = annualNominalInterest(1000000, interestRate)
const adjustedAnnualReturns = annualNominalInterest(1000000, realInterestRate())

const monthlyReturns = monthlyNominalInterest(1000000, interestRate)
const adjustedMonthlyReturns = monthlyNominalInterest(1000000, realInterestRate())
