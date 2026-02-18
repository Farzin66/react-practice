import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function increase (){
        if (counter <= 10){
        setCounter(counter + 1)}
    }

    function decrease (){
        if (counter > 0){
        setCounter(counter - 1)}
    }

  return (
    <>
      <div>
        <p>{counter}</p>
        <button onClick={increase} disabled={counter === 10}>Increase</button>
        <br />
        <button onClick={decrease} disabled={counter === 0}>Decrease</button>
      </div>
    </>
  )
}

export default Counter


