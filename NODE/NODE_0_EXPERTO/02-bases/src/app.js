// const { emailTemplate } = require('./js-foundation/01-template');
// const { getUserById } = require('./js-foundation/04-arrow');

// console.log(emailTemplate);

/**
 * Ejercicio de callbacks y arrow functions
 */
// const { getUserById } = require('./js-foundation/04-arrow');
// const idUser = 2;
// getUserById( idUser, ( error, user ) => {
//     if( error ) throw new Error( error );

//     console.log(user);
// });

/**
 * Ejercicio de factory functions
 */
// const { getAge, getUUID } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//     name: 'John',
//     birthDate: '2001-06-13'
// };

// const john = makePerson( obj );

// console.log({john});

/**
 * Ejercicio promesas
 */
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById( 1 )
    .then((pokemon) => console.log({ pokemon }));