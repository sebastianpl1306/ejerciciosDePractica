import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
// import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por Id', () => {
        const id= 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {
        const id= 100;
        const hero = getHeroeById( id );

        //Evalua que sea null, undefined o false
        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toEqual(3);
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    })

    test('getHeroesByOwner debe retornar un arreglo de Marvel', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toEqual(2);
    })
})