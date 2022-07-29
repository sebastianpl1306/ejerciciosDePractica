//librerias
const express = require('express');
const router = express.Router();

router.get('/', function (req,res){
    res.send(`Bienvenido a ${req.query.nombre}`);
})

module.exports = router;