//librerias
const express = require('express');
const mysql = require('mysql');
const {databasePool} = require('./keys');

//inicializaciones
const router = express.Router();

//creación del pool
var pool = mysql.createPool({databasePool});

router.get('/', function (req, res) {
    pool.getConnection(function (err, connection) {
        console.log(connection);
    })
})

module.exports = router;