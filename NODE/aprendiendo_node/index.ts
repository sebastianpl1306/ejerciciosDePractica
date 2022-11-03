import { calcularPrecio } from './lecciones/calcularPrecio'
import { verifyNum } from './lecciones/is_num'
import express from 'express';
import { convertirNumero } from './lecciones/cambiarNumeros';
const dns = require('dns');

const app = express();

app.get('/',function (req, res) {
    // const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // console.log(verifyNum(`uno`));
    // console.log(verifyNum(1));
    // console.log("el total de su entrada es: $",convertirNumero("aaabbbcccddeeff",3));
    const micadena = '!!Hola, pedro!'; // Try edit me
    const micadena2 = 'Hola!!!'; // Try edit me
    const micadena3 = '!Me gustan los !!retos! de !codigo';

    const cadena = micadena3.split('!');
    let ultimaPalabra = '', cadenaFinal = '';
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i]) {cadenaFinal += cadena[i]}
    }

    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i]){
            ultimaPalabra = cadena[i];
        }
    }

    console.log(micadena2.indexOf(ultimaPalabra));

    console.log(cadenaFinal);
    console.log(ultimaPalabra);
})

app.listen(3030,function(){
    console.log("escuchando servidor");
})