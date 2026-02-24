import React, { useEffect, useState } from 'react'

const DebounceInput = ({delay = 1000, onDebounce}) => {
    const [text,setText] = useState ('')

   function handleChange(e){
    setText(e.target.value)
   }

   useEffect (() => {
    const timer = setTimeout(() => {
        onDebounce(text)
        },delay)

    return () => {
        clearTimeout(timer)
    }
   },[text, delay])

  return (
    <>
    <input type="text" value={text}  placeholder='Type sth...' onChange={handleChange}/>
    </>
  )
}

export default DebounceInput