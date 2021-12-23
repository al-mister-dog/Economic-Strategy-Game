const principal = 1000
const interestRate = 0.05
const inflationRate = 0.02
const interest = simpleInterest(principal, interestRate)
const pInterest = simpleInterestPercent(principal, interestRate)
const realInterest = simpleInterest(principal, realInterestRate(interestRate, inflationRate))

function simpleInterest(amount, rate) {
  return amount * rate
}
function simpleInterestPercent(amount, rate) {
  return amount * rate / 100
}

function realInterestRate(interestRate, inflationRate) {
  return interestRate - inflationRate
}



function simpleInterestLoop(principal, interest, frequency) {
  let returns = [];
  for (let i = 0; i < frequency; i++) {
    principal += interest;
    returns = [...returns, principal.toFixed(2)];
  }
  return returns;
}

function compoundDecimalInterestLoop(principal, interest, frequency) {
  let returns = []
  for (let i = 0; i < frequency; i++) {
    principal += interest
    let amount = principal
    returns = [...returns, amount.toFixed(2)]
    interest = simpleInterest(principal, interestRate)
  }
  return returns
}

function compoundPercentInterestLoop(principal, interest, frequency) {
  let returns = []
  for (let i = 0; i < frequency; i++) {
    principal += interest
    let amount = principal
    returns = [...returns, amount.toFixed(2)]
    interest = simpleInterestPercent(principal, interestRate)
  }
  return returns
}



console.log(simpleInterestLoop(principal, interest, 10))
console.log(compoundDecimalInterestLoop(principal, interest, 10))
console.log(compoundDecimalInterestLoop(principal, realInterest, 10))
console.log(compoundPercentInterestLoop(principal, pInterest, 10))
