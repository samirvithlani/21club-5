import React, { useState } from 'react'

export const Sotrage = () => {
    const [id, setid] = useState("")
    const sotreData = ()=>{
        localStorage.setItem("id","101")
        sessionStorage.setItem("id","102")
    }
    const getData = ()=>{

        setid(localStorage.getItem("id"))
    }
  return (
    <div>
        <h1>STORAGE</h1>
        <button onClick={()=>{sotreData()}}>store data</button>
        <button onClick={()=>{getData()}}>get data</button>
        {id}
    </div>
  )
}
