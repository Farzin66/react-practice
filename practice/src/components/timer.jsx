import React, { useEffect, useState } from 'react'

const Timer = () => {
   const[time, setTime] = useState (0);
   useEffect (()=>{
    const id = setInterval(() => {setTime(prev => prev + 1)},1000)
    return () => {
        clearInterval(id)
    }
   },[])
 return (
    <>
        <p>{time}</p>
    </>
  )
}

export default Timer