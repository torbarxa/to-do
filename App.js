//const argv = requiere('yargs').argv;
const argv = require('./config/config.js').argv;
const todo = require('./to-do/to-do.js');
const colors = require('colors');

let comando = argv._[0];
let result;

switch (comando) {
    case 'crear':
        console.log('crear.....');
        let task = todo.crear(argv.descripcion);
        console.log(task);
        break;
    case 'listar':
        console.log('listar');
        let taskList = todo.getList();
        for (let task of taskList) {
            console.log('========= TO-DO ========'.green);
            console.log(`Task:${task.descripcion} Completado:${task.completado}`);
            console.log("========================".green);
        }

        break;
    case 'actualizar':
        result = todo.actualizar(argv.descripcion, argv.completado);
        console.log(`Comando Actualizar: ${result}`);
        break;
    case 'borrar':
        result = todo.borrar(argv.descripcion);
        console.log(`Comando borrar: ${result}`);
        break;
    default:
        console.log('Comando no reconocido');
}