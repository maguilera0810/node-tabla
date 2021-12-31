const { builtinModules } = require('module')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Valor de la base a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Listar tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'Hasta donde se multiplica'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true
    })
    .argv

module.exports = argv;