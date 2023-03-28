import { useCounter, useFetch } from "../hooks";
import { LoadingPokemon } from "./LoadingPokemon";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(2);
  const { data, isLoading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=${counter}`);

  const pokemons = !!data && data.results;

  return (
    <>
        <h1>MultipleCustomHooks</h1>
        {
          isLoading ?(
            <LoadingPokemon />
          )
          :(
            pokemons.map(({name}) => {
              return <PokemonCard key={name} name={name}/>
            })
          )
        }
        <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>Cargar Mas</button>
    </>
  )
}