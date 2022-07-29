//librerias
const express = require('express');
const router = express.Router();

/*
* @URL: localhost:3030/parametros/
* @Descripcion: Genera un saludo de Bienvenido
*/
router.get('/', function (req,res){
    res.send(`Bienvenido`);
})

/*
* @URL: localhost:3030/parametros/cliente/1
* @Descripcion: Genera un saludo al enviarle el nombre del cliente como parametro
*/
router.get('/cliente/:clienteId', function (req,res){
    res.send(`Bienvenido Cliente ${req.params.clienteId}`);
});

/*
* @URL: http://localhost:3030/parametros/cliente/1/cuenta/123
* @URL-QUERY: http://localhost:3030/parametros/cliente/1/cuenta/123?orden=12366
* @Descripcion: Genera un saludo al enviarle el nombre del cliente como parametro
*/
router.get('/cliente/:id/cuenta/:cuenta', function (req,res){
    const orden = req.query.orden ? req.query.orden : "saldo";
    res.send(`Bienvenido a la cuenta ${req.params.cuenta} del cliente (orden ${orden})`);
});

module.exports = router;