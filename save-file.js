const fs = require('fs');

const argv = require('yargs')
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(argv.filename, argv.content, (error) => {
    if (error) throw error;
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`)
});