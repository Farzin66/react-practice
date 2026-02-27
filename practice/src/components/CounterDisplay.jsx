import React from 'react'
import { useCounterStore } from '../stores/counter-store'

const CounterDisplay = () => {
    const count = useCounterStore((state) => state.count);
  return (
    <>
      <h2>Counter: {count}</h2>
    </>
  )
}

export default CounterDisplay