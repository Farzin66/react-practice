import React from 'react'

const UserCard = ({firstName, lastName, age} ) => {
  return (
    <div>
        <p>Name: {firstName} {lastName}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default UserCard