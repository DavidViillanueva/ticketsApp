import { types } from "../types/types";


const initialState = {
    preloads: [],
    active: null
}

export const preloadsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.preloadNewPreload:
            return {
                ...state,
                preloads: [ action.payload , ...state.preloads ]
            }


        case types.preloadSetPreloads:
            return {
                ...state,
                preloads: [...action.payload]
            }
    
        default:
            return state;

    }

}