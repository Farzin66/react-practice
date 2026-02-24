import React, { useState } from 'react'

const ToggleMessage = () => {
    const [show, setShow] = useState(false)

    function handleShow (){
        setShow(prev => !prev)
    }

  return (
    <div>
        <button onClick={handleShow}>Toggle</button>
        {/* {show ? <p>Hello</p> : null} */}
        {show && <p>Hello</p>}
    </div>
  )
}

export default ToggleMessage