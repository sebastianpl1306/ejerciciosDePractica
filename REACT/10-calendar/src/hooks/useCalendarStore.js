import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () =>{
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((store) => store.calendar);

    const setActiveEvent = ( calendarEvent ) =>{
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async( calendarEvent ) =>{
        //TODO: llegar al backend

        if( calendarEvent._id ){
            //Actualizando
            dispatch( onUpdateEvent({...calendarEvent}));
        }else{
            dispatch( onAddNewEvent({id: new Date().getTime(),...calendarEvent}));
        }
    }

    const startDeletingEvent = () =>{
        //TODO: llegar al backend
        dispatch( onDeleteEvent() );
    }

    return{
        //propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //eventos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}