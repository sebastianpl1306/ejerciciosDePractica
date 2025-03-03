function cargarDatos() {
  var peticion = new XMLHttpRequest();
  // peticion.open('GET', 'datos.json');
  peticion.open('GET', 'http://127.0.0.1:5500/datos.json');
  peticion.onload = function () {
    if (peticion.status == 200) {
      // console.log('peticion.response: ', peticion.response);
      var datos = JSON.parse(peticion.response)
      // console.log('datos: ', datos);
      document.getElementById("contenido").innerHTML = "Hola: " + datos.nombre;
    }
  };
  peticion.send();
};

