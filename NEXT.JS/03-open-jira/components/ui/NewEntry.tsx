import { ChangeEvent, useContext, useState } from 'react';
import { AddCircleOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
// import { EntriesContext } from '@/context/entries';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);
  // const { addNewEntry } = useContext( EntriesContext );

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onSave = () =>{
    if( inputValue.length === 0 ) return;
    // addNewEntry(inputValue);
    setInputValue('');
    setTouched(false);
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {
        isAdding ? (
          <>
            <TextField 
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1}}
              placeholder='Nueva entrada'
              autoFocus
              multiline
              label="Nueva entrada"
              helperText={inputValue.length <= 0 && touched  && 'Ingrese un valor'}
              error={ inputValue.length <= 0 && touched }
              value={ inputValue }
              onBlur={ () => setTouched(true) }
              onChange={onTextFieldChanges}/>
            <Box display='flex' justifyContent='space-between'>
              <Button variant='text' onClick={() => setIsAdding(false)}>Cancelar</Button>
              <Button variant='outlined' color='secondary' endIcon={<SaveOutlined/>} onClick={onSave}>Guardar</Button>
            </Box>
          </>
        ) : (
          <Button
            startIcon={<AddCircleOutlined/>}
            fullWidth
            variant='outlined'
            onClick={() => setIsAdding(true)}>Agregar Tarea</Button>
        )
      }
    </Box>
  )
}
