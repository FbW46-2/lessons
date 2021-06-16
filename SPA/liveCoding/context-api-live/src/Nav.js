import React, { useContext } from "react";
import { BookContext } from "./BookContext";

import "./Nav.css";

export const Nav = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div className="Navbar">
      <h3>Dilshod</h3>
      <p>List of books: {books.length}</p>
    </div>
  );
};
