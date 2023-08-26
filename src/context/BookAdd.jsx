import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from './context'

export const BookAdd = () => {
    const {bookDispactch}=useContext(AppContext)
    const {register,handleSubmit}=useForm()
    const submitBook = (data) => {
        bookDispactch("ADD_BOOK",data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitBook)}>
            <div className="form-group">
                <label>id</label>
                <input type="text" className="form-control" name="id" {...register("id")}/>
            </div>
            <div className="form-group">
                <label>name</label>
                <input type="text" className="form-control" name="name" {...register("name")}/>
            </div>
            <div className="form-group">
                <label>price</label>
                <input type="text" className="form-control" name="price" {...register("price")}/>
            </div>
            <div className="form-group">
                <label>qty</label>
                <input type="text" className="form-control" name="qty" {...register("qty")}/>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success" value="ADD BOOK"/>
            </div>


        </form>
    </div>
  )
}
