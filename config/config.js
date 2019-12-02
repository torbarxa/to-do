const argv = require('yargs')
    .command('crear', 'Crear nuevas tareas', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'Listar tareas')
    .command('actualizar', 'Actualizar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca la tasa com a completada'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}