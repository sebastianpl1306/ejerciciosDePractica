import { Metadata } from "next";
import { PokemonFavoriteList } from "../../../pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Encuentra aca tus pokemons favoritos'
}

export default async function PokemonLayout() {

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Pokémons Favoritos <small className="text-blue-500">Global state</small></span>
      <PokemonFavoriteList/>
    </div>
  );
}