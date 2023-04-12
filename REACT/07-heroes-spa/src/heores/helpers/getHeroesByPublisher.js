import { heroes } from "../data";

export const getHeroesByPublisher = (publisher) =>{
    const allPublishe = ['DC Comics', 'Marvel Comics'];
    if (!allPublishe.includes(publisher)) throw new Error(`${publisher} is invalid publisher`);
    return heroes.filter((heroe) => heroe.publisher === publisher);
};