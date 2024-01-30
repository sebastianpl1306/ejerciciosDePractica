import NextLink from "next/link"
import { AuthLayout } from "@/components/layouts"
import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material"

const register = () => {
  return (
    <AuthLayout title='Registrarse'>
        <Box sx={{ width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Crear Cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Nombre' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Correo' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Contraseña' type='password' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" className="circular-btn" size="large" fullWidth>Ingresar</Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <Link href={'/auth/login'} component={NextLink} underline="always" passHref>
                        ¿Ya tienes cuenta?
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default register