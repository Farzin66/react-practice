import React from 'react'

const AlertBox = ({type, message}) => {
  return (
    <>
      <div style={{backgroundColor:
       type === 'success' ? 'lightgreen'
       : type === 'error' ? 'red'
       : type === 'warning' ? 'orange'
       : 'lightgray',
       padding: '10px',
       margin: '8px 0',
     }}>
        <p>{message}</p>
      </div>
    </>
  )
}

export default AlertBox