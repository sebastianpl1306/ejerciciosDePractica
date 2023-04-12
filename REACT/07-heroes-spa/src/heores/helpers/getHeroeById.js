import { heroes } from '../data';

export const getHeroeById = (idHero) =>{
    return heroes.find(({id})=> id === idHero);
}