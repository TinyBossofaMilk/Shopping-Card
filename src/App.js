import React, { useState } from "react";
import Catalog from "./Catalog";
import Cart from "./Cart";
import item from "./factories/item"

function App() {
  const {cart, setCart} = useState([]);//{item id + quantity}
  const {catalog, setCatalog} = useState([
    item("pants", 1, 115),
    item("shirt", 22, 115),
    item("shoes", 63, 846)
  ]);
  // item=(name, id, price)

  const addItemtoCart = (item) => {
    setCart(cart.concat(item));
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
