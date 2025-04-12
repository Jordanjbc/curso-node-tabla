
//intento fallido
// for(let i = 5; i < 5; i++){
//     console.log ( "5x1= ", i)
// }

// segundo intento OK
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// const fs = require('fs');

const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('yargs')
            .options('b',{
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;



console.clear();


console.log(argv);


//esto debo borrarlo pero lo dejare comentado
// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log(base);

//const base = 5;

crearArchivo(argv.b)
.then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
.catch(err=>console.log (err));



// let salida = '';

// console.log('===================');
// console.log(`Tabla del: ${base}`);
// console.log('===================');

// for (let i = 1; i <= 10; i++) {
//     salida += `${base} x ${i} = ${base * i}\n`;
// }


// console.log(salida);
//guardar tabla en TXT con "WRITEFILE"
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`);


//guardar tabla en TXT con "writefileSYNC"
    // fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        // console.log(`tabla-${base}.txt creado`);

