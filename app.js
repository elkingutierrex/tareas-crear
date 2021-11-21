const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


require('colors');

console.clear();

const main = async() =>{
    console.log('Hola mundo');

    let opt = '';

    do {
        // opt = await inquirerMenu();
        // console.log({opt});  

        const tareas = new Tareas();
        const tarea = new Tarea('Comer ');

        tareas._listado[tarea.id] = tarea;

        console.log(tareas);
        await pausa();     
    } while ( opt !== '0');

}

main();