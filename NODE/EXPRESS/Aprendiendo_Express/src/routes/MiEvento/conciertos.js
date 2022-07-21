const express = require('express');

const router = express.Router();

router.get('/', function (req,res) {
    res.send('Esta pagina es de conciertos');
})

router.get('/salsa',function(req, res){
    res.send('Esta pagina es de salsa');
})

router.get('/tango',function(req, res){
    res.send('Esta pagina es de tango');
})

module.exports = router;