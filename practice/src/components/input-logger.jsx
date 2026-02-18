import React, { useEffect, useState } from 'react'

const InputLogger = () => {
    const[value, setValue] = useState('')
    function handleChange (e){
        setValue(e.target.value)
          
    }
    useEffect(() => {
        console.log(value); 
    }, [value]);

  return (
    <>
     <input onChange={handleChange} type="text" placeholder='type something...' />
    </>
  )

}
export default InputLogger