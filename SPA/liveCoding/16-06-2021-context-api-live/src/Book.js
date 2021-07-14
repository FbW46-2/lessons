import React from "react";

export const Book = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};
