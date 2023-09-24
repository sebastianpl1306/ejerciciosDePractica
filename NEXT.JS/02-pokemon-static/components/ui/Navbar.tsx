import NextLink from 'next/link';
import { Link, Spacer, semanticColors } from '@nextui-org/react';
import Image from 'next/image';

type NavbarProps = {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <header style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: semanticColors.dark.default[50]
    }}>
        
        <Link href={'/'} passHref as={NextLink} className='text-2xl'>
          <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
            alt='Ditto Image'
            width={70}
            height={70}
          />
          Pokémon
        </Link>

        <Spacer style={{flex: 1}}/>
  
        <NextLink href={'/favorites'} color='white'>Favoritos</NextLink>
    </header>
  )
}