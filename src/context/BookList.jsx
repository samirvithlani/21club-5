import React, { useContext } from "react";
import { BookDetail } from "./BookDetail";
import { AppContext } from "./context";
import { DELETE_BOOK } from "../constant";

export const BookList = () => {
  const { books,bookDispactch } = useContext(AppContext);

  return (
    <div>
      <h2>BOOK LIST</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>qty</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
            {
                books?.map((book)=>{
                    return(<tr>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.price}</td>
                        <td>{book.qty}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>bookDispactch(DELETE_BOOK,book.id)}>DELETE</button>
                        </td>
                    </tr>)
                })
            }
        </tbody>
      </table>
      <BookDetail/>
    </div>
  );
};
