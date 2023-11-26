import axios from "axios";
import {
    useMutation,
  } from '@tanstack/react-query'

const url = 'http://172.60.8.85:8000/events/create?creator_id=4'

const useCreateEvent = () => {

    //const mutationKey = ['new_event']
    const mutationFn = async(payload) =>{
        const {data} = await axios.post(url, payload)
        return data
    }
  return useMutation(
    {
        //mutationKey, 
        mutationFn
    }
  )
}

export default useCreateEvent