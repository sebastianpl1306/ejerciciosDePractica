const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const applicacion = express();

var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: '12345',
    database: 'tareas_app'
})

applicacion.use(bodyParser.json())
applicacion.use(bodyParser.urlencoded({ extended: true }))

applicacion.get('/api/tareas', (peticion, respuesta) => {
    pool.getConnection((err, connection) => {
        const query = `SELECT * FROM tareas`;

        connection.query(query, (error, filas, campos) => {
            respuesta.json({data: filas})
        })

        connection.release()
    })
})

applicacion.get('/api/tareas/:id',(peticion, respusta) =>{
    pool.getConnection((error, connection) =>{
        const query = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`

        connection.query(query, (error, filas, campos) => {
            if (filas.length > 0) {
                respusta.json({data: filas[0]});
            }else{
                respusta.status(404);
                respusta.send({errors: ["No se encuentra esa tarea"]})
            }
        })
    })
})

applicacion.listen(8080, () => {
    console.log("Servidor iniciado");
})