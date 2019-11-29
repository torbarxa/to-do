//const argv = requiere('yargs').argv;
const argv = require('./config/config.js').argv;
const todo = require('./to-do/to-do.js');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear.....');
        let task = todo.crear(argv.descripcion);
        console.log(task);
        break;

    case 'actualizar':
        console.log('Comando Actualizar');
        break;

    default:
        console.log('Comando no reconocido');
}