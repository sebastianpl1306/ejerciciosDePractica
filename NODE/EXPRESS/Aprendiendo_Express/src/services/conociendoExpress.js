var express = require('express')
var aplicacion = express()

aplicacion.get("/", (peticion, respuesta) => {
    respuesta.send("Bienvenido")
})
aplicacion.listen(8080,() => {
    console.log("Servidor Iniciado");
})