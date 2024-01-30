

//Un factory function es una función que crea una función
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthDate }) => {
        return {
            id: getUUID(),
            name: name,
            birthDate: birthDate,
            age: getAge(birthDate),
        }
    }
}

// const obj = {
//     name: 'John',
//     birthDate: '2001-06-13'
// };

// console.log({john});

module.exports = {
    buildMakePerson,
}