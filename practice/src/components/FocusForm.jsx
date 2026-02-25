import React, { useEffect, useRef } from 'react'

const FocusForm = () => {
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const passRef = useRef(null);

    useEffect(() =>{
        nameRef.current.focus();
    },[])

    function nameKey (e){
        if (e.key === 'Enter'){
         mailRef.current.focus()
        }
    }

    function mailKey (e){
        if (e.key === 'Enter'){
         passRef.current.focus()
        }
    }

    function changeFocus (e){
        e.preventDefault();
        passRef.current.focus();
    }
  return (
    <>
    <form>
        <input 
          ref={nameRef} 
          type="text" 
          placeholder='Enter your name'
          onKeyDown={nameKey} 
        />
        <br />
        <input 
          ref={mailRef} 
          type="mail" 
          placeholder='Enter your Email' 
          onKeyDown={mailKey}  
        />
        <br />
        <input
           ref={passRef} 
           type="password" 
           placeholder='Enter your password' 
        />
        <br />
        <button type='button' onClick={changeFocus}>Focus on Password</button>
    </form>
    </>
  )
}

export default FocusForm