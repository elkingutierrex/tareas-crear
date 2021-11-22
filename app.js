require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



console.clear();

const main = async() =>{
    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if( tareasDB ){
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {

        opt = await inquirerMenu();
        switch ( opt ) {
            case '1':
                // crear opción
                const desc = await leerInput( 'Descripcion:' )
                tareas.crearTarea( desc )
                guardarDB( tareas.listadoArr );
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas( true );
                break;
            case '4':
                tareas.listarPendientesCompletadas( false );
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                console.log(id)
                break;
    
            default:
                break;
        }


        await pausa();     
    } while ( opt !== '0');

}

main();