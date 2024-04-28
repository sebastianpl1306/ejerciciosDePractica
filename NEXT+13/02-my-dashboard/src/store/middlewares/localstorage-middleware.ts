import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    return (next: Dispatch) => ( action: Action) => {
        console.log({ state });
        
    }
}