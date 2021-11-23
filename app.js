require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostarlistadoCheckList } = require('./helpers/inquirer');
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
            case '5':
                const ids = await mostarlistadoCheckList( tareas.listadoArr );                
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0'){
                    const ok = await confirmar( '¿Esta seguro?' );
                    if ( ok ){
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada!');
                    }
                }
                break;
    
            default:
                break;
        }

        guardarDB( tareas.listadoArr );


        await pausa();     
    } while ( opt !== '0');

}

main();