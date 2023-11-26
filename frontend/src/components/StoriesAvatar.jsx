import React from 'react'
import { useNavigate } from 'react-router-dom';
import users from '../constants/users'

const AvatarStory = ({onClick, name, image}) =>{
    return(
        <button className=''
                onClick={onClick}
        >
            <div className='w-[60px] aspect-square rounded-full bg-white overflow-hidden border-2  outline-2 border-orange-500 flex items-center justify-center'>
                <img src={image} alt="avatar" className='w-[52px] rounded-full aspect-square object-cover object-center'/>
            </div>
            <p className='text-[10px] text-orange-500'>
                {name}
            </p>
        </button>
    
    )
}

const StoriesAvatar = () => {

    const navigate = useNavigate()

    const viewStory = () =>{
        navigate('/story/1')
    }

  return (
    <div className='w-full flex gap-4 bg-white p-4 overflow-x-auto'>
        {
            users?.map((itm, ind) =>(
                <AvatarStory onClick={viewStory} key={ind} {...itm}/>
            ))
        }
    
    </div>
  )
}

export default StoriesAvatar