import React, { useState } from 'react'


export default function highOrder(WarppedComp) {//Function that return Hight Order Component , passing into it the wrapped component , so can be accessed as 

    return (
        function HighOrder() { //React Component
            const [counter, setCounter] = useState(0)

            return (
                <div>
                    {/* Access the props from  the High order component and pass them to the */}
                    <WarppedComp counter={counter} increment={() => setCounter(x => x + 1)}></WarppedComp>
                </div>)
        }
    )
}
