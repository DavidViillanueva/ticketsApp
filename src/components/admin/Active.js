import React from 'react';
import { useSelector } from 'react-redux';
import ActivePreloads from './ActivePreloads';
import ActiveTicket from './ActiveTicket';


const Active = () => {

    const { active } = useSelector(state => state.ui);


    return (
        <div className="active__block">
            {(active.price)?
                <ActiveTicket active={active} />
            :
                <ActivePreloads active={active} />
            }
        </div>
    )
}

export default Active
