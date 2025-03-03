var color = "blanco";
var color2 = color;
console.log(color);
console.log(color2);
color2 = "verde";
console.log(color);
console.log(color2);


var personas
personas = [
  {
    nombre: "luis"
  }
]

console.log(personas);

personas.push({
  nombre: "marcos",
  edad: 10
})

console.log(personas);

personas[1].amigos = ['roberto', 'ana'];

console.log(personas);
console.log(personas[1].amigos[0]);

var usuarios = personas;

usuarios[1].nombre = "pedro";
console.log(usuarios);
console.log(personas);
