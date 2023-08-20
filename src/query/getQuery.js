import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const fetchUserData = ()=>{

    return axios.get("/user/user")
}

const addUserData = (newUser)=>{

    console.log("newUser", newUser)
    return axios.post("/user/user", newUser)
}

export const useAddUserData = ()=>{
    const navigate = useNavigate()

    return useMutation(addUserData,{

        onSuccess: (data)=>{
            console.log("data", data)
            navigate("/apidemo1")
        }
    })
}

export const useFetchUserData = ()=>{

    return useQuery('userData', fetchUserData,{
        // refetchOnMount: false,
        // enabled: false,
        retry:10,
        retryDelay: 10,
        // onSuccess: (data)=>{
        //     alert("Data fetched successfully")
        // }
    })

}
