import React, { useState } from 'react'

export default function Button(props) {
    const colors = {
        red: "btn-danger",
        green: "btn-success",
        yellow: "btn-warning"
    }
    const [counter, setCounter] = useState(0)
    return (
        <button className={`btn ${colors[props.color]} m-1`} onClick={props.onClick} onMouseOver={() => setCounter(counter + 1)}>
            {props.children} {counter}
        </button>
    )
}
