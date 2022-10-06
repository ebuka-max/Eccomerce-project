import React from 'react'
import "./cart.css"

const Cart = ({ cartItems, handleAdd, handleRemove, handleCartClearance }) => {
    const totalPrice = cartItems.reduce(
        (price, Item) => price + Item.quantity * Item.price,
         0
    );
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {cartItems.length >=1 && (<button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>)}
            </div>

            {cartItems.length === 0 && (<div className="cart-items-empty"> No items are added.</div>)}

            <div>
                {cartItems.map((Item) =>(
                    <div key={Item.id} className="cart-items-list">
                        <img className="cart-items-image" src={Item.image} alt={Item.name}/>
                        <div className="cart-items-name">{Item.name}</div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={() => handleAdd(Item)}>+</button>
                            <button className="cart-items-remove" onClick={() => handleRemove(Item)}>-</button>
                        </div>

                        <div className="cart-items-price">{Item.quantity} * ${Item.price}</div>
                    </div>
                ))}
            </div>

            <div className="totalPrice-name">
                  Total price
                  <div className="totalPrice">${totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart