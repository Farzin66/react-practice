import React, { useEffect, useRef, useState } from 'react'

const RefComponent = () => {
    const [count, setCount] = useState (0);
    const stateRef = useRef(null);

    function handleClick(){
        setCount(prev => prev + 1)
    }

    useEffect(() => {
        stateRef.current = count
    },[count])

  return (
    <>
        <button onClick={handleClick}>Increase</button>
        <p> Current : {count} </p>
        <br/>
        <p> Previues : {stateRef.current} </p>

    </>
  )
}

export default RefComponent