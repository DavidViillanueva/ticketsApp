import { db } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { startDeletePreload } from "./preloads";
import { unsetActive } from "./ui";
import { types } from "../types/types";

//tickets structure
// {
//     tickets: [],
//     active: null
// }

export const startActiveTicket = ({
    id,
    type,
    name,
    lastname,
    email,
    model,
    pass,
    issue,
    price,
    state,
    wet,
    damage
}) => {
    return async ( dispatch ) => {

        Swal.fire({
            title: 'Activating preload',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const counter = await db.collection(`counter/`).get('tickets');

        let counterTickets;
        counter.forEach( counter => {
            counterTickets = counter.data()
        })

        let { data }= counterTickets;
        
        await db.collection('counter').doc('tickets').update({
            data: data + 1
        })

        const ticket = {
            counter: data,
            name,
            type,
            lastname,
            email,
            model,
            pass,
            issue,
            price,
            state,
            wet,
            damage
        }
        
        await db.collection(`tickets/`).add(ticket).then((value) => {
            console.log("Activado correctamente: "+value.id);
            dispatch( addTicket(value.id ,ticket) )
        }).catch( (er) => {
            console.log(`Ha ocurrido un error: ${er}`);
        });


        if( id !== '' ) {
            // si es un ticket nuevo, no una precarga
            dispatch( startDeletePreload(id) );
        }
        dispatch( unsetActive() );

        Swal.close();
    }
}


export const startLoadTickets = () => {
    return async( dispatch ) => {
        const ticketsSnap = await db.collection('tickets/').get();
        const tickets = [];

        ticketsSnap.forEach( ticket => {
            tickets.push({
                id: ticket.id,
                ...ticket.data()
            })
        });

        dispatch( setTickets(tickets) );

    }
}


export const addTicket = ( tid, ticket ) => ({
    type: types.ticketsNewTickets,
    payload: {
        tid,
        ...ticket
    }
})

export const setTickets = ( tickets ) => ({
    type: types.ticketsSetTickets,
    payload: tickets
})