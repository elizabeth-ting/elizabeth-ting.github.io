const fs = require('fs');

let countries = [];

let alcDisorders_csv = fs.readFileSync('share-with-alcohol-use-disorders.csv', 'utf8');

let alcDisorders = alcDisorders_csv.split("\n"); //new line

alcDisorders.forEach(function(disorders) {
  let country_info = disorders.split(',');
  let country = {};
  country['country'] = country_info[0];
  country['abbreviation'] = country_info[1];
  country['year'] = country_info[2];
  country['prevalance percentage'] = country_info[3];

  countries.push(country);
});

fs.writeFileSync('alcohol-use-disorders.json', JSON.stringify(countries), 'utf8');
