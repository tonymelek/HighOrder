import React from 'react'

export default function WrappedComp1(props) {
    return (
        <div>
            <h1 onMouseOver={props.increment}>{props.counter}</h1>

        </div>
    )
}
