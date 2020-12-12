import React from 'react'
import { useDispatch } from 'react-redux'
import { unsetActive } from '../../actions/ui';

const Active = () => {

    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch( unsetActive() );
    }

    return (
        <div className="active__block">
            <h1>Active</h1>
            <button
                onClick={ handleBack }
            >
                Go Back!
            </button>
        </div>
    )
}

export default Active
