import React from 'react'

export default function Category(props) {
    return (
        <div className='grid-div'>
            <div onClick={props.onClick}>
                <h2>{props.category}</h2>
            </div>
        </div>
    )
}
