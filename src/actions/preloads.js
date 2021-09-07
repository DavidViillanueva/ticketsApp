import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { unsetActive } from "./ui";

export const startNewPreload = ( name, lastname, email, model, pass, damage, wet, issue,type  ) => {
    return async( dispatch ) => {
        Swal.fire({
            title: 'Uploading preload',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });

        const newPreload = {
            name,
            lastname,
            email,
            model,
            pass,
            damage,
            wet,
            issue,
            type,
            active:false,

            date: new Date().getTime()
        }

        const doc = await db.collection(`preloads/`).add( newPreload );
        
        Swal.close();
        
        
        Swal.fire('Saved',`Thank's ${name}!`,'success');

        dispatch( addNewPreload( doc.id, newPreload ))

    }

};

export const startDeletePreload = ( pid ) => {
    return async( dispatch ) => {
        Swal.fire({
            title: 'Deleting preload',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });

        const doc = await db.doc(`preloads/${ pid }`).delete();

        dispatch( deletePreload(pid) );
        dispatch( unsetActive() );
        Swal.close();
    }
}

export const deletePreload = (pid) => ({
    type: types.preloadDelete,
    payload: {
        pid
    }
})



export const addNewPreload = ( pid, preload) => ({
    type: types.preloadNewPreload,
    payload:{
        pid,
        ...preload
    }
});

export const startLoadPreloads = () => {
    return async( dispatch ) => {
        const preloadsSnap = await db.collection(`preloads/`).get();
        const preloads = [];


        preloadsSnap.forEach( preload => {
            preloads.push({
                id: preload.id,
                ...preload.data()
            })
        })

        dispatch( setPreloads(preloads) );
    }
}

export const setPreloads = ( preloads ) =>({
    type: types.preloadSetPreloads,
    payload: preloads
});