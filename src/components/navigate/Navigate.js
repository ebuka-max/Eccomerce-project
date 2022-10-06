import React from 'react'
import { Route, Routes} from "react-router-dom"
import Cart from '../cart/Cart'
import Product from '../product/Product'
import SignUp from '../signup/SignUp'

const Navigate = ({productItems, cartItems, handleAdd, handleRemove, handleCartClearance}) => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Product productItems = {productItems} handleAdd={handleAdd}/>} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/cart" exact element={<Cart cartItems = {cartItems} handleAdd={handleAdd} handleRemove={handleRemove} handleCartClearance={handleCartClearance}/>} />
      </Routes>
    </div>
  )
}

export default Navigate;