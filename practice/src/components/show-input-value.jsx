import React, { useState } from 'react'

const ShowInputValue = () => {
    const [value, setValue] = useState('')

    function printValue (e){
        setValue(e.target.value)
    }
  return (
    <>
      <input type='text'
       placeholder='type something...'
       value={value}
       onChange={printValue}
       />

      <p>{value === '' ? 'چیزی وارد نشده است' : value}</p>
    </>
  )
}

export default ShowInputValue