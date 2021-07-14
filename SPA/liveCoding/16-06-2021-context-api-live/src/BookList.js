import React, { useState, useContext } from "react";
import { Book } from "./Book";
import { BookContext } from "./BookContext";

export const BookList = () => {
  //   const value = useContext(BookContext);
  const [books, setBooks] = useContext(BookContext);
  return (
    <div>
      {/* <h1>{value}</h1> */}
      {books.map((book) => (
        <Book name={book.name} price={book.price} key={book.id} />
      ))}
    </div>
  );
};
