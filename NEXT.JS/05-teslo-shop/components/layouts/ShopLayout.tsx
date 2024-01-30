import Head from 'next/head';
import { Navbar, SideMenu } from '../ui';

interface ShopLayoutProps {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: JSX.Element | JSX.Element[]
}

export const ShopLayout = ({ title, pageDescription, imageFullUrl, children }: ShopLayoutProps) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={ pageDescription } />
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />
            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl }/>
                )
            }
        </Head>
        <nav>
            <Navbar/>
        </nav>

        <SideMenu/>
        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>
    </>
  )
}
