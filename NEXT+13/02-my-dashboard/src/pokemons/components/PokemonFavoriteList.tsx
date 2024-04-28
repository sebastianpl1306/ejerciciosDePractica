'use client'
import { useAppSelector } from '@/store/hooks'
import { PokemonGrid } from './PokemonGrid'
import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonFavoriteList = () => {
  const pokemonsState = useAppSelector(state => Object.values(state.pokemons));
  const [pokemons, setPokemons] = useState( pokemonsState );

  return (
    <div>
      { 
        pokemons.length === 0
        ? (<NoFavorites/>)
        : (<PokemonGrid pokemons={pokemons}/>)
      }
    </div>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}