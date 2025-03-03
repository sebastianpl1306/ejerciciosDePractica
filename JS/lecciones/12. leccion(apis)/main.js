var saludoEspanol = "¡Bienvenido!";
var saludoIngles = "¡Welcome!";
function colocarSaludo(){
    var saludo;
    if(location.search == "?lang=en"){
        saludo = saludoIngles;
    }

    if(location.search == "?lang=es"){
        saludo = saludoEspanol;
    }

    if(navigator.language == "en"){
        saludo = saludoIngles;
    }else{
        saludo = saludoEspanol;
    }

    document.getElementById("saludo").innerHTML = saludo;
}

colocarSaludo();