import React from 'react'
import NextLink from 'next/link';
import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlined/>
            </IconButton>

            <Link href='/' component={NextLink}>
                <Typography variant='h6' color='white'>CookieMaster</Typography>
            </Link>

            <div style={{ flex: 1 }}/>

            <Link href='/theme-changer' component={NextLink}>
                <Typography variant='h6' color='white'>Cambiar Tema</Typography>
            </Link>
        </Toolbar>
    </AppBar>
  )
}
