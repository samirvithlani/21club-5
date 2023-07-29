import React from 'react'

export const AddStudent = (props) => {
    const add=()=>{
        var student ={
            id:4,
            name:"parth",
            age:25
        }
        props.add(student)
    }
  return (
    <div>
        <div>
            <button className='btn btn-info' onClick={()=>{add()}}>ADD STUDENT</button>
        </div>
    </div>
  )
}
