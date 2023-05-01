import { singInWithGoogle, loginWithEmailPassword, registerUserWithEmailPassword, logoutFireBase } from '../../../src/FireBase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { startCreatingUserWithEmailPassword, startGoogleSignIn, startLogout, startSignInWithEmailPassword } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/FireBase/providers');

describe('Pruebas en los thunks de auth', () => {
    const dispatch = jest.fn();
    beforeEach(()=> jest.clearAllMocks());

    test('StartGoogleSignIn debe de llamar checkingCredentials y loging', async() => {
        const loginData = { ok: true, ...demoUser};
        await singInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()(dispatch);
        expect( dispatch ).toBeCalledWith( checkingCredentials() );
        expect( dispatch ).toBeCalledWith( login(loginData) );
    })

    test('StartGoogleSignIn debe de llamar checkingCredentials y logout - Error', async() => {
        const loginData = { ok: false, errorMessage: 'Error google'};
        await singInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()(dispatch);
        expect( dispatch ).toBeCalledWith( checkingCredentials() );
        expect( dispatch ).toBeCalledWith( logout(loginData.errorMessage) );
    })

    test('startSignInWithEmailPassword debe de llamar checkingCredentials y login', async() => {
        const loginData = { ok: true, ...demoUser};
        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startSignInWithEmailPassword()(dispatch);
        expect( dispatch ).toBeCalledWith( checkingCredentials() );
        expect( dispatch ).toBeCalledWith( login(loginData) );
    })

    test('startSignInWithEmailPassword debe de llamar checkingCredentials y logout', async() => {
        const loginData = { ok: false, errorMessage: 'Error correo'};
        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startSignInWithEmailPassword()(dispatch);
        expect( dispatch ).toBeCalledWith( checkingCredentials() );
        expect( dispatch ).toBeCalledWith( logout({errorMessage: loginData.errorMessage}) );
    })

    test('startCreatingUserWithEmailPassword debe llamar checkingCredentials y login', async() => {
        const loginData = { ok: true, ...demoUser};
        await registerUserWithEmailPassword.mockResolvedValue( loginData );

        await startCreatingUserWithEmailPassword({email: loginData.email, password: '12345', displayName: loginData.displayName})(dispatch);
        expect( dispatch ).toBeCalledWith( checkingCredentials() );
        expect( dispatch ).toBeCalledWith( login(loginData) );
    })

    test('startCreatingUserWithEmailPassword debe llamar checkingCredentials y logout', async() => {
        const loginData = { ok: false, errorMessage: 'Error registro'};
        await registerUserWithEmailPassword.mockResolvedValue( loginData );

        await startCreatingUserWithEmailPassword({email: loginData.email, password: '12345', displayName: loginData.displayName})(dispatch);
        expect( dispatch ).toBeCalledWith( checkingCredentials() );
        expect( dispatch ).toBeCalledWith( logout({errorMessage: loginData.errorMessage}) );
    })

    test('startLogout debe llamar logoutFireBase y clearNotesLogout', async() => {
        await startLogout()(dispatch);
        expect( logoutFireBase ).toHaveBeenCalled();
        expect( dispatch ).toBeCalledWith(clearNotesLogout());
        expect( dispatch ).toBeCalledWith(logout());
    })
})