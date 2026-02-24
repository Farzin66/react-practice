import React from 'react'

const Product = () => {

    const title = 'Laptop'
    const price = 1200
    const inStock = true

  return (
    <div>
        <h2>Product: {title}</h2>
        <p>Price: {price}$</p>
        <p>{inStock ? 'Available' : 'Out of stock' }</p>
    </div>
  )
}

export default Product