import React from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button type="submit">Checkout</button>
      <div>
        Thanks for checking out my project!
        <button onClick={() => navigate("/shopping-cart/")} type="button">
          Go to Homepage
        </button>
      </div>
    </div>
  );
};
