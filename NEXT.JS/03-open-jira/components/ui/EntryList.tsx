import { List, Paper } from '@mui/material';
import { EntryCard } from './';
import { EntryStatus } from '@/interfaces';
import { useContext, useMemo } from 'react';
import { EntriesContext } from '@/context/entries';

type EntryListProps = {
    status: EntryStatus;
}

export const EntryList = ({ status }: EntryListProps) => {
  const { entries } = useContext( EntriesContext );
  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ),[ entries, status ]);

  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px'}}>
            {/* TODO: Cambiará dependiendo si estoy haciendo drag o no */}
            <List sx={{ opacity: 1 }}>
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