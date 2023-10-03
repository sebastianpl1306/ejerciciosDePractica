import { useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from './';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

import styles from './EntryList.module.css';

type EntryListProps = {
  status: EntryStatus;
}

export const EntryList = ({ status }: EntryListProps) => {
  const { entries, updateEntry } = useContext( EntriesContext );
  const { isDragging, endDragging } = useContext( UIContext );
  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ),[ entries, status ]);

  const allowDrop = (event: DragEvent<HTMLDivElement> ) =>{
    event.preventDefault();
  }

  const onDropEntry = ( event: DragEvent<HTMLDivElement> )=>{
    const id = event.dataTransfer.getData('text');
    const entry = entries.find( e => e._id === id )!;
    entry.status = status;
    updateEntry( entry );
    endDragging();
  }

  return (
    <div onDrop={onDropEntry} onDragOver={ allowDrop } className={ isDragging ? styles.dragging : '' }>
      <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px'}}>
        {/* TODO: Cambiará dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {
            entriesByStatus.map( entry => (
              <EntryCard key={entry._id} entry={entry}/>
            ))
          }
        </List>
      </Paper>
    </div>
  )
}