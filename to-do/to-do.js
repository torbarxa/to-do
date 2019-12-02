const fs = require('fs');
let todoList = [];

const guardarDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('Error: no se pudo grabar la tarea ');
    });

}

const cargarDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }

}

const getList = () => {
    cargarDB();
    return todoList;
}

const borrar = (descripcion) => {
    cargarDB();

    let newList = todoList.filter(tarea => tarea.descripcion !== descripcion);
    if (newList.length !== todoList.length) {
        todoList = newList;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = todoList.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        todoList[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

    // for (let task of todoList) {
    //     if (descripcion == task.descripcion) {
    //         task.completado = completado;
    //         guardarDB();
    //     }
    // }
}

const crear = (descripcion) => {

    cargarDB();
    let todo = {
        descripcion,
        completado: false
    }
    todoList.push(todo);
    guardarDB();

    return todo;
}

module.exports = {
    crear,
    getList,
    actualizar,
    borrar,
}