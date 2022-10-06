import React from 'react'
import "./product.css"

const Product = ({ productItems, handleAdd }) => {
  return (
    <div className="products">
      {productItems.map(item => (
        <div className="card">
          <div>
            <img className="product-image" src={item.image} alt={item.name} />
          </div>

          <div>
            <h3 className="product-name">{item.name}</h3>
          </div>
          <div className="product-price">${item.price}</div>
          <div>
            <button className="product-add-button" onClick={() =>handleAdd(item)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product