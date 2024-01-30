const getAgePlugin = require('get-age');

const getAge = (birthday) => {
    if( !birthday ) return new Error('birthday is required');

    return getAgePlugin(birthday);
}

module.exports = {
    getAge,
}