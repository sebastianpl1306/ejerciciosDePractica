import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal';
import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const onAddNewNote = () =>{
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        !!active ? <NoteView/> : <NothingSelectedView/>
      }
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        disabled={isSaving}
        onClick={ onAddNewNote }
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}