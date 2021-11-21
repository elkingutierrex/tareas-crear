const { inquirerMenu, pausa } = require('./helpers/inquirer');


require('colors');

console.clear();

const main = async() =>{
    console.log('Hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt});  
        await pausa();     
    } while ( opt !== '0');

}

main();