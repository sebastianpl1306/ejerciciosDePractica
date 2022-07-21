import { calcularPrecio } from './lecciones/calcularPrecio'
import { verifyNum } from './lecciones/is_num'
import express from 'express';

const app = express();

app.get('/',function (req, res) {
    console.log(verifyNum(`uno`));
    console.log(verifyNum(1));
    console.log("el total de su entrada es: $",calcularPrecio(13,true));
    let x = "1"+1+1+1;
    console.log(process.cwd());
})

app.listen(3030,function(){
    console.log("escuchando servidor");
})