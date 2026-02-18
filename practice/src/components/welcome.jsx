import React, { useEffect } from 'react'

const Welcome = () => {

    useEffect(() => {
        console.log('welcom')
    },[])

  return (
    <div>Welcome Page</div>
  )
}

export default Welcome