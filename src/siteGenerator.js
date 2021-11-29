const fs = require('fs');
const ejs = require('ejs');

//let alcDeaths_info = fs.readFileSync('data/countryAlcDeaths(1).json', 'utf8');
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let micro_template = fs.readFileSync('src/views/micros.ejs', 'utf8');

let states = JSON.parse(fs.readFileSync('data/binge-drinking-rates-us(2).json', 'utf8'));


let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  //data: JSON.parse(alcDeaths_info)
  data: states
});

fs.writeFileSync('build/index.html', index_html, 'utf8');


for (let i = 0; i<states.length; i++){

  let micro_html = ejs.render(micro_template, {
    filename: __dirname + '/views/micros.ejs',
    data: states
  });

  fs.writeFileSync('build/' + states[i].name + '.html', micro_html, 'utf8');
}


//render about
//render index
//render micropages
