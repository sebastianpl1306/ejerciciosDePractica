import { Image } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <div className='container flex flex-col items-center justify-center' style={{height: 'calc(100vh - 100px)'}}>
        <p className='text-3xl'>No hay favoritos</p><br/>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
          width={250}
          height={250}
          style={{
            opacity: 0.3
          }}
        />
    </div>
  )
}
