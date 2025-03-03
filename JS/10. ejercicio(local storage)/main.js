function guardarVisita(pais){
    localStorage.setItem('pais',pais);
}

function paisVisitado(){
    var pais = "Ultimo Pais Visitado:"+localStorage.getItem('pais');
    document.getElementById("pais").innerText = pais;
}

paisVisitado();