import { DragEvent, useContext } from 'react';
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { UIContext } from '@/context/ui';

type EntryCardProps = {
    entry: Entry;
}

export const EntryCard = ({ entry }: EntryCardProps) => {

  const { startDragging, endDragging } = useContext( UIContext );

  const onDragStart = ( event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  }

  const onDragEnd = () =>{
    endDragging();
  }

  return (
    <Card
        sx={{ marginBottom: 1 }}
        // Eventos de drag and drop
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                <Typography variant="body2">hace 30 min</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}