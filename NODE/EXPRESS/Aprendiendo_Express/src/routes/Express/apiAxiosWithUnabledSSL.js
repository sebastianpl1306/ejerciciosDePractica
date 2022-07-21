const express = require('express');
const axios = require('axios');
const https = require('https');

const router = express.Router();

//Permite desactivar los permisos de ssl para la correccion de: unable to verify the first certificate
const axiosInstance = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }) });

router.get('/', async function(req, res) {
    //Petición de axios
    const paylod = {"username":"admin","password":"123456789","company":"963963963","remember":true}
    const url = "https://agentechatdevmgt.smartsoft.com.co:3000/auth/login";
    let tokenBarrer = "";
    await axiosInstance.post(url, paylod).then(respuesta => {
        tokenBarrer = respuesta.data.token
    });
    
    res.send(tokenBarrer);
})

module.exports = router;