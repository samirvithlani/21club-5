import axios from "axios"
import { useQuery } from "react-query"

const fetchUserData = ()=>{

    return axios.get("/user/user")
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
