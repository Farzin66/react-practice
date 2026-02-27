import React from 'react'
import { useMultiSliceStore } from '../stores/multi-slice-store'

const MultiCounterDisplay = () => {
    const count = useMultiSliceStore((state) => state.count);
    const increment = useMultiSliceStore((state) => state.increment);
    const decrement = useMultiSliceStore((state) => state.decrement);

    // const { count, increment, decrement } = useMultiSliceStore((state) => ({ 
    //     count: state.count, 
    //     increment: state.increment, 
    //     decrement: state.decrement, 
    // }));

  return (
    <>
      <h1>Counter Display</h1>
      <br />
      <h2>Count: {count}</h2>
      <br />
      <button onClick={increment}>+</button>  
      <br />
      <button onClick={decrement}>-</button>
    </>
  )
}

export default MultiCounterDisplay