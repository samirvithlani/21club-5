import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddUserData } from '../query/getQuery'

export const AddUserDataQ = () => {

    const mutation = useAddUserData()
    const navigate = useNavigate()
    useEffect(() => {
      
        console.log("mutation.isLoading",mutation.isLoading)
        console.log("mutation.isIdle",mutation.isIdle)
        console.log("mutation.isSuccess",mutation.isSuccess)
        console.log("mutation.isError",mutation.isError)
        console.log("mutation.error",mutation.error)
        console.log("mutation.data",mutation.data)

        // if(mutation.isSuccess){
        //     navigate("/apidemo1")
        // }
    
      
    }, [mutation.isLoading,mutation.isIdle])
    

    const addUserData = ()=>{

        var userObj = {
            name: "Rajesh",
            age: 30,
            email: "rajesh@gmail.com",
            isActive: true
        }
        //api.....
        mutation.mutate(userObj)
       
    }

  return (
    <div>
        <h1>ADD USER DAAT USING MUTATION.....</h1>
        FORM.....
        <button onClick={()=>addUserData()}>Add User Data</button>
    </div>
  )
}
