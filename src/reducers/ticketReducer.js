import { types } from "../types/types";

// {
//     tickets: [],
//     active: null 
// }

const initialState = {
    tickets: [],
    active: null
}


export const ticketReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case types.ticketsNewTickets:
            return {
                ...state,
                tickets: [ action.payload, ...state.tickets ]
            }
        case types.ticketsSetTickets:
            return {
                ...state,
                tickets: [ ...action.payload ]
            }
    
        default:
            return state;
    }
}