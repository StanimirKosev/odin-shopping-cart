import React from "react";
import { useNavigate } from "react-router-dom";
import backgroud from "../images/background-2.avif";

export const Cart = () => {
  let navigate = useNavigate();

  return (
    <div className="cart-page">
      <img alt="backgroud-cart" src={backgroud} />
      <button
        type="submit"
        className="checkout-btn"
        onClick={() => navigate("/")}
      >
        Checkout
      </button>
      <div className="quote-two">
        <div className="quote">
          For books are more than books, they are the life, the very heart and
          core of ages past, the reason why men worked and died, the essence and
          quintessence of their lives.
        </div>
        <div className="author">Marcus Tullius Cicero</div>
      </div>
    </div>
  );
};
