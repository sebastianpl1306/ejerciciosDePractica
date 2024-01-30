require('dotenv').config();
const ServerClass = require('./models/server');

const server = new ServerClass();

server.execute();