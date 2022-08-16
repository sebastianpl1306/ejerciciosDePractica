const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: '12345',
    database: 'inventario'
})

app.get('/', (peticion, respuesta) => {
    pool.getConnection((error, connection) => {
        
        let query = 'SELECT * FROM productos';

        if (peticion.query.orden) {
            query = 'SELECT * FROM productos ORDER BY precio DESC';
        }

        connection.query(query, (error, filas, campos) =>{
            respuesta.json({data: filas});
        })
        connection.release();
    })
})

app.get('/:id', (peticion, respuesta) => {
    pool.getConnection((error, connection) =>{
        const query = `SELECT * FROM  productos WHERE id=${connection.escape(peticion.params.id)}`;

        connection.query(query, (error, filas, campos) => {
            if (filas.length > 0) {
                respuesta.json({data: filas[0]})
            }else{
                respuesta.status(404);
                respuesta.json({errors: ["No se encontro el producto"]})
            }
        })
        connection.release();
    })
})

app.listen(8080, () => {
    console.log("Servidor Iniciado: http://localhost:8080/");
})