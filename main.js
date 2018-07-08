const fatorial = require('./fatorial');

console.log('n-fatorial');

const argv = require('yargs').demandOption('num').argv

/*
console.log(`Executando o script a partir de ${process.cwd()}`);

process.on('exit', () => {
    console.log('script está prestes a terminar')
})
*/



const num = argv.num;

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);

console.log(module.paths);