import { calendarApi } from '../../src/api';

describe('Pruebas en calendarApi', () => {
    test('Debe de tener la configuración por defecto', () => {
        expect(calendarApi.defaults.baseURL).toBe( process.env.VITE_API_URL );
    })

    test('Debe de tener el x-token en el header de todas las peticiones', async() => {
        const token = 'prueba-del-token';
        localStorage.setItem('token',token);
        const res = await calendarApi.post('/auth', { email: 'test@google.com', password: '123456'});
        expect(res.config.headers['x-token']).toBe(token);
    })
})