import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden #1213124234' pageDescription='Resumen de la orden'>
        <Typography variant='h1' component='h1'>Order: #1213124234</Typography>
        
        {/* <Chip
            sx={{ my: 2 }}
            label="pendiente de pago"
            variant='outlined'
            color='error'
            icon={ <CreditCardOffOutlined/> }
        /> */}
        <Chip
            sx={{ my: 2 }}
            label="Orden ya fue pagada"
            variant='outlined'
            color='success'
            icon={ <CreditScoreOutlined/> }
        />

        <Grid container>
            <Grid item xs={12} sm={ 7 }>
                <CartList/>
            </Grid>
            <Grid item xs={12} sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Box display='flex' justifyContent='end'>
                            <Link
                                href='/checkout/address'
                                component={NextLink}
                                passHref
                                underline='always'
                            >Editar</Link>
                        </Box>

                        <Typography variant='subtitle1'>Dirección de entrega</Typography>
                        <Typography>Sebastian Pabon Lopez</Typography>
                        <Typography>320 Algún lugar</Typography>
                        <Typography>Bogotá</Typography>
                        <Typography>Colombia</Typography>
                        <Typography>+54 2342913</Typography>
                        <Divider sx={{ my: 1 }} />

                        {/* Orden Summary */}
                        <Box display='flex' justifyContent='end'>
                            <Link
                                href='/cart'
                                component={NextLink}
                                passHref
                                underline='always'
                            >Editar</Link>
                        </Box>
                        <OrderSummary/>
                        <Box sx={{ mt: 3}}>
                            {/* TODO:  */}
                            <h1>Pagar</h1>
                            <Chip
                                sx={{ my: 2 }}
                                label="Orden ya fue pagada"
                                variant='outlined'
                                color='success'
                                icon={ <CreditScoreOutlined/> }
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage