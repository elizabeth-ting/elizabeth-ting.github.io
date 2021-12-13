const fs = require('fs');

let drinkLiters = [];

let alcConsumptionsLiters_csv = fs.readFileSync('impaired-driving-death_rate_by_age_and_gender_2012_2014_all_states.csv', 'utf8');

let countryLiters = alcConsumptionsLiters_csv.split("\n"); //new line

countryLiters.forEach(function(liter) {
  let drink_liters = liter.split(',');
  let liters = {};
  liters['state'] = drink_liters[0];
  liters['location(NS)'] = drink_liters[1];
  liters['location(EW)'] = drink_liters[2];
  liters['alcohol consumption per capita (L)'] = drink_liters[3];


  drinkLiters.push(liters);
});

fs.writeFileSync('impairedDrivingDeathRate(6).json', JSON.stringify(drinkLiters), 'utf8');
