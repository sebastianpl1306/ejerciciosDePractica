import { ChangeEvent, FC, useContext, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next'

import { DeleteOutline, SaveOutlined } from '@mui/icons-material';
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material';

import { dbEntries } from '@/database';
import { Layout } from '@/components/layouts';
import { Entry, EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { dateFunctions } from '@/utils';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface EntryPageProps {
    entry: Entry;
}

export const EntryPage: FC<EntryPageProps> = ( { entry }: EntryPageProps ) => {
  const [inputValue, setInputValue] = useState( entry.description );
  const [status, setStatus] = useState<EntryStatus>( entry.status );
  const [touched, setTouched] = useState(false);
  const { updateEntry } = useContext(EntriesContext)

  const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) =>{
    setStatus( event.target.value as EntryStatus );
  }

  const onSave = () => {
    if( inputValue.trim().length === 0 ) return;

    const updatedEntry: Entry = {
        ...entry,
        description: inputValue,
        status
    }

    updateEntry(updatedEntry, true);
  }

  return (
    <Layout title="Editar - OpenJiraApp">
        <Grid
            container
            justifyContent='center'
            sx={{ marginTop: 2 }}
        >
            <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                <Card>
                    <CardHeader
                        title={`Entrada: ${ inputValue }`}
                        subheader={`Creada ${ dateFunctions.getFormatDistanceToNow(entry.createdAt) }`}
                    />
                    <CardContent>
                        <TextField 
                            sx={{ marginTop: 2, marginBottom: 1}}
                            fullWidth
                            placeholder="Nueva entrada"
                            autoFocus
                            multiline
                            label="Nueva Entrada"
                            value={ inputValue }
                            onChange={ onInputValueChanged }
                            helperText={ isNotValid && 'Ingrese un valor' }
                            onBlur={ () => setTouched(true) }
                            error={ isNotValid }
                        />

                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup
                                row
                                value={ status }
                                onChange={ onStatusChanged }
                            >
                                {
                                    validStatus.map( option => (
                                        <FormControlLabel 
                                            key={ option }
                                            value={ option }
                                            control={ <Radio/>}
                                            label={ capitalize(option) }
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>

                        <CardContent/>

                        <CardActions>
                            <Button
                                startIcon={ <SaveOutlined/>}
                                variant="contained"
                                onClick={ onSave }
                                disabled={ inputValue.length <= 0 }
                            >Save</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        <IconButton sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'error.dark'
        }}>
            <DeleteOutline/>
        </IconButton>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id : string };

    const entry = await dbEntries.getEntryById( id );

    if( !entry ){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}

export default EntryPage;