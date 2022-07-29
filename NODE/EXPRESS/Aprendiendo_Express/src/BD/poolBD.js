//librerias
const express = require('express');
const mysql = require('mysql');
const {databasePool} = require('./keys');

//inicializaciones
const router = express.Router();

//Estableciendo la conexión de mysql
const connection = mysql.createConnection(databasePool);

connection.connect();

//creación del pool
var pool = mysql.createPool({databasePool});

router.get('/', function (req, res) {
    pool.getConnection(function (err, connection) {
        console.log("estableciendo connection: "+connection);
    })
})

module.exports = router;