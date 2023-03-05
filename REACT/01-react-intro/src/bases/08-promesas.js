import { getHeroeById } from "./bases/06-importaciones";

const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const heroeObtenido = getHeroeById(1);
        if (heroeObtenido) resolve(heroeObtenido);

        reject("No se pudo obtener un heroe");
    }, 1000);
});

promesa.then((heroeRecibido)=>{
    console.log('promesa then: ',heroeRecibido);
}).catch((error)=>{
    console.warn(error);
})


//para pasar parametros a la promesa debemos dejarla dentro de otra función que reciba los parametros
//la nueva función debe retornar una promesa para que al hacer el llamado permita usar el then y catch
const getHeroeByIdAsync = (id) =>{ 
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const heroeObtenido = getHeroeById(id);
            if (heroeObtenido) resolve(heroeObtenido);

            reject("No se pudo obtener un heroe");
        }, 1000);
    }
)};

getHeroeByIdAsync(3)
    .then((heroe)=>console.log("[INFO][getHeroeByIdAsync]",heroe))
    .catch((error)=>console.log("[ERROR][getHeroeByIdAsync]",error));

//Esta forma nos envia en el console.log o warn el primer parametro que reciba
getHeroeByIdAsync(10)
    .then(console.log)      //{"id": 3,"name": "Superman","owner": "DC"}
    .catch(console.warn);   //No se pudo obtener un heroe