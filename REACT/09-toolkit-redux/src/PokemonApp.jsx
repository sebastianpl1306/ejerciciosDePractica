import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store";

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { isLoading, pokemons, page } = useSelector(state => state.pokemon);

    useEffect(() => {
      dispatch( getPokemons(0));
    }, []);

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <h5>Loading: {isLoading ? 'True' : 'False'}</h5>
        <ul>
          {
            pokemons.map( pokemon => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))
          }
        </ul>
        <button disabled={isLoading} onClick={() => dispatch( getPokemons(page))}>Cargar mas</button>
    </>
  )
}