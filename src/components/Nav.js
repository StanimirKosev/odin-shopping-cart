import React from "react";
import { Link } from "react-router-dom";
import bag from "../images/bag.png";

export const Nav = ({ cartItems }) => {
  return (
    <nav>
      <Link to="/odin-shopping-cart">
        <h1>Book e-commerce</h1>
      </Link>
      <div className="links">
        <Link to="/odin-shopping-cart">Home</Link>
        <Link to="/odin-shopping-cart/shop">Shop</Link>
        <Link to="/odin-shopping-cart/cart" className="link-cart">
          <div className="cart-icon">
            <div className="cart-quantity">{cartItems}</div>
            <img alt="bag-img" src={bag} />
          </div>
        </Link>
      </div>
    </nav>
  );
};
