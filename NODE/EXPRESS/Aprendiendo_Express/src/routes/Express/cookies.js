const express = require('express');
const router = express.Router();

//Envia un saludo y guarda el nombre obtenido del query string
router.get('/',function (req,res) {
    res.cookie('nombre', req.query.nombre);
    res.send('Bienvenido');
})

//Envia un saludo con el nombre previamente guardado en la cookie
router.get('/leer',function (req,res) {
    res.send(`Bienvenido: ${req.cookies['nombre']}`);
})

module.exports = router;