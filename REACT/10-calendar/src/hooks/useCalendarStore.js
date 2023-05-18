import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import { calendarApi } from '../api';
import { convertEventsToDate } from '../helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () =>{
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((store) => store.calendar);
    const { user } = useSelector((store) => store.auth);

    const setActiveEvent = ( calendarEvent ) =>{
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async( calendarEvent ) =>{
        //TODO: llegar al backend
        try {
            if( calendarEvent.id ){
                //Actualizando
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent );
                dispatch( onUpdateEvent({...calendarEvent, user}));
                return;
            }
        
            //Creando
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch( onAddNewEvent({...calendarEvent, id: data.event.id, user }));
        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }

    const startLoadingEvents = async() =>{
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDate( data.events );
            dispatch(onLoadEvents(events));
        } catch (error) {
            console.log(error);
        }
    }

    const startDeletingEvent = async() =>{
        //TODO: llegar al backend
        try {
            await calendarApi.delete(`/events/${ activeEvent.id }`);
            dispatch( onDeleteEvent() );
            Swal.fire('Evento eliminado', '', 'success');
        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
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
        startLoadingEvents,
    }
}