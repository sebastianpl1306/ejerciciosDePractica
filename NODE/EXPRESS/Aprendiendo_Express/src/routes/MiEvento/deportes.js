const express = require('express');

const router = express.Router();

router.get('/', function (req,res) {
    res.send('Esta pagina es de deportes');
})

router.get('/futbol',function(req, res){
    res.send('Esta pagina es de futbol');
})

router.get('/baloncesto',function(req, res){
    res.send('Esta pagina es de baloncesto');
})

module.exports = router;