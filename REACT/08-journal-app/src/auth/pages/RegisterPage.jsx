import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store';

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [(value)=>value.length >= 2,'El nombre debe tener mas de 1 caracter'],
  email: [(value)=>value.includes('@'),'El correo debe tener un @'],
  password: [(value)=>value.length >= 7,'La contraseña debe tener mas de 1 caracter']
}

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const { 
      email, emailValid,
      password, passwordValid,
      displayName, displayNameValid,
      formState,
      onInputChange,
      isFormValid
  } = useForm( formData, formValidations );

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingStatus = useMemo(() => errorMessage == 'checking', [status]);

  const onSumbit = ( event ) =>{
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={ onSumbit } >
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Nombre Completo" 
              type="text" 
              placeholder="Sebastian Pabon"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ formSubmitted && displayNameValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="text" 
              placeholder="ejemplo@dominio.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ formSubmitted && emailValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ formSubmitted && passwordValid }
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 12 } sx={{display: !!errorMessage ? '' : 'none'}}>
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            <Grid item xs={ 12 } sm={ 12 }>
              <Button variant="contained" fullWidth type="submit" disabled={ isCheckingStatus }>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}