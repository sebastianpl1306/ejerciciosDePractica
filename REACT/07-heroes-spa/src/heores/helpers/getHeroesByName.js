import { heroes } from "../data";

export const getHeroesByName = (name) =>{
    const nameHero = name.toUpperCase().trim();
    if (nameHero.length === 0) return [];

    return heroes.filter(hero=> hero.superhero.toUpperCase().trim().includes( nameHero ));
}