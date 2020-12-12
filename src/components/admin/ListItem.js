import React from 'react'
import { useDispatch } from 'react-redux'
import { setActive } from '../../actions/ui';

const ListItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( setActive(item) );
    }

    return (
        <div 
            className="list__Item" 
            onClick={ handleClick }
        
        >
            <h3>{item.model }</h3>
            <hr/>
            <p>{ item.issue }</p>
            { (item.key) &&
                <>
                    <hr />
                    <p>{item.key}</p>
                </>
            }
        </div>
    )
}

export default ListItem;
