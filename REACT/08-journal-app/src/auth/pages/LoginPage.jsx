import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startGoogleSignIn, startSignInWithEmailPassword } from '../../store';
import { useForm } from '../../hooks';

import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

const initialForm = {
  email: '',
  password: ''
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isLogin = useMemo(() => status == 'checking', [status]);

  const { email, password, onInputChange } = useForm(initialForm);

  const onSubmit = (event) =>{
    event.preventDefault();
    dispatch( startSignInWithEmailPassword(email, password) );
  }

  const onGoogleSignIn = () =>{
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } aria-label="submit-form">
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password"
              inputProps={{
                'data-testid': 'password'
              }}
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container sx={{ mt: 1, display: !!errorMessage ? '' : 'none'}}>
            <Grid item xs={ 12 } sm={ 12 }>
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button type="submit" variant="contained" fullWidth disabled={isLogin}>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth onClick={ onGoogleSignIn } disabled={isLogin} aria-label="btn-google">
                <Google/> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={ RouterLink } color="inherit" to="/auth/register">
            Crear Una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}