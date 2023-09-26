import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

export default function HomePage() {
  return (
    <Layout title='Home - OpenJiraApp'>
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )'}}>
            <CardHeader title="Pendientes"/>
            <CardContent>
              {/* Agregar una nueva tarea */}
              {/* Listado de las entradas */}
              <NewEntry/>
              <EntryList status='pending'/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )'}}>
            <CardHeader title="En Progreso"/>
            <CardContent>
              <EntryList status='in-progress'/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )'}}>
            <CardHeader title="Completadas"/>
            <CardContent>
              <EntryList status='finished'/>
            </CardContent>
          </Card>
        </Grid>
  
      </Grid>
    </Layout>
  )
}
