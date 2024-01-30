import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        {/* Navbar */}
        <Navbar/>
      </nav>
      <main style={{ padding: '20px 50px'}}>
        { children }
      </main>
    </>
  )
}