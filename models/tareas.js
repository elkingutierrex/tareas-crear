/**
 * _listado:
 *  { 'uuid-54545-5245454-2' _ { id: 12, desc asd, completadoEn: 92231 }, ... }
 */

const  Tarea = require('./tarea')

class Tareas{
    _listado = {};

    get listadoArr (){

        const listado = []
        Object.keys(this._listado).forEach( key =>{
            const tarea = this._listado[key];
            listado.push( tarea )
        })
        return listado;

    }


    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })

    }

    crearTarea( desc = '' ){
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        console.log('\n');
        this.listadoArr.forEach ( (tarea, index ) => {

            const idx                       = `${ index + 1 }.`.green;
            const { desc, completadoEn }    = tarea;
            const estado                    = ( completadoEn ) 
                                                ? 'Completada'.green
                                                : 'Pendiente'.red
            console.log(` ${idx} ${desc} :: ${estado} `);
        })

    }

    listarPendientesCompletadas( completadas = true ){

        console.log('\n');
        let  contador = 0;
        this.listadoArr.forEach ( tarea => {
            
            const { desc, completadoEn }    = tarea;
            const estado                    = ( completadoEn ) 
                                                ? 'Completada'.green
                                                : 'Pendiente'.red

            if( completadas && completadoEn ){
                contador++;
                const idx =  contador.toString().green;
                console.log(` ${idx} ${desc} :: ${estado} `);  
            } else if( !completadas && !completadoEn ){
                contador++;
                const idx =  contador.toString().green;
                console.log(` ${idx} ${desc} :: ${estado} `);  
            } 
        })
    }
}

module.exports = Tareas;