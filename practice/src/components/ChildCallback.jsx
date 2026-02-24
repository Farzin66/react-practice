import React, { memo } from 'react'

const ChildCallback = memo(({sampleFn}) => {
    console.log('Child Component Rendered');
  return (
    <>
      <h2>Child</h2>
    </>
  )
})

export default ChildCallback