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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/productos', (peticion, respuesta) => {
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

app.get('/api/productos/:id', (peticion, respuesta) => {
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

aplicacion.post('/api/productos', function (peticion, respuesta) {
    pool.getConnection(function (err, connection) {

        errores = []

        if (!peticion.body.nombre || peticion.body.nombre == "") {
        errores.push("Nombre inválido")
        }
        if (!peticion.body.cantidad || peticion.body.cantidad == "") {
        errores.push("Cantidad inválida")
        }
        if (!peticion.body.precio || peticion.body.precio == "") {
        errores.push("Precio inválido")
        }

        if (errores.length > 0) {
        respuesta.status(400)
        respuesta.json({ errors: errores })
        }
        else {
        const query = `
        INSERT
        INTO productos
        (nombre, precio, cantidad)
        VALUES
        (
            ${connection.escape(peticion.body.nombre)},
            ${connection.escape(peticion.body.precio)},
            ${connection.escape(peticion.body.cantidad)}
        )
        `

        connection.query(query, function (error, filas, campos) {
            const nuevoId = filas.insertId
            const queryConsulta = `SELECT * FROM productos WHERE id=${connection.escape(nuevoId)}`
            connection.query(queryConsulta, function (error, filas, campos) {
            respuesta.status(201)
            respuesta.json({ data: filas[0] })
            })
        })
        }
        connection.release()
    })
})

app.put('/api/productos/:id', (peticion, respuesta) => {
    pool.getConnection((error, connection) => {
        const query = `SELECT * FROM productos WHERE id=${connection.escape(peticion.params.id)}`;
        connection.query(query, (error, filas, campos) => {
            if (filas.length > 0) {
                const modificaciones =[];
                if (peticion.body.nombre) {
                    modificaciones.push(`nombre=${connection.escape(peticion.body.nombre)}`);
                }
                if (peticion.body.cantidad) {
                    modificaciones.push(`cantidad=${connection.escape(peticion.body.cantidad)}`);
                }
                if (peticion.body.precio) {
                    modificaciones.push(`precio=${connection.escape(peticion.body.precio)}`);
                }

                const queryActualizar = `UPDATE productos SET ${modificaciones.join(', ')} 
                        WHERE id=${connection.escape(peticion.params.id)}`;
                connection.query(queryActualizar, (error, filas, campos) => {
                    const queryConsulta = `SELECT * FROM productos WHERE id = ${connection.escape(peticion.params.id)}`
                    connection.query(queryConsulta, (error, filas, campos) => {
                        respuesta.json({data: filas[0]});
                    })
                })
            }else{
                respuesta.status(404);
                respuesta.json({errors: ["No se encontro el producto"]});
            }
        })

        connection.release();
        
    })
})

app.listen(8080, () => {
    console.log("Servidor Iniciado: http://localhost:8080/");
})