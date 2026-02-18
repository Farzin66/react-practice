import React, { useState } from 'react'

const ToggleButton = () => {

    const [state, setState] = useState(true)

    function handleToggle (){
        setState (!state)
    }

  return (
    <>
      <button onClick={handleToggle}>
        {state ? 'On' : 'Off'}
      </button>
    </>
  )
}

export default ToggleButton