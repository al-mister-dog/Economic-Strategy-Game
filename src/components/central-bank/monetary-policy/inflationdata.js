const cpih = [
  { category: "Food & non-alcoholic beverages", weight: 8.9, change: 0 },
  { category: "Alcohol & tobacco", weight: 3.5, change: 0 },
  { category: "Clothing & footwear", weight: 5.9, change: 0 },
  { category: "Housing & household services", weight: 32.8, change: 0 },
  { category: "Furniture & household goods", weight: 4.9, change: 0 },
  { category: "Health", weight: 2.0, change: 0 },
  { category: "Transport", weight: 10.7, change: 0 },
  { category: "Communication", weight: 1.9, change: 0 },
  { category: "Recreation & culture", weight: 11.2, change: 0 },
  { category: "Education", weight: 3.0, change: 0 },
  { category: "Restaurants & hotels", weight: 6.9, change: 0 },
  { category: "Miscellaneous goods & services", weight: 8.3, change: 0 },
];

function getInflationRate(cpih) {
  let weightedIndex = [];

  let priceIndex = cpih.map((i) => {
    return 100 + i.change;
  });

  cpih.forEach((item, index) => {
    weightedIndex = [...weightedIndex, (item.weight / 10) * priceIndex[index]];
  });
  
  let weightedIndexSum = weightedIndex.reduce((a, b) => a + b) / 10;
  
  const inflationIndex = weightedIndexSum
  const inflationRate = inflationIndex - 100 
  return {inflationIndex: inflationIndex.toFixed(2), inflationRate: inflationRate.toFixed(2)}
}


let total = cpih.reduce((a, b) => ({
  weight: a.weight + b.weight,
}));

let increaseOne = cpih.map((item, b) => {
  if (item.category === "Transport") {
    item.change = item.change + 1;
  }
  return item;
});

function setCpiWeight() {

}

function normalizeCpiWeight(arr, change, selectedIndex) {
  const length = arr.length;
  const distributedWeight = change / (length - 1);
  const newArr = arr.map((item, index) => {
    if (index !== selectedIndex) {
      item.weight -= distributedWeight;
    } else {
      item.weight += change;
    }
    return item;
  });
  return newArr
}