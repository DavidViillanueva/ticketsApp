import React from 'react'

const ListItem = ({ item }) => {
    console.log(item);

    return (
        <div className="list__Item">
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
