import Head from 'next/head';
import { Box } from '@mui/material';
import { NavBar, Sidebar } from '../ui';

type LayoutProps = {
    title?: string,
    children: JSX.Element[] | JSX.Element
}

export const Layout = ({ title = 'OpenJiraApp', children }: LayoutProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Head>
            <title>{`${title}`}</title>
        </Head>
        <NavBar/>
        <Sidebar/>

        <Box sx={{ padding: '10px 20px'}}>
          { children }
        </Box>
    </Box>
  )
}