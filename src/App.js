
import './App.css';
import Header from './components/header/Header';
import Data from './data/Data';
import { BrowserRouter as Router } from "react-router-dom"
import Navigate from './components/navigate/Navigate';
import { useState } from 'react';

function App() {

  const { productItems } = Data
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    const ProductExist = cartItems.find(Item => Item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map(Item => Item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : Item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemove = (product) => {
    const ProductExist = cartItems.find(Item => Item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter(Item => Item.id !== product.id));
    } else {
      setCartItems(cartItems.map(Item => Item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : Item))
    }
  }

  const handleCartClearance = () =>{
    setCartItems([]);
  }


  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Navigate productItems={productItems} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove} 
        handleCartClearance={handleCartClearance}
        />
      </Router>
    </div>
  );
}

export default App;
