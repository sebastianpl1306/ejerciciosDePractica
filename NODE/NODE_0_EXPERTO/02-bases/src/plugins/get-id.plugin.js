const { v4: uuIdv4 } = require('uuid');

const getUUID = () =>{
    return uuIdv4();
}

module.exports = {
    getUUID,
}