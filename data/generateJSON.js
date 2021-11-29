const fs = require('fs');

let countries = [];

let alcdeaths_csv = fs.readFileSync('alcohol-attributable-fraction-of-mortality.csv', 'utf8');

let deaths = alcdeaths_csv.split("\n"); //new line

deaths.forEach(function(death) {
  let country_info = death.split(',');
  let country = {};
  country['name'] = country_info[0];
  country['abbreviation'] = country_info[1];
  country['year'] = country_info[2];
  country['deathrate'] = country_info[3];

  // if (character_info[12])
  //   character['skills'] = character_info[12].split('|');
  // else {
  //   character['skills'] = [];
  // }

  countries.push(country);
});

fs.writeFileSync('countryAlcDeaths.json', JSON.stringify(countries), 'utf8');
