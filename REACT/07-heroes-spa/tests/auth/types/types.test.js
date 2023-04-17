import { types } from '../../../src/auth';

describe('Pruebas en types.js', () => {
    test('Debe tener los tpyes que se estan especificando', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Loggout'
        });
    })
});