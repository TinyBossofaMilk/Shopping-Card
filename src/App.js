import React, { useState } from "react";
import Shop from "./Shop"
import Cart from "./Cart";
import Nav from "./Nav";
import item from "./factories/item"
import uniqid from "uniqid"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const navLinks = ["Shop", "About", "My Cart"];
  const [cart, setCart] = useState([]);//{item id + quantity}
  const [shop, setShop] = useState([
    item("pants", uniqid(), 115),
    item("shirt", uniqid(), 115),
    item("shoes", uniqid(), 846)
  ]);

  const addToCart = (e) => {
    setCart(cart.concat({e, qty:1}));
  }; 

  console.log(cart)
  
  return (
    <div className="App">
      Hello World!
        <Nav navLinks={navLinks}/>
      <Router>
        {/* <Switch>
        </Switch> */}
        <Routes>
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Routes>
      </Router>
      {/* <shop shop={Shop} addToCart={addToCart}></shop>
      <Cart cart={cart} ></Cart> */}
    </div>
  );
}

export default App;