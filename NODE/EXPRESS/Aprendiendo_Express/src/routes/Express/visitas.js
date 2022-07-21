const express = require('express');
const router = express.Router();

// Aumenta la cantidad de visitas cuando el usuario entra a la página
router.get('/', function (req,res) {
    //Verifica que exista la cookie
    if (!req.cookies['visitas']) {
        //Establece la cookie visitas en 1
        res.cookie('visitas', 1);
    }else{
        //Suma 1 a la cookie visitas
        const visitas = parseFloat(req.cookies['visitas']) + 1;
        res.cookie('visitas', visitas);
    }
    
    res.send(`Visitas: ${req.cookies['visitas']}`)
})

module.exports = router;