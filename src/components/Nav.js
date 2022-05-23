import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ cartItems }) => {
  return (
    <nav>
      <Link to="/shopping-cart/">
        <h1>Logo</h1>
      </Link>
      <Link to="/shopping-cart/">Home</Link>
      <Link to="/shopping-cart/shop">Shop</Link>
      <Link to="/shopping-cart/cart">Cart - {cartItems}</Link>
    </nav>
  );
};
