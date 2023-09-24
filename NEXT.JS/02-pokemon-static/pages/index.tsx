import type { InferGetStaticPropsType, GetStaticProps } from 'next'

import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';
import { PokemonCard } from '@/components/pokemon';

type Data = {
  pokemons: SmallPokemon[]
}

export const getStaticProps: GetStaticProps<{pokemons: SmallPokemon[]}> = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
};

export default function HomePage({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='Mi Pokemon 20'>
      <section className='grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-2 justify-start py-4'>
        {
          pokemons.map( pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </section>
    </Layout>
  )
}