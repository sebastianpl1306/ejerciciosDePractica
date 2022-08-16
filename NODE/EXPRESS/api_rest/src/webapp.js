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

        connection.release()
    })
})


applicacion.post('/api/tareas/', (peticion, respuesta)=>{
    pool.getConnection((error, connection) => {
        const query = `INSERT INTO tareas (description) VALUES (${connection.escape(peticion.body.descripcion)})`;

        connection.query(query, (error, filas, campos) =>{
            const nuevoId = filas.insertId;
            const queryConsulta = `SELECT * FROM tareas WHERE id=${connection.escape(nuevoId)}`;

            connection.query(queryConsulta, (error, filas, campos) => {
                respuesta.status(201);
                respuesta.json({data: filas[0]})
            })
        })

        connection.release()
    })
})

applicacion.put('/api/tareas/:id', (peticion, respuesta) => {
    pool.getConnection((error, connection) =>{
        const query = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`
        connection.query(query, (error, filas, campos) => {
            if(filas.length > 0){
                const queryUpdate = `
                    UPDATE tareas SET 
                    descripcion=${connection.escape(peticion.body.descripcion)}
                    WHERE id=${peticion.params.id}`;
                connection.query(queryUpdate, (error, filas, campos) => {
                    const queryConsulta = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`;
                    connection.query(queryConsulta, (error, filas, campos) => {
                        respuesta.send({data: filas[0]});
                    });
                });
            }else{
                respuesta.status(404);
                respuesta.send({errors: ["No se encuentra esta tarea"]})
            }
        });

        connection.release()
    });
});

applicacion.delete('/api/tareas/:id', (peticion, respuesta) => {
    pool.getConnection( (error, connection) =>{
        const query = `SELECT * FROM tareas WHERE id=${peticion.params.id}`

        connection.query(query, (error, filas, campos) => {
            if (filas.length > 0) {
                const queryDelete = `DELETE FROM tareas WHERE id=${peticion.params.id}`;
                connection.query(queryDelete, (error, filas , campos) => {
                    respuesta.status(204);
                    respuesta.json();
                })
            }else{
                respuesta.status(404);
                respuesta.send({errors: ["No se encuentra esa tarea"]})
            }
        })
        
        connection.release()
    })
})

applicacion.listen(8080, () => {
    console.log("Servidor iniciado");
})