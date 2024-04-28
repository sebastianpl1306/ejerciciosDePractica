import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PokemonsState {
    [key: string]: SimplePokemon
}

const getInitialState = (): PokemonsState => {
    const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' );
    return favorites
}

const initialState: PokemonsState = {
    ...getInitialState,
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<SimplePokemon> ) => {
            const pokemon = action.payload;
            const { id } = pokemon;

            if ( !!state[id]) {
                delete state[id];
                return;
            }

            state[id] = pokemon;
        },
    }
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer