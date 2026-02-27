import React from 'react'
import { useCounterStore } from '../stores/counter-store'

const SetCounter = () => {
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)

  return (
    <>
        <button onClick={increment}>+</button>
        <br />
        <button onClick={decrement}>-</button>
    </>
  )
}

export default SetCounter