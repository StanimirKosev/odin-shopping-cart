import React from "react";

export const Book = ({ name, image, id, books, handleChange }) => {
  const keys = Object.keys(books);

  return (
    <div>
      <img alt={name} src={image}></img>
      <div>{name}</div>
      <form>
        <label htmlFor={id}></label>
        <input
          type="number"
          id={id}
          name={keys[id]}
          value={books[keys[id]]}
          placeholder="Select Quantity"
          onChange={handleChange}
        />
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
};
