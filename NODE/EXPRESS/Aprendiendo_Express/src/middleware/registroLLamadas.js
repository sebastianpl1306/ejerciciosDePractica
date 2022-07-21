const express = require('express');
const router = express.Router();

router.use((peticion, respuesta, siguiente) => {
    const navegador = peticion.headers["user-agent"];
    const url = peticion.url;
    const metodo = peticion.method;
    const ip = peticion.connection.remoteAddress;
    const fecha = new Date();

    let verification = fecha+metodo+url+ip+navegador;
    console.log(verification);
    siguiente();
})

module.exports = router;