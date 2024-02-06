const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

class ServerClass {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Http server
        this.server = createServer( this.app );

        //configuraciones de sockets
        this.io = new Server( this.server, {/* Configuraciones */} );
    }

    middlewares() {
        //Desplegar el directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public')) );

        //CORS
        this.app.use( cors() );
    }

    configurarSockets(){
        new Sockets(this.io);
    }

    execute() {
        //Inicializar middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        //Inicializar servidor
        this.server.listen( this.port, () =>{
            console.log(`[INFO] Server running in port ${this.port}`);
        })
    }
}

module.exports = ServerClass;