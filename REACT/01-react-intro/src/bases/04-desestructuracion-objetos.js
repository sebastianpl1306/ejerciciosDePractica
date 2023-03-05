const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'IronMan'
}

//Esta forma no es eficiente
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.clave);

//Forma con extracción
const { edad, nombre, clave, } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

//tambien se puede renombrar la propiedad, aunque no se va poder llamar con el nombre real de la propiedad en este caso apellido
const { apellido: apellidoRenombre } = persona;

console.log(apellidoRenombre);

//Desestructuración del objeto
//NORMAL
const retornaPersona = (usuario) =>{
    const { edad, nombre, clave, } = usuario;
    console.log(edad, nombre, clave);
};

//DESESTRUCTURADO
const retornaPersonaDesestructurado = ({ edad, nombre, clave, }) =>{
    console.log(edad, nombre, clave);
};

retornaPersona(persona);
retornaPersonaDesestructurado(persona);

//Asignar valores por defecto
const amigos = ({ edad, nombre, clave, rango = 'capitan'}) =>{
    return {
        nombreClave: nombre,
        rango: rango,
        latlog: {
            lat: 14.1232,
            lng: -12.432
        }
    }
};

//Si el rango no existe en persona el valor por defecto va ser capitan
const {nombreClave, rango, latlog:{lat, lng}} = amigos(persona);
console.log(lat, lng);