import React, { useState } from "react";
import { BookAdd } from "./BookAdd";
import { BookList } from "./BookList";
import { AppContext } from "./context";
import { ADD_BOOK } from "../constant";
import { DELETE_BOOK } from "../constant";
export const Books = () => {
  const [books, setbooks] = useState([
    {
      id: 1,
      name: "java",
      price: 100,
      qty: 10,
    },
    {
      id: 2,
      name: "python",
      price: 200,
      qty: 20,
    },
  ]);

  const bookDispactch = (action, payload) => {
    switch (action) {
      case ADD_BOOK:
        setbooks([...books, payload]);
        break;
      case DELETE_BOOK:
        setbooks(books.filter((book) => book.id !== payload));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>****BOOKS****</h1>
      <AppContext.Provider value={{ books ,bookDispactch}}>
        <BookList />
        <BookAdd/>
      </AppContext.Provider>
    </div>
  );
};
