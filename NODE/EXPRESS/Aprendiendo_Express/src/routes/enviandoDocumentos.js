const express = require('express');
const router = express.Router();

//Peticion de archivo cuando se accede a la url /tituloDePrueba
router.get('/tituloDePrueba', function(req, res){
    res.set('Content-Type','text/html');
    res.sendFile(__dirname + "/public/tituloDePrueba.html")
})

module.exports = router;