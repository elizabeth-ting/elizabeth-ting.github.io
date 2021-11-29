const fs = require('fs');

let drinkRates = [];

let drinkIntensity_csv = fs.readFileSync('intensity-of-binge-drinking-among-us-adults-2015.csv', 'utf8');

let countries = drinkIntensity_csv.split("\n"); //new line

countries.forEach(function(rates) {
  let drink_rate = rates.split(',');
  let rate = {};
  rate['name'] = drink_rate[0];
  rate['percentage'] = drink_rate[1];


  drinkRates.push(rate);
});

fs.writeFileSync('binge-drinking-rates-us.json', JSON.stringify(drinkRates), 'utf8');
