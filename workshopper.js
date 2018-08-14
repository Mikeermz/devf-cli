const  workshopper = require('workshopper-adventure');
const path  = require("path");

const devfcli  =  workshopper({
    
    title:'Devf Cli Excercises',
    exerciseDir:path.join(__dirname,'exercise'),
    appDir:__dirname,
    languages:['es']


})

devfcli.addAll([
    'prueba',
    'IF_division_exacta',
    'IF_mayor_o_menor',
    'ARRAY_cien_valores'
  ]);

module.exports = devfcli;