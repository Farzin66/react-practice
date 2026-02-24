import React, { useState } from 'react'

const ProfileStatus = () => {

    const [mode,setMode] = useState('view');
    const [userName, setUserName] = useState('Farzin')
    const [tempName, setTempName] = useState (userName)

    function handleEdit (){
        setTempName(userName)
        setMode('edit')
    }

    function handleSave(){
        setMode ('saving')
        
        setTimeout(() => {
            setUserName (tempName)
            setMode('view')
        }, 1500)
    }

    function handleCancel(){
        setMode ('view')
    }

  return (

    <>
        {mode === 'view' && (<div> <h2>View Mode</h2>
        <p>Username: {userName}</p>
        <button onClick={handleEdit}>Edit</button></div>)}

        {mode === 'edit' && (<div><h2>Edit Mode</h2>
        <input type="text" value={tempName} placeholder='Username'
        onChange={(e) => setTempName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button></div>)}

        {mode === 'saving' && (<div><h2>Saving Mode</h2>
        <p>Saving...</p></div>)}
    </>

  )
}

export default ProfileStatus