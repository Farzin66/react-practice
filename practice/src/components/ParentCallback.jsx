import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'

const ParentCallback = () => {
    const [count, setCount] =useState(0)

    const handleClick = useCallback (() => {
        setCount(prev => prev + 1)
    },[])

  return (
    <>
       <h2>Parent</h2>
       <p>{count}</p>
       <button onClick={handleClick}>Increase</button>
       <br />
       <ChildCallback sampleFn = {handleClick}/> 
    </>
  )
}

export default ParentCallback