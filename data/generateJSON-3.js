const fs = require('fs');
let usTotal = 0;

let states = [];

let drinkingPrevalence_csv = fs.readFileSync('prevalence-of-binge-drinking-among-us-adults-2015.csv', 'utf8');

let drinkingPrevalence = drinkingPrevalence_csv.split("\n"); //new line
for (let i = 0; i<drinkingPrevalence.length-1; i++){
  let state_info = drinkingPrevalence[i].split(',');
  usTotal += parseFloat(state_info[1]);
}

let usAverage = Math.round(10*(usTotal/50))/10;
console.log(usAverage);

for (let i = 0; i<drinkingPrevalence.length-1; i++){
  let state_info = drinkingPrevalence[i].split(',');
  let state = {};
  state['abbreviated_name'] = state_info[0];
  state['percentage'] = state_info[1];
  state['usAverage'] = JSON.stringify(usAverage);


  states.push(state);
}

console.log(states);

fs.writeFileSync('new-drinking-prevalence.json', JSON.stringify(states), 'utf8');
