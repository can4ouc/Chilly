import axios from "axios";
import {
    useQuery
  } from '@tanstack/react-query'

const url = 'http://172.60.8.85:8000/users/get_feed?user_id=4'

const useGetFeed = () => {

    const queryKey = ['feed']
    const queryFn = async() =>{
        const {data} = await axios.get(url)
        return data
    }
    
  return useQuery(
    {
        queryKey, 
        queryFn
    }
  )
}

export default useGetFeed