function simpleInterestLoop(principal, interest, frequency) {
  let returns = [];
  for (let i = 0; i < frequency; i++) {
    principal += interest;
    returns = [...returns, principal.toFixed(2)];
  }
  return returns;
}

function compoundInterestLoop(principal, interest, frequency) {
  let returns = []
  for (let i = 0; i < frequency; i++) {
    principal = principal + interest
    returns = [...returns, principal.toFixed(2)]
    // principal += 0.01 WORK ON THIS SMALL INCREMENT
  }
  return returns
}

export function getAnnualCompoundInterest(principal, interestRate, frequency) {
  const interest = interestRate
  return compoundInterestLoop(principal, interest, frequency);
}
export function getMonthlyCompoundInterest(principal, interestRate, frequency) {
  const interest = interestRate / 100 / 12 * principal
  return compoundInterestLoop(principal, interest, frequency);
}
export function getMonthlyCompoundBreakDown(principal, interestRate, annualFrequency) {
  return getMonthlyCompoundInterest(principal, interestRate, annualFrequency * 12)
}
export function getAnnualSimpleInterest(principal, interestRate, frequency) {
  const interest = interestRate
  return simpleInterestLoop(principal, interest, frequency);
}
export function getMonthlySimpleInterest(principal, interestRate, frequency) {
  const interest = interestRate / 100 / 12 * principal
  return simpleInterestLoop(principal, interest, frequency);
}
export function getMonthlySimpleBreakDown(principal, interestRate, annualFrequency) {
  return getMonthlySimpleInterest(principal, interestRate, annualFrequency * 12)
}