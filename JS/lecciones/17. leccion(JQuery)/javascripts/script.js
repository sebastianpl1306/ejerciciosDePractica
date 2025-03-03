function cargarDatos() {}
/*cuando ponemos $.ajax estamos llamando a ajax*/
$.ajax({
  url: "../datos.json"
}).done(function(respuesta){

});

function cargarDatos() {
  $.ajax({
    url: "http://127.0.0.1:5500/datos.json"
  }).done(function(respuesta){
    $("#contenido").html("Hola: " + respuesta.nombre);
    $("#contenido").slideDown("slow");
  });
};


/*todas las funcions de jquery comienzan con $*/
/*Aca comenzamos tomando el documento y cuando este bien cargado se ejecutaran todas las
instrucciones que coloquemos en el cuerpo de la funcion para inicializar todos los elementos
necesarios*/
/*Lo importante de colocar las instrucciones dentro de este bloque de codigo es que el jquery estara
funcionando*/
$( document ).ready(function() {
  $("#contenido").hide();

  /*comenzando a poner el signo $ y en su parametro un selector que es un string que permite
  manipular elementos o obtener su contenido*/
  $("button.cargar").click(function(){
    cargarDatos();
  });

});
