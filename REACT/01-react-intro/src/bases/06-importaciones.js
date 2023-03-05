// import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes'

// Poco optimizado
const getHeroeById1 = (id) => {
    return heroes.find((heroe) => {
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
    })
}; 

//Medio optimizado
const getHeroeById2 = (id) => heroes.find((heroe)=>{
    return heroe.id === id;
});

//Alto optimizado
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));
console.log(getHeroeById1(2));
console.log(getHeroeById2(2));

const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
console.log(owners);