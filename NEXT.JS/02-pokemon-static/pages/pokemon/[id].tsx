import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import confetti from 'canvas-confetti';

import { Layout } from '@/components/layout';
import { Pokemon } from '@/interfaces';
import { pokeApi } from '@/api';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { getPokemonInfo, localFavorites } from '@/utils';

type PokemonPageProps = {
  pokemon: Pokemon;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map( (value, index) => `${ index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const pokemon = await getPokemonInfo(id);

    if( !pokemon ){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
      props: {
        pokemon
      },
      revalidate: 86400
    }
};

const PokemonPage = ({ pokemon }: PokemonPageProps) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites( pokemon.id ));
  }, [])

  const onToggleFavorite = () =>{
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if( isInFavorites ) return;

    confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
            x: 1,
            y: 0,
        }
    });
  }

  return (
    <Layout title={ pokemon.name }>
        <article className='grid grid-cols-4 gap-2 my-2'>
            <Card isHoverable style={{ padding: '30px'}}>
                <CardBody>
                    <Image
                        src={ pokemon.sprites.other?.dream_world.front_default || 'no-image.png' }
                        alt={ pokemon.name }
                        width='100%'
                        height={ 200 }
                    />
                </CardBody>
            </Card>
            <Card className='col-span-3'>
                <CardHeader style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <h1 className='text-4xl capitalize'>{ pokemon.name }</h1>
                    <Button color='secondary' onClick={onToggleFavorite}>{ !isInFavorites ? 'Guardar en favoritos' : 'Quitar de favoritos'}</Button>
                </CardHeader>
                <CardBody>
                    <p className='text-xl'>Sprites: </p>
                    <div className='container flex flex-row justify-around'>
                        <Image
                            src={ pokemon.sprites.front_default }
                            alt={ pokemon.name }
                            width={ 300 }
                            height={ 300 }
                        />
                        <Image
                            src={ pokemon.sprites.back_default }
                            alt={ pokemon.name }
                            width={ 300 }
                            height={ 300 }
                        />
                        <Image
                            src={ pokemon.sprites.front_shiny }
                            alt={ pokemon.name }
                            width={ 300 }
                            height={ 300 }
                        />
                        <Image
                            src={ pokemon.sprites.back_shiny }
                            alt={ pokemon.name }
                            width={ 300 }
                            height={ 300 }
                        />
                    </div>
                </CardBody>
            </Card>
        </article>
    </Layout>
  )
}


export default PokemonPage