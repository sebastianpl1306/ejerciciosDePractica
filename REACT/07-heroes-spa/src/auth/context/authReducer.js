import { types } from "../types/types";

export const authReducer = ( state = {}, action ) =>{
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logget: true,
                user: action.payload
            };
        case types.logout:
            return {
                logget: false
            };
        default:
            return state;
    }
}