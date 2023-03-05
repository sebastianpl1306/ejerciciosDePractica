const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 125412541,
        lat: 14.24858,
        lng: 39.14524
    }
}

//Esto hace una referencia al objeto persona por lo que lo que alteremos en la variable persona2
//tambien lo modificaremos en persona
const persona2 = persona;

//Esto es una copia del objeto persona por lo que es totalmente independiente de el objeto persona
const persona3 = {...persona};


console.log(persona2);
console.log(persona3);