var contador = 10;

function conectar() {

  document.getElementById("mensaje").innerHTML = "Conectando..."

  setTimeout(function(){
    document.getElementById("mensaje").innerHTML = "Conectado..."
  }, 1000)

  setTimeout(function(){
    document.getElementById("mensaje").innerHTML = "Fin..."
  }, 3000)

}

var interval = setInterval(function(){

  document.getElementById("contador").innerHTML = contador;

  contador--;

  if (contador < 1){
    clearInterval(interval);
  }

}, 1000)

