import React, { useState } from "react";
import Catalog from "./Catalog";
import Cart from "./Cart";
import item from "./factories/item"

function App() {
  // item=(name, id, price)
  const {cart, setCart} = useState([]);
  const {catalog, setCatalog} = useState([]); //{item id + quantity}

  const addItemtoCart = (item) => {

    setCart(cart.concat(item))
  };

  return (
    <div className="App">
      Hello World!
      <nav></nav>
      <Catalog catalog={catalog}></Catalog>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;
