//Importación de librerias
const express = require('express');
const mysql = require('mysql');
const { database } = require('./keys')

//Se añade el router
const router = express.Router();

//Estableciendo la conexión de mysql
const connection = mysql.createConnection(database)

connection.connect()

router.get('/', function (req, res) {
    connection.query('SELECT * FROM aplicaciones', function (error, results, campos) {
        console.log(results[0].titulo)
    })
})

module.exports = router;