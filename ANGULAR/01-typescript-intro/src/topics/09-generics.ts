export function whatsMyType<T>( argument: T ): T{
    return argument;
}

const amIString = whatsMyType('Hola Mundo');
const amINumber = whatsMyType(3200);
const amIArray = whatsMyType([1,2,3,4,5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );