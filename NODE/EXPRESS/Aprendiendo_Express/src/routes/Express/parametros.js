//librerias
const express = require('express');
const router = express.Router();

router.get('/', function (req,res){
    res.send(`Bienvenido`);
})

router.get('/:id', function (req,res){
    res.send(`Bienvenido Cliente ${req.params.id}`);
});

router.get('/:id/cuenta/:cuenta', function (req,res){
    const orden = req.query.orden ? req.query.orden : "saldo";
    res.send(`Bienvenido a la cuenta ${req.params.cuenta} del cliente (orden ${orden})`);
});

module.exports = router;