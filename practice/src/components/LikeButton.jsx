import React, { useState } from 'react'

const LikeButton = () => {
    const [like,setLike] = useState (0)
  return (
    <div>
        <p>Likes: {like}</p>
        <button onClick={() => {
            setLike(prev => prev + 1)
        }}>
            Like
        </button>
    </div>
  )
}

export default LikeButton