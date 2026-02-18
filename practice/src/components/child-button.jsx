import React from 'react'

const ChildButton = ({onIncrease}) => {
  return (
    <>
      <button onClick={onIncrease}>Increase</button>
    </>
  )
}

export default ChildButton