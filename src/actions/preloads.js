import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";


export const startNewPreload = ( name, lastname, model, pass, damage, wet, issue  ) => {
    return async( dispatch ) => {

        const newPreload = {
            name,
            lastname,
            model,
            pass,
            damage,
            wet,
            issue,

            date: new Date().getTime()
        }

        const doc = await db.collection(`preloads/`).add( newPreload );
        
        dispatch( addNewPreload( doc.id, newPreload ))

    }

};


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
})