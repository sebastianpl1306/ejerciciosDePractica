//librerias
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//routes
const routes = require('./routes/routes');
const pool = require('./BD/poolBD');

//middleware
const registroLLamadas = require('./middleware/registroLLamadas');

//definiendo express
const aplication = express();

//configuracion body-parser
aplication.use(bodyParser.urlencoded({ extended: true }))
aplication.use(bodyParser.json())

//configuración cookieParser
aplication.use(cookieParser());

//----- motores de busqueda -----
//ejs
aplication.set('view engine', 'ejs');
//pug
// aplication.set('view engine', 'pug')

//configuración del puerto
aplication.set('port', process.env.PORT || 3030);

//inicia el servidor
aplication.listen(3030, function(){
    console.log("iniciando el servidor");
})

//middleware log peticion
aplication.use(registroLLamadas);

//saludo pagina principal
aplication.use('/',routes)

//base de datos pool
aplication.use('/pool',pool)