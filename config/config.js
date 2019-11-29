const argv = require('yargs')
    .command('crear', 'Crear nuevas tareas', {
        description: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualizar una tarea', {
        description: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}