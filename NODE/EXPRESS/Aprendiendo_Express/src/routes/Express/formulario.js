const express = require('express')
const router = express.Router()

//Obtiene un formulario para validar los datos de usuario y email
router.get('/', function (req,res) {
    res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inicio de Sesion</title>
  </head>
  <body>
    <h1>Inicio de Sesión</h1>
    <div>
      <form action="formulario/procesar" method="post">
        <p>
          <label for="">Usuario</label>
          <input type="text" name="usuario">
        </p>
        <p>
          <label for="">Email</label>
          <input type="text" name="email">
        </p>
        <p>
          <button type="submit">Continuar</button>
        </p>
      </form>
    </div>
  </body>
  </html>`);
});

//Valida el formulario con la información obtenida
router.post('/procesar', function (peticion,respuesta) {
    let re;
    re = /^[^ ]{6,}/
    if (!re.test(peticion.body.usuario)){
      respuesta.send("[ERROR] El usuario no debe tener espacios y debe tener más de 6 caracteres");
      return
    }
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(peticion.body.email)){
        respuesta.send("[ERROR] El correo debe cumplir las propiedades de un email");
      return
    }
    respuesta.send("[INFO] Se ingreso correctamente");
})

module.exports = router;