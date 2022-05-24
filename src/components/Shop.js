import React from "react";
import { useNavigate } from "react-router-dom";
import { inventory } from "./inventory";
import { Book } from "./Book";

export const Shop = ({ books, handleChange }) => {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/shopping-cart/cart")} type="button">
        Navigate to Cart
      </button>
      {inventory.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          image={book.image}
          id={book.id}
          books={books}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};
