const store = {
  bankRate: 0.25,
  inflationRate: 1.89,
  inflationTarget: 2,
  quantitativeEasing: 895,
  reserves: 92794,
  cpi: [
    { category: "Food & non-alcoholic beverages", weight: 8.9, change: 1.4 },
    { category: "Alcohol & tobacco", weight: 3.5, change: 1.7 },
    { category: "Clothing & footwear", weight: 5.9, change: 1.4 },
    { category: "Housing & household services", weight: 32.8, change: 2.2 },
    { category: "Furniture & household goods", weight: 4.9, change: 1.8 },
    { category: "Health", weight: 2.0, change: 0.8 },
    { category: "Transport", weight: 10.7, change: 2.5 },
    { category: "Communication", weight: 1.9, change: 1.9 },
    { category: "Recreation & culture", weight: 11.2, change: 1.8 },
    { category: "Education", weight: 3.0, change: 1.5 },
    { category: "Restaurants & hotels", weight: 6.9, change: 1.9 },
    { category: "Miscellaneous goods & services", weight: 8.3, change: 1.4 },
  ]
}

export default store