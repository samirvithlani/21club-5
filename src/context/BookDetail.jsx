import React, { useContext } from 'react'
import { AppContext } from './context';

export const BookDetail = () => {
    const {books} = useContext(AppContext);
  return (
    <div>
        <h1>BOOK DETAIL...</h1>
        <ul>
            {
                books?.map((book)=>{
                    return(<li>
                        {book.id} {book.name} {book.price} {book.qty}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
