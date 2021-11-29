const fs = require('fs');

let states = [];

let drinkingPrevalence_csv = fs.readFileSync('prevalence-of-binge-drinking-among-us-adults-2015.csv', 'utf8');

let drinkingPrevalance = drinkingPrevalence_csv.split("\n"); //new line

drinkingPrevalance.forEach(function(theStates) {
  let state_info = theStates.split(',');
  let state = {};
  state['abbreviated name'] = state_info[0];
  state['percentage'] = state_info[1];


  states.push(state);
});

fs.writeFileSync('drinking-prevalence.json', JSON.stringify(states), 'utf8');
