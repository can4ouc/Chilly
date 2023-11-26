import React from 'react'
import images from '../assets/images'
import Badge from './Badge'
import { SlLike } from "react-icons/sl";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const EventCard = (props) => {
    const navigate = useNavigate()

    const onClick = () =>{
        console.log(props.id)
        navigate(`/event-details/${props.id}`)
    }

  return (
    <div className='w-full bg-white' onClick={onClick}>
        {/* Avatar name and photo */}
        <div className='flex items-center p-4 gap-3'>
            <div className='w-[40px] aspect-square rounded-full bg-slate-200 overflow-hidden'>
                <img src={images.onboarding[0]} alt="avatar" className='w-full h-full'/>
            </div>

            <div className='flex flex-col'>
                <p className='text-bold text-sm'>
                    Anthony
                </p>
                <p className='text-gray-400 text-xs'>
                    today at 12:00
                </p>
            </div>
        </div>

        {/* Photo */}
        <div className='w-full aspect-[4/3] relative'>
            <img src={props.image?.[0]} alt="event" 
                 className='w-full h-full object-center object-cover'
            />
            <div className='px-2 py-1 rounded bg-[#f82b99] absolute top-[16px] right-[16px]'>
                <p className='text-xs text-white'>
                    Free
                </p>
            </div>
        </div>

        {/* Information */}
        <div className='p-4 flex flex-col '>
            <div className='flex justify-between items-center'>
                <p className='text-[#f82b99] text-xs font-light uppercase'>
                    {`${props.date.split('T')[0]} at ${props.date.split('T')[1]}`}
                </p>
            </div>

            <p className='font-bold'>
                {props.title}
            </p>

            <div className='flex flex-col'>
                {/* <div className='h-[10px] aspect-square bg-slate-400'/> */}
                <p className='text-sm text-gray-400'>
                    {props.place}
                </p>

                <div className='flex gap-2'>
                    {
                        props.tags?.map((itm, ind) =>(
                            <Badge label={itm} key={ind}/>
                        ))
                    }
                </div>

            </div>
        </div>

        {/* Action div */}
        <div className='border-t flex items-center justify-between p-4'>
            <SlLike size={24}/>
            <AiOutlineShareAlt size={24}/>
        </div>

    </div>
  )
}

export default EventCard