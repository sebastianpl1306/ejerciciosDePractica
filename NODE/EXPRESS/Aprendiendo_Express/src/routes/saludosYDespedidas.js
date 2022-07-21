const express = require('express');
const saludo = require('../services/saludos');
const despedida = require('../services/despedida');

const router = express.Router();

//Peticion de url /despedida
const tipoDespedida = Math.floor((Math.random() * 4) + 1);
const mensajeDespedida = despedida(tipoDespedida);
router.get('/despedida', function(req, res) {
    res.send(mensajeDespedida)
})

//Peticion de url /saludos
const tipoSaludo = Math.floor((Math.random() * 4) + 1);
const mensajeSaludo = saludo(tipoSaludo);
router.get('/saludo', function(req, res) {
    res.send(mensajeSaludo)
})

module.exports = router;