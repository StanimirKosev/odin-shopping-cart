import React from "react";
import { Link } from "react-router-dom";
import bag from "../images/bag.png";

export const Nav = ({ cartItems }) => {
  return (
    <nav>
      <Link to="/">
        <h1>Book e-commerce</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="link-cart">
          <div className="cart-icon">
            <div className="cart-quantity">{cartItems}</div>
            <img alt="bag-img" src={bag} />
          </div>
        </Link>
      </div>
    </nav>
  );
};
