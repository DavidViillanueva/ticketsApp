import React from 'react'
import ListItem from './ListItem'

const List = ({ items }) => {

    return (
        <div className="list__listContainer">
                {
                    items.map( item =>
                        <ListItem 
                            key={ item.id }
                            item={ item }
                        />
                    )
                }
        </div>
    )
}

export default List;
