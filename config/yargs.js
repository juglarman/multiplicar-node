const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprimir table', opts)
    .command('crear', 'crear tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}