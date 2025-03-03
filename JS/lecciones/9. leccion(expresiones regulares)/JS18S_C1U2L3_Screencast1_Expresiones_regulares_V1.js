var palabra;
var expresionRegular;

expresionRegular = /as/;

palabra = "casa";
console.log(expresionRegular.test(palabra));

palabra = "caza";
console.log(expresionRegular.test(palabra));

palabra = "cASa";
console.log(expresionRegular.test(palabra));

expresionRegular = /as/i;
palabra = "cASa";
console.log(expresionRegular.test(palabra));

palabra = "abc";

expresionRegular = new RegExp('^[abc]l[0-9]');
var resultado = palabra.match(expresionRegular)
console.log(resultado);

var fila = "luis,torres"
var filaProcesada = fila.replace(/^([^,]*),([^,]*)/, "$2, $1");
console.log(filaProcesada);
