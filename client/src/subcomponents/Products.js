import React from 'react'

export default function Products(props) {
    return (
        <div className='grid-div'>
            <div onClick={props.onClick}>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}
