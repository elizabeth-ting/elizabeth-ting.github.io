const fs = require('fs');
fs.rmdirSync('build', { recursive: true });

fs.mkdirSync('build');
fs.mkdirSync('build/images');
fs.mkdirSync('build/css');
fs.mkdirSync('build/js');
fs.copyFileSync('src/views/images/aidan_macro.jpeg', 'build/images/aidan_macro.jpeg');
fs.copyFileSync('src/views/images/aidan_micro.jpeg', 'build/images/aidan_micro.jpeg');
fs.copyFileSync('src/views/images/elizabeth_macro.jpeg', 'build/images/elizabeth_macro.jpeg');
fs.copyFileSync('src/views/images/elizabeth_micro.jpeg', 'build/images/elizabeth_micro.jpeg');
fs.copyFileSync('src/views/images/macro_final.jpeg', 'build/images/macro_final.jpeg');
fs.copyFileSync('src/views/images/micro_final.jpeg', 'build/images/micro_final.jpeg');
fs.copyFileSync('src/views/images/screenShot1.png', 'build/images/screenShot1.png');
fs.copyFileSync('src/views/images/screenShot2.png', 'build/images/screenShot2.png');
fs.copyFileSync('src/views/images/pipeline.png', 'build/images/pipeline.png');
fs.copyFileSync('src/views/css/yaycss.css', 'build/css/yaycss.css');
fs.copyFileSync('src/views/js/drinkPrevalence.js', 'build/js/drinkPrevalence.js');
fs.copyFileSync('src/views/js/graph.js', 'build/js/graph.js');
//copy new build
//add stuff needed from src
