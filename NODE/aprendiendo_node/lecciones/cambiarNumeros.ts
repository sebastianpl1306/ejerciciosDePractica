export function convertirNumero(cadena :string, numero: number) {
    let cadenaFinal = "";
    let contadorLetras = 0;
    for(let letra of cadena){
        if(contadorLetras < numero){
            cadenaFinal = cadenaFinal+letra;
            contadorLetras++;
        }else{
            contadorLetras = 1;
            cadenaFinal = cadenaFinal+" "+letra;
        }
    }
    console.log(cadenaFinal);
}