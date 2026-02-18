import React from 'react'

const ProductCard = ({title, price, description}) => {
  return (
    <>
      <div>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
      </div>
    </>
  )
}

export default ProductCard