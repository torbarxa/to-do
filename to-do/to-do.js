const fs = require('fs');
let todoList = [];

const guardarDB = () => {
    let data = JSON.stringify(todoList);
    fs.appendFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('Error: no se pudo grabar la tarea ');
    });

}


const crear = (descripcion) => {
    let todo = {
        descripcion,
        completado: false
    }
    todoList.push(todo);
    guardarDB();

    return todo;
}

module.exports = {
    crear
}