import React from "react";

export const Book = ({ name, image, id }) => {
  return (
    <div>
      <img alt={name} src={image}></img>
      <div>{name}</div>
      <form>
        <label htmlFor={id}></label>
        <input type="number" id={id} />
        <button>Add to cart</button>
      </form>
    </div>
  );
};
