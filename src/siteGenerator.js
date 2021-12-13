const fs = require('fs');
const ejs = require('ejs');

//let alcDeaths_info = fs.readFileSync('data/countryAlcDeaths(1).json', 'utf8');
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
let micro_template = fs.readFileSync('src/views/micros.ejs', 'utf8');

let states = JSON.parse(fs.readFileSync('data/new-drinking-prevalence.json', 'utf8'));

let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  states: states
});

fs.writeFileSync('build/index.html', index_html, 'utf8');

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  states: states
});

fs.writeFileSync('build/about.html', about_html, 'utf8');


for (let i = 0; i<states.length; i++){

  let micro_html = ejs.render(micro_template, {
    filename: __dirname + '/views/micros.ejs',
    data: states[i],
    states: states
  });
  fs.writeFileSync('build/' + states[i].abbreviated_name + '.html', micro_html, 'utf8');
}


//render about
//render index
//render micropages
