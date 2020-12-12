import { types } from "../types/types";


export const startLoading = () => ({
    type: types.uiStartLoading,
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
})

export const setErrorMessage = ( msg ) => ({
    type: types.uiSetErrorMessage,
    payload: {
        msgError: msg
    }
})

export const unsetErrorMessage = () => ({
    type: types.uiUnsetErrorMessage
})

export const setActive = ( active ) => ({
    type: types.uiSetActive,
    payload: active
});

export const unsetActive = () => ({
    type: types.uiUnsetActive
});