require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



console.clear();

const main = async() =>{
    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        switch (opt ) {
            case '1':
                // crear opción
                const desc = await leerInput( 'Descripcion: ' )
                tareas.crearTarea( desc )
                break;
            case '2':
                console.log( tareas._listado );
                break;
        
            default:
                break;
        }

        await pausa();     
    } while ( opt !== '0');

}

main();