import axios from "axios";
import {
    useQuery
  } from '@tanstack/react-query'

const url = 'http://172.60.8.85:8000/events/get_ai_info'

const useTags = (title, description) => {

    const queryKey = [title, description, 'tags']
    const queryFn = async() =>{
        const {data} = await axios.post(url, {
            title,
            description,
            image: []
          })
        return data
    }
  return useQuery(
    {
        queryKey, 
        queryFn
    }
  )
}

export default useTags