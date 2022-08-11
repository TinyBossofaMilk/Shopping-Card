import React, { useState } from "react";
import Catalog from "./Catalog";
import Cart from "./Cart";
import item from "./factories/item"
import uniqid from "uniqid"

function App() {
  const [cart, setCart] = useState([]);//{item id + quantity}
  const [catalog, setCatalog] = useState([
    item("pants", uniqid(), 115),
    item("shirt", uniqid(), 115),
    item("shoes", uniqid(), 846)
  ]);

  const addToCart = (item) => {
    setCart(cart.concat({item, qty:1}));
  }; 

  // console.log(catalog)
  console.log(cart)
  // console.log(item("pants", 1, 115))
  
  return (
    <div className="App">
      Hello World!
      <nav></nav>
      <Catalog catalog={catalog}></Catalog>
      <Cart cart={cart} addToCart={addToCart}></Cart>
    </div>
  );
}

export default App;