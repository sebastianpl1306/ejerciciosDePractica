import { useContext } from 'react';

import { UIContext } from '@/context/ui';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = () => {
  const { openSideMenu } = useContext( UIContext )

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton size='large' edge='start' onClick={openSideMenu}>
              <MenuOutlined/>
            </IconButton>

            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}