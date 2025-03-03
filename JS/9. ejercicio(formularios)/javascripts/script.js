function validar(formulario) {

  if (formulario.nombre.value.trim().length == 0) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    formulario.nombre.focus();
    return false;
  }else{
    document.getElementById("errorNombre").innerText = "";
  }

  if(formulario.nombre.value.trim().length <= 3){
    document.getElementById("errorNombre").innerHTML = "debe tener minimo 3 caracteres";
    formulario.nombre.focus();
    return false;
  }else{
    document.getElementById("errorNombre").innerHTML = "";
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML = "email invalido";
    formulario.email.focus();
    return false;
  }else{
    document.getElementById("errorEmail").innerHTML = "";
  }
  
  if(formulario.contrasena.value.trim().length == 0){
    document.getElementById("errorContrasena").innerHTML = "contrasena invalida";
    formulario.contrasena.focus();
    return false;
  }else{
    document.getElementById("errorContrasena").innerHTML = "";
  }

  if(formulario.contrasena.value.trim().length <= 5){
    document.getElementById("errorContrasena").innerHTML = "debe tener minimo 5 caracteres";
    formulario.contrasena.focus();
    return false;
  }else{
    document.getElementById("errorContrasena").innerHTML = "";
  }

  if(formulario.contrasena.value != formulario.confirmacion.value){
    document.getElementById("errorConfirmacion").innerHTML = "las contraseñas no coinciden";
    formulario.confirmacion.focus();
    return false;
  }else{
    document.getElementById("errorConfirmacion").innerHTML = "";
  }

  if (formulario.genero.value == "") {
    document.getElementById("errorGenero").innerHTML = "</br>campo obligatorio";
    return false;
  }else{
    document.getElementById("errorGenero").innerHTML = "";
  }

  if(formulario.pais.value == ""){
    document.getElementById("errorPais").innerHTML = "</br>campo obligatorio";
    return false;
  }else{
    document.getElementById("errorPais").innerHTML = "";
  }

  if (!formulario.terminos.checked) {
    document.getElementById("aceptarTerminos").innerHTML = "</br>Debes aceptar los terminos y condiciones";
    return false;
  }else{
    document.getElementById("aceptarTerminos").innerHTML = "";
  }

  alert("Datos enviados");

  return true;
}

