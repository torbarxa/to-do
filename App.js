//const argv = requiere('yargs').argv;
const argv = require('./config/config.js').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Comando Crear');
        break;
    case 'actualizar':
        console.log('Comando Actualizar');
        break;
    default:
        console.log('Comando no reconocido');
}