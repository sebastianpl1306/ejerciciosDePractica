import { useState, useEffect } from 'react';

import { localFavorites } from '@/utils';
import { Layout } from '@/components/layout';
import { FavoritePokemons, NoFavorites } from '@/components/ui';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])

  return (
    <Layout title='PokeApp - Favoritos'>
      {
        favoritePokemons.length === 0
        ? (<NoFavorites/>)
        : (<FavoritePokemons pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage;