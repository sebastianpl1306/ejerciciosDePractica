import NextLink from 'next/link';
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Link href={'/'} component={NextLink} display='flex' alignItems='center'>
                <Typography variant='h6'>Teslo | </Typography>
                <Typography sx={{ ml: 0.5 }}>Shop</Typography>
            </Link>
            <Box flex={1}/>
            <Box sx={{ display: {xs: 'none', sm: 'block'}}}>
                <Link href={'/category/men'} component={NextLink} passHref>
                    <Button>Hombres</Button>
                </Link>
                <Link href={'/category/women'} component={NextLink} passHref>
                    <Button>Mujeres</Button>
                </Link>
                <Link href={'/category/kid'} component={NextLink} passHref>
                    <Button>Niños</Button>
                </Link>
            </Box>
            <Box flex={1}/>
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <Link href={'/cart'} component={NextLink} passHref>
                <IconButton>
                    <Badge badgeContent={ 2 } color='secondary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                </IconButton>
            </Link>

            <Button>Menú</Button>
        </Toolbar>
    </AppBar>
  )
}