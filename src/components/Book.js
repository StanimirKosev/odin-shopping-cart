import React from "react";

export const Book = ({ name, image, id, books, handleChange }) => {
  const keys = Object.keys(books);

  return (
    <div>
      <img alt={name} src={image} />
      <div>{name}</div>
      <label>
        Quantity:
        <input
          type="number"
          min="0"
          name={keys[id]} // name attribute corresponds to the state name
          value={books[keys[id]]} // value attr correspond to the state value
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
