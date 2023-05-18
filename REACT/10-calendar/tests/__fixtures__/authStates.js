export const initialState = {
    status: 'checking', // 'autheticated' , 'not-authenticated', 'checking'
    user: {},
    errorMessage: undefined,
}

export const autheticatedState = {
    status: 'autheticated', // 'autheticated' , 'not-authenticated', 'checking'
    user: {
        ui: 'pruebasid',
        name: 'Sebastian'
    },
    errorMessage: undefined,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'autheticated' , 'not-authenticated', 'checking'
    user: {},
    errorMessage: undefined,
}