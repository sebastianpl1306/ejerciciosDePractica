//libreria
const express = require('express');
const router = express.Router();
const session = require('express-session');
const flash = require('express-flash');

//Configuración de sesion
router.use(session({
    secret: 'token-muy-secreto', 
    resave: true,
    saveUninitialized: true
}))

//Usar la variable flash
router.use(flash())

/**
* @url: http://localhost:3030/sesiones/
* @description: Permite renderizar la vista del formulario de inicio de sesion
*/
router.get('/', function (req, res) {
    res.render('inicioSession', {error: req.flash('error')})
})

/**
* @url: http://localhost:3030/sesiones/home/
* @description: Permite renderizar la vista de el home de la pagina principal una vez se inicio sesion
*/
router.get('/home',function (req, res){
    res.render('sessionHome', {usuario: req.session.usuario});
})

/**
* @url: http://localhost:3030/sesiones/detalle/
* @description: Permite renderizar la vista de el home de la pagina principal una vez se inicio sesion
*/
router.get('/detalle',function (req, res){
    res.render('sessionDetalle', {usuario: req.session.usuario});
})

/**
* @url: http://localhost:3030/sesiones/autenticar
* @description: Permite adminisitrar el inicio de sesion
*/
router.post('/autenticar',function(req, res){
    if(req.body.usuario == "luis" && req.body.contrasena == "123456"){
        req.session.usuario = req.body.usuario;
        res.redirect("/sesiones/home")
    }else{
        req.flash('error',"Datos incorrectos");
        res.redirect("/sesiones");
    }
})

/**
* @url: http://localhost:3030/sesiones/salir
* @description: Destruye la sesion y redirecciona a la pagina de inicio de sesion
*/
router.get('/salir',function(req, res){
    req.session.destroy();
    res.redirect("/sesiones")
})

module.exports = router;