import { FavoriteCardPokemon } from '.';

type FavoritePokemonsProps = {
    pokemons: number[];
}

export const FavoritePokemons = ({ pokemons }:FavoritePokemonsProps) => {
  return (
    <div className='grid grid-cols-12 gap-4 my-2'>
      {
        pokemons.map( id => (
          <FavoriteCardPokemon key={id} id={id}/>
        ))
      }
    </div>
  )
}