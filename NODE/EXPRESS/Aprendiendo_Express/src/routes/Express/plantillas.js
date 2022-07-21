const express = require('express');
const router = express.Router();

//plantilla usando ejs
router.get('/', function(peticion, respuesta) {
    const datos= {nombre: "ZSE", direccion: "Calle 3 con Avenida 3. Edificio AURA. Local 1", telefonos: ["123-123123", "124-124124"]}
    respuesta.render('tienda', datos);
})

module.exports = router;