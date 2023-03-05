//Función normal
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

//funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

//Función de flecha simple
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('pepe'));
console.log(saludar2('pepito'));
console.log(saludar3('antonio'));

//Función de flecha simple que retorna un objeto se debe agregar los parentesis para que lo reconosca
const getUser = () => ({
    id: "123sdfsd324324",
    userName: "anotni1234"
});

console.log(getUser());

//función de flecha que recibe propiedad
const getUsuarioActivo = (nombre) =>({
    uid: 'ABC567',
    userName: nombre
});

const usuarioActivo = getUsuarioActivo('El pepe');

console.log(usuarioActivo);