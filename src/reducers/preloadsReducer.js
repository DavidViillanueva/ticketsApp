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
    

        case types.preloadDelete:
            return {
                ...state,
                preloads: state.preloads.filter( ( preload ) => preload.id!==action.payload.pid )
            }
    
        default:
            return state;

    }

}