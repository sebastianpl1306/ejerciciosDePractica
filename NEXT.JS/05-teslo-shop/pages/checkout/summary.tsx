import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
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
                            <Button color='secondary' className='circular-btn' fullWidth>Confirmar Orden</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage