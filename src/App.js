import "./App.css";
import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState(0);
  // for the book quantity in the input fields
  const [state, setState] = useState({
    firstBook: 0,
    secondBook: 0,
    thirdBook: 0,
    fourthBook: 0,
    fifthBook: 0,
    sixthBook: 0,
    seventhBook: 0,
    eightBook: 0,
    ninthBook: 0,
    tenthBook: 0,
  });

  // single onChange for all inputs
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    const sumQuantity = Object.values(state).reduce(
      (sum, val) => parseInt(sum) + parseInt(val)
    );
    setCartItems(sumQuantity);
  }, [state]);

  return (
    <Router>
      <div>
        <Nav cartItems={cartItems} />
        <Routes>
          <Route path="/shopping-cart/" element={<Home />} />
          <Route
            path="/shopping-cart/shop"
            element={<Shop books={state} handleChange={handleChange} />}
          />
          <Route path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
