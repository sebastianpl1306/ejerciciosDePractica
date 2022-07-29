import { calcularPrecio } from './lecciones/calcularPrecio'
import { verifyNum } from './lecciones/is_num'
import express from 'express';
import { convertirNumero } from './lecciones/cambiarNumeros';
const dns = require('dns');

const app = express();

app.get('/',function (req, res) {
    const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log(verifyNum(`uno`));
    console.log(verifyNum(1));
    console.log("el total de su entrada es: $",convertirNumero("aaabbbcccddeeff",3));
})

app.listen(3030,function(){
    console.log("escuchando servidor");
})