export default class InterestCalculator {
  constructor(principal, interestRate, inflationRate, times) {
    this.principal = principal;
    this.interestRate = interestRate;
    this.inflationRate = inflationRate;
    this.times = times;
  }
  realInterestRate(interestRate, inflationRate) {
    return interestRate - inflationRate;
  }
  simpleInterestDecimal(amount, rate) {
    return amount * rate;
  }
  simpleInterestPercent(amount, rate) {
    return (amount * rate) / 100;
  }
  realInterestDecimal(amount, rate, inflationRate) {
    function simpleInterestDecimal(amount, rate) {
      return amount * rate;
    }
    const realInterestRate = rate - inflationRate;
    return simpleInterestDecimal(amount, realInterestRate);
  }
  realInterestPercent(amount, rate, inflationRate) {
    function simpleInterestPercent(amount, rate) {
      return (amount * rate) / 100;
    }
    const realInterestRate = rate - inflationRate;
    return simpleInterestPercent(amount, realInterestRate);
  }

  getSimpleInterest(principal, interest, frequency) {
    let returns = [];
    for (let i = 0; i < frequency; i++) {
      principal += interest;
      returns = [...returns, principal.toFixed(2)];
    }
    return returns;
  }

  getCompoundInterest(principal, interest, frequency, callback) {
    let futures = [];
    for (let i = 0; i < frequency; i++) {
      principal += interest;
      futures = [...futures, principal.toFixed(2)];
      interest = callback(principal, this.interestRate, this.inflationRate);
    }
    return futures;
  }

  // getNominalInterestDecimal() {
  //   const interest = this.simpleInterestDecimal(
  //     this.principal,
  //     this.interestRate
  //   );
  //   return this.getCompoundInterest(this.principal, interest, this.times);
  // }
  // getNominalInterestPercent() {
  //   const interest = this.simpleInterestPercent(
  //     this.principal,
  //     this.interestRate
  //   );
  //   return this.getCompoundInterest(this.principal, interest, this.times);
  // }
  getRealInterestDecimal() {
    const interest = this.simpleInterestDecimal(
      this.principal,
      this.realInterestRate(this.interestRate, this.inflationRate)
    );
    return this.getCompoundInterest(this.principal, interest, this.times);
  }
  getRealInterestPercent() {
    const interest = this.simpleInterestPercent(
      this.principal,
      this.realInterestRate(this.interestRate, this.inflationRate)
    );
    return this.getCompoundInterest(this.principal, interest, this.times);
  }
  getCompoundInterestDecimal() {
    const interest = this.simpleInterestDecimal(
      this.principal,
      this.interestRate
    );
    return this.getCompoundInterest(
      this.principal,
      interest,
      this.times,
      this.simpleInterestDecimal
    );
  }
  getCompoundInterestPercent() {
    const interest = this.simpleInterestPercent(
      this.principal,
      this.interestRate
    );
    return this.getCompoundInterest(
      this.principal,
      interest,
      this.times,
      this.simpleInterestPercent
    );
  }
  getRealCompoundInterestDecimal() {
    const interest = this.simpleInterestDecimal(
      this.principal,
      this.realInterestRate(this.interestRate, this.inflationRate)
    );
    
    return this.getCompoundInterest(
      this.principal,
      interest,
      this.times,
      this.realInterestDecimal
    );
  }
  getRealCompoundInterestPercent() {
    const interest = this.simpleInterestPercent(
      this.principal,
      this.realInterestRate(this.interestRate, this.inflationRate)
    );
    return this.getCompoundInterest(
      this.principal,
      interest,
      this.times,
      this.realInterestPercent
    );
  }
}