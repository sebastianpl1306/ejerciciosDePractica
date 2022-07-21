const express = require('express');
const general = require('./general');
const deportes = require('./deportes');
const conciertos = require('./conciertos')

const router = express.Router();

//Pagina principal de Mi evento
router.use('/general', general);

//Pagina de deportes
router.use('/deportes', deportes);

//Pagina de conciertos
router.use('/conciertos', conciertos);

module.exports = router;