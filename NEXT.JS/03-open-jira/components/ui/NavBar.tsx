import { useContext } from 'react';
import NextLink from 'next/link';

import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { UIContext } from '@/context/ui';

export const NavBar = () => {
  const { openSideMenu } = useContext( UIContext )

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton size='large' edge='start' onClick={openSideMenu}>
              <MenuOutlined/>
            </IconButton>

            <Link underline='none' color='white' href="/" component={NextLink}>
              <Typography variant='h6'>OpenJira</Typography>
            </Link>
        </Toolbar>
    </AppBar>
  )
}