import { types } from "../types/types";

// {
//     tickets: [],
//     active: null 
// }


export const ticketReducer = ( state, action ) => {
    switch ( action.type ) {
        case types.ticketNewPreload: 
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                lastname: action.payload.lastname,

            }
    
        default:
            break;
    }
}