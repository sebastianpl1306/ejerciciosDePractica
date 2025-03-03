var amigos = ["Ana", "Luis", "Pedro"];

amigos.forEach(function (amigo){
  console.log(`Hola ${amigo}`);
});

function saludar(amigo){
  console.log(`Hola ${amigo}`);
}

saludar('pedro')


function saludarYMas(amigo, otraFuncion){
  console.log(`Hola ${amigo}`);
}

function fin(){
  console.log("Fin...");
}

saludarYMas('pedro',fin);
