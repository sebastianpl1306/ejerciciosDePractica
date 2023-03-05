const personajes = ['Goku','vegeta','Trunks'];

const [ , ,p3 ] = personajes;

console.log(p3);


const retornaArreglo = () =>['ABC',123];

const [letras, numeros] = retornaArreglo();

console.log("letras: ",letras,"numeros:",numeros);

const useState = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, saludar] = useState('Goku');

console.log(nombre);
saludar();
arr[1]();