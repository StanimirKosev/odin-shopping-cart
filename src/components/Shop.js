import React from "react";
import { inventory } from "./inventory";
import { Book } from "./Book";

export const Shop = ({ books, handleChange }) => {
  return (
    <div>
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
