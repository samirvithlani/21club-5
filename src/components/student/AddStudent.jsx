import React from 'react'

export const AddStudent = (props) => {
    const submit=()=>{
        var student ={
            id:4,
            name:"parth",
            age:25
        }
        //coming from props
        props.add(student)
    }
  return (
    <div>
        <div>
            <button className='btn btn-info' onClick={()=>{submit()}}>ADD STUDENT</button>
        </div>
    </div>
  )
}
