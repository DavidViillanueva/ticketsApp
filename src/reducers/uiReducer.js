import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null,
    active: null
}


export const uiReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false  
            }

        case types.uiSetErrorMessage:
            return {
                ...state,
                msgError: action.payload.msgError
            }

        case types.uiUnsetErrorMessage:
            return {
                ...state,
                msgError: null
            }
        
        case types.uiSetActive:
            return {
                ...state,
                active: action.payload
            }
        
        case types.uiUnsetActive:
            return {
                ...state,
                active: null
            }
            
        default:
            return state;
    }
}