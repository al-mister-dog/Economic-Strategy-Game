const interestRate = 0.05
const inflationRate = 0.02
const principal = 1000

function simpleInterestDecimal(amount, rate) {
  return amount * rate
}
function simpleInterestPercent(amount, rate) {
  return amount * rate / 100
}
function realInterestRate(interestRate, inflationRate) {
  return interestRate - inflationRate
}

function getSimpleInterest(principal, interest, frequency) {
  let returns = [];
  for (let i = 0; i < frequency; i++) {
    principal += interest;
    returns = [...returns, principal.toFixed(2)];
  }
  return returns;
}

function getCompoundInterest(principal, interest, frequency, callback) {
  let futures = []
  for (let i = 0; i < frequency; i++) {
    principal += interest
    futures = [...futures, principal.toFixed(2)]
    interest = callback(principal, interestRate)
  }
  return futures
}


const interests = {
  simpleInterestDecimal(amount, rate) {
    return amount * rate
  },
  simpleInterestPercent(amount, rate) {
    return amount * rate / 100
  },
  realInterestDecimal(amount) {
    return simpleInterestDecimal(amount, realInterestRate(interestRate, inflationRate))
  },
  realInterestPercent(amount) {
    return simpleInterestDecimal(amount, realInterestRate(interestRate, inflationRate))
  }
}



const interestDecimal = simpleInterestDecimal(principal, interestRate)
const interestPercent = simpleInterestPercent(principal, interestRate)
const realInterestDecimal = simpleInterestDecimal(principal, realInterestRate(interestRate, inflationRate))
const realInterestPercent = simpleInterestPercent(principal, realInterestRate(interestRate, inflationRate))
console.log(getCompoundInterest(principal, interestDecimal, 10, interests.simpleInterestDecimal))
console.log(getCompoundInterest(principal, realInterestDecimal, 10, interests.realInterestDecimal))