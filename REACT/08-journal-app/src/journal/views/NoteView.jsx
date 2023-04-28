import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from '../../hooks';
import { setActiveNote, startDeleteNote, startLoadingFiles, startUpdateNote } from '../../store';
import { ImageGallery } from '../components';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const fileInputRef = useRef();

    const newFormatDate = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) Swal.fire('Nota Actualizada',messageSaved,'success');
    }, [messageSaved])

    const onUpdateNote = () =>{
        dispatch(startUpdateNote());
    }

    const onFileInputChange = ({ target }) =>{
        if (target.files === 0) return;

        dispatch(startLoadingFiles(target.files));
    }

    const onDelete = () =>{
        dispatch(startDeleteNote());
    }

  return (
    <Grid className="animate__animated animate__fadeIn animated__faster" container direction="row" justifyContent="space-between" sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>{newFormatDate}</Typography>
        </Grid>
        <Grid item>
            <IconButton color="primary" disabled={ isSaving } onClick={()=>fileInputRef.current.click()}>
                <UploadOutlined/>
            </IconButton>
            <input type="file" onChange={ onFileInputChange } multiple ref={fileInputRef} style={{display: 'none'}}/>
            <Button color="primary" sx={{padding: 2}} onClick={onUpdateNote}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={title}
                onChange={onInputChange}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió el día de hoy?"
                minRows={ 5 }
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>
        <Grid container justifyContent='end'>
            <Button
                onClick={ onDelete }
                sx={{ mt: 2}}
                color="error"
            >
                <DeleteOutline/>
            </Button>
        </Grid>
        {/** Image gallery */}
        <ImageGallery images={note.imageUrls}/>
    </Grid>
  )
}