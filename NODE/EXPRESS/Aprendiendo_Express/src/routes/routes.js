//instalación de dependencias
const express = require('express');

//instalaciones
const router = express.Router();

//routes
const visitas = require('./Express/visitas');
const cookies = require('./Express/cookies');
const formulario = require ('./Express/formulario');
const parametros = require ('./Express/parametros');
const Plantillas = require ('./Express/plantillas');
const miEvento = require ('./MiEvento/miEvento');
const saludosYDespedidas = require('./saludosYDespedidas');
const enviandoDocumentos = require('./enviandoDocumentos');
const baseDeDatosSQL = require('../BD/connectionBD');
const apiAxiosWithUnabledSSL = require('./Express/apiAxiosWithUnabledSSL');
const queryStrings = require('./Express/queryStrings');
const sesiones = require('./Express/session');

//saludo pagina principal
router.get('/', function(peticion, respuesta) {
    respuesta.send('Bienvenido');
})

//peticion de baseDeDatosSQL
router.use('/baseDeDatosSQL', baseDeDatosSQL)

//peticion de sesiones
router.use('/sesiones',sesiones)

//petición de visitas
router.use('/visitas',visitas)

//petición de almacenamiento y recuperacion de cookies
router.use('/cookies',cookies)

//peticion de envio de formulario
router.use('/formulario',formulario)

//peticion de por medio de parametros
router.use('/parametros',parametros);

//peticion de plantillas
router.use('/plantillas',Plantillas);

//peticion de parametros de la url usando queryStrings
router.use('/queryStrings',queryStrings);

//peticion de despedidas y saludos
router.use('/saludos', saludosYDespedidas);

//peticion de archivos
router.use('/archivos', enviandoDocumentos);

//peticion de apiAxiosWithUnabledSSL
router.use('/apiAxiosWithUnabledSSL', apiAxiosWithUnabledSSL)

//peticion de MiEvento
router.use('/miEvento', miEvento);

module.exports = router;