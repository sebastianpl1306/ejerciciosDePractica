import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from '../../../src/store/calendar/calendarSlice';
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from '../../__fixtures__/CalendarStates';

describe('Pruebas en calendarSlice', () => {
    test('Debe de mostrar el componente por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState );
    })

    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent(events[0]) );
        expect(state.activeEvent).toEqual(events[0]);
    })

    test('onAddNewEvent debe de activar el evento', () => {
        const newEvent = {
            id: '3',
            start: new Date('2022-10-22 13:00:00'),
            end: new Date('2022-10-22 15:00:00'),
            title: 'Nuevo evento',
            notes: 'Este es un nuevo evento',
        }

        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent(newEvent) );
        expect(state.events).toContain(newEvent);
    })

    test('onUpdateEvent debe de actualizar el evento', () => {
        const updateEvent = {
            id: '2',
            start: new Date('2022-10-22 13:00:00'),
            end: new Date('2022-10-22 15:00:00'),
            title: 'Modificar un evento',
            notes: 'modificando un evento',
        }

        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent(updateEvent) );
        expect(state.events).toContain( updateEvent );
    })

    test('onDeleteEvent debe de borrar el evento activo', () => {
        const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent() );
        expect(state.events).not.toContain(events[0]);
        expect(state.activeEvent).toBe(null);
    })

    test('onLoadEvents debe de establecer los eventos', () => {
        const state = calendarSlice.reducer( initialState, onLoadEvents(events) );
        expect(state.events).toEqual(events);
    })

    test('onLogoutCalendar debe de limpiar el estado', () => {
        const state = calendarSlice.reducer( calendarWithEventsState, onLogoutCalendar() );
        expect(state).toEqual({ isLoadingEvents: true, events: [], activeEvent: null });
    })
})