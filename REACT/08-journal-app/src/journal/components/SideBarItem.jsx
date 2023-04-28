import { useDispatch } from 'react-redux';

import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { setActiveNote } from '../../store';
import { useMemo } from 'react';

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
    const dispatch = useDispatch();

    const newTitle = useMemo(() =>
        title.length >= 17 ? `${title.substring(0,17)}...` : title
    , [title]);

    const newBody = useMemo(() =>
        body.length >= 70 ? `${body.substring(0,70)}...` : body
    , [body]);

    const onActiveNote = ()=> { 
        dispatch(setActiveNote({ id, title, body, date, imageUrls }));
    }

  return (
    <ListItem disablePadding onClick={ onActiveNote }>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle }/>
                <ListItemText secondary={ newBody }/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}