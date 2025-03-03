var eventos = [];
var boton = document.getElementById("cargarMas");
function iniciarEventos() {
  for (var i = 1; i < 200; i++) {
    eventos.push({
      nombre: "Evento " + i,
      descripcion: "Esta es la descripción del evento " + i,
    })
  }
}

function cargarEventos(){
  var elemento = document.createElement("h1");
  var evento = document.getElementById("eventos")
  for(var i in eventos){
    document.getElementById("eventos").appendChild(elemento);
  }
}

iniciarEventos();
cargarEventos();


