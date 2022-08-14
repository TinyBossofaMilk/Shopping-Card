import React, { useState } from "react";
import Shop from "./Shop"
import Cart from "./Cart";
import Nav from "./Nav";
import item from "./factories/item"
import uniqid from "uniqid"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  // const navLinks = ["about", "shop", "cart"];
  const [cart, setCart] = useState([]);//{item id + quantity}
  const [shop, setShop] = useState([
    item("pants", uniqid(), 115),
    item("shirt", uniqid(), 115),
    item("shoes", uniqid(), 846)
  ]);

  const addToCart = (item) => {
    function indexOfItem(newItem){
      for(let i = 0; i < cart.length; i++){
        if(cart[i].item == (newItem))
        return i;
      }
      return -1;
    }
    
    let index = indexOfItem(item);
    if(index === -1)
      {setCart(cart.concat({item, qty:1}));}
    else
      { 
        let cartcpy = [...cart];
        cartcpy[index] = {item: cartcpy[index].item, qty: cartcpy[index].qty + 1}
        setCart(cartcpy);
      }
  }; 

  console.log(cart)
  
  return (
    <div className="App">
      Hello World!
      <Router>
        <Nav/>
        <Routes>
          {/* <Route path="about" element={<Shop shop={shop} addToCart={addToCart} />} /> */}
          <Route path="shop" element={<Shop shop={shop} addToCart={addToCart} />} />
          <Route path="cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
          <Cart cart={cart} />
    </div>
  );
}

export default App; 