import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
  const users = [
    {
      id: 1,
      name:"amit"
    },
    {
      id:2,
      name:"sumit"
    }
  ]
  return (
    <div>ContactUs

      {/* <Link className='btn btn-info' to ="/contactus/person/2">PERSON 1</Link> */}
      {
        users.map((user)=>{
          return(<div>
            <Link className='btn btn-info' to={`/contactus/person/${user.id}`}>{user.name}</Link>
          </div>)
        })
      }
    </div>
  )
}
