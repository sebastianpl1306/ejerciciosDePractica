import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from '../components';
import { localizer, getMessagesES } from '../helpers';
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {

  const { events, setActiveEvent } = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const { openDateModal } = useUiStore();

  const eventStyleGetter = ( event, start, end, isSelected ) =>{

    const style= {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return{
      style
    }
  }
  
  const onDoubleClick = ( event ) =>{
    openDateModal();
  }

  const onSelect = ( event ) =>{
    setActiveEvent(event);
  }

  const onViewChanged = ( event ) =>{
    localStorage.setItem('lastView', event );
    setLastView( event );
  }

  return (
    <>
      <Navbar/>
      <Calendar
        localizer={localizer}
        culture='es'
        events={ events }
        startAccessor="start"
        defaultView={ lastView }
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />
      <CalendarModal/>
      <FabAddNew/>
      <FabDelete/>
    </>
  )
}