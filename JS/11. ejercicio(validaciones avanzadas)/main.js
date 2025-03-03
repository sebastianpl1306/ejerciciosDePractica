var form = document.getElementById("formulario");
var campoNombre = document.getElementById("nombre");
var expresion = /[0-9]/;

function validarFormulario(){
    if(campoNombre.value.trim().length < 3){
        document.getElementById("errorNombre").innerHTML = "debe tener almenos 2 caracteres";
        return false;
    }

    if(expresion.test(campoNombre.value.trim())){
        document.getElementById("errorNombre").innerText = "el nombre no puede tener numeros";
        return false;
    }
    
    if(campoNombre.value.trim().length == 0){
        document.getElementById("errorNombre").innerText = "Campo Obligatorio";
        return false;
    }else{
        document.getElementById("errorNombre").innerHTML = "";
        return true;
    }
}

campoNombre.addEventListener('keyup',validarFormulario);