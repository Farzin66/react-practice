import React, { useState } from 'react'

const ShowHide = () => {
   const[state, setState] = useState (false);

   function handleClick(){
        setState (prev => !prev)
   }

  return (
    <>
      <div>
        <button onClick={handleClick}>{!state ? 'Show' : 'Hide'}</button>
        {state && <p>متن تستی جهت نمایش</p>}
      </div>
    </>
  )
}

export default ShowHide