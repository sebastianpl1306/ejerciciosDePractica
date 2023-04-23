import { CircularProgress, Grid } from '@mui/material';

export const CheckingAuth = () => {
  return (
    <Grid
        container
        spacing={ 0 }
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
        <Grid item justifyContent='center'>
            <CircularProgress color='warning'/>
        </Grid>
    </Grid>
  )
}