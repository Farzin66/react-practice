import React from 'react'

const CounterButton = ({onIncrease}) => {
  return (
    <div>
        <button onClick={onIncrease}>Increase</button>
    </div>
  )
}

export default CounterButton