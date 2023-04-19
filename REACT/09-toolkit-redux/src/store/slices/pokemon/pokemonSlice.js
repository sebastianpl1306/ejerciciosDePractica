import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: true
    },
    reducers: {
        startLoadingPokemons: (state ) => {
            state.isLoading = true;
        },
        setPokemon: (state, action) =>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});

export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions;