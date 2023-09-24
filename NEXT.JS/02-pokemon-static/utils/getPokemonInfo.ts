import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async ( nameOrId: string ) => {
    try {
        const { data: { id: dataId, name, sprites} } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        return {
            id: dataId,
            name,
            sprites
        }
    } catch (error) {
        return null;
    }
    
}