import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/ui/Navbar';

type LayoutProps = {
  children: JSX.Element[] | JSX.Element,
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Sebastian Pabon Lopez'/>
        <meta name="description" content="Información sobre el Pokemons" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`${title}, todo lo relacionado a pokemons`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar/>

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}