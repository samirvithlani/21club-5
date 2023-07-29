import React, { useState } from 'react'
import { AddStudent } from './AddStudent'
import { StudentList } from './StudentList'

export const Student = (props) => {
    console.log("student...",props)
    const test = (x)=>{
        alert("test"+x)
    }

    const addStudent = (stu)=>{
        //logic
        console.log("student...",stu)
        //students.push(stu)
        //spread operator..
        // students = [...students,stu]
        // setstudents(students)
        setstudents([...students,stu])
    }

    const deleteStudent = (id)=>{

        students = students.filter((stu)=>{

            return stu.id != id
        })

        console.log("after students...",students)
        setstudents(students)
    }
    var [students, setstudents] = useState([
        {
            id:1,
            name:"om",
            age:20
        },
        {
            id:2,
            name:"raj",
            age:21
        }
    ])
    
  return (
    <div>
        <h1>{props.title}</h1>
        {/* <button className='btn btn-primary' onClick={test}>Test</button> */}
        <button className='btn btn-primary' onClick={()=>{test(12)}}>Test</button>
        <AddStudent add = {addStudent}/>
        <StudentList title = {props.title} studentlist ={students} test = {test} delete ={deleteStudent}/>
    </div>
  )
}
