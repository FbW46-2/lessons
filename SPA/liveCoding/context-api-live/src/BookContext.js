import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "ABC",
      price: "50 Euro",
      id: 1,
    },
    {
      name: "JavaScript tutorial",
      price: "150 Euro",
      id: 2,
    },
    {
      name: "React",
      price: "245 Euro",
      id: 3,
    },
    {
      name: "React 2021",
      price: "245 Euro",
      id: 4,
    },
  ]);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
