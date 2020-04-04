import React from 'react'

require('./IncrementComponent.scss');


export default function IncrementComponent(props) {
    const { incrementerName, itemCount, fieldName } = props
    return (
        <div className='incrementContainer'>
            <span className='itemTitle'>{incrementerName}</span> 
            <div className='buttonContainer'>
                <button className='inc' onClick={(e) => props.incrementerHandler(e, fieldName, -1)}>-</button>
                <input className='itemCount' type='number' value={itemCount} onChange={(e) => props.incrementerHandler(e, fieldName, e.target.value)} />
                <button className='dec' onClick={(e) => props.incrementerHandler(e, fieldName, 1)}>+</button>
            </div>
        </div>
    )
    
}
