import React from 'react'

export default function WrappedComp2(props) {
    return (
        <div>
            <button onClick={props.increment}>{props.counter}</button>
        </div>
    )
}
