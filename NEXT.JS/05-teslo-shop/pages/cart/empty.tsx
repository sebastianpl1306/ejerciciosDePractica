import NextLink from 'next/link';
import { Box, Typography, Link } from "@mui/material"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { ShopLayout } from "@/components/layouts"

const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito de compras" pageDescription="No hay artículos en el carrito de compras">
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' flexDirection={{ xs: 'column', md: 'row'}}>
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }}/>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography marginLeft={2}>Su carrito está vació</Typography>
                <Link 
                    href={'/'}
                    component={NextLink}
                    passHref
                    typography='h4'
                    color='secondary'
                >
                    Regresar
                </Link>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage