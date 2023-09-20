import { FC } from 'react';
import Head from 'next/head';

import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

type MainLayoutProps = {
  children: JSX.Element[]
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Sebastian</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}