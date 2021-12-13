const fs = require('fs');

let drinkLiters = [];

let alcConsumptionsLiters_csv = fs.readFileSync('total-alcohol-consumption-per-capita-litres-of-pure-alcohol.csv', 'utf8');

let countryLiters = alcConsumptionsLiters_csv.split("\n"); //new line

countryLiters.forEach(function(liter) {
  let drink_liters = liter.split(',');
  let liters = {};
  liters['country'] = drink_liters[0];
  liters['abbreviated name'] = drink_liters[1];
  liters['year'] = drink_liters[2];
  liters['alcohol consumption per capita (L)'] = drink_liters[3];


  drinkLiters.push(liters);
});

fs.writeFileSync('total-alcohol-consumption(5).json', JSON.stringify(drinkLiters), 'utf8');
