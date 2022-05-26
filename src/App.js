import "./App.css";
import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import githubLogo from "./images/github.png";
import goodreadsLogo from "./images/goodreads.png";

// things to improve in the project - testing , increment/decrement btns to the input fields

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
          <Route path="/odin-shopping-cart" element={<Home />} />
          <Route
            path="/odin-shopping-cart/shop"
            element={<Shop books={state} handleChange={handleChange} />}
          />
          <Route path="/odin-shopping-cart/cart" element={<Cart />} />
        </Routes>
        <div className="footer">
          <div>Copyright &copy; 2022 StanimirKosev</div>
          <a href="https://github.com/StanimirKosev">
            <img alt="github-logo" src={githubLogo} />
          </a>
          <a href="https://www.goodreads.com/user/show/124508945-stanimir-kosev">
            <img alt="goodreads-logo" src={goodreadsLogo} />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
