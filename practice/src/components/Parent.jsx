import React, { useState } from 'react'
import CounterButton from './CounterButton'

const Parent = () => {
const[state,setState]=useState(0)

function handleIncrease () {
    setState(prev => prev + 1)

}
  
return (
    <div>
        <p>{state}</p>
        <br />
        <CounterButton onIncrease={handleIncrease}/>
    </div>
  )
}

export default Parent