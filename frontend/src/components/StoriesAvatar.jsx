import React from 'react'
import images from '../assets/images'
import { useNavigate } from 'react-router-dom';

const AvatarStory = ({onClick}) =>{
    return(
        <button className=''
                onClick={onClick}
        >
            <div className='w-[60px] aspect-square rounded-full bg-white overflow-hidden border-2  outline-2 border-orange-500 flex items-center justify-center'>
                <img src={images.onboarding[0]} alt="avatar" className='w-[52px] rounded-full aspect-square object-cover object-center'/>
            </div>
            <p className='text-[10px] text-orange-500'>
                Username
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
        <AvatarStory onClick={viewStory}/>
        <AvatarStory onClick={viewStory}/>
        <AvatarStory onClick={viewStory}/>
        <AvatarStory onClick={viewStory}/>
        <AvatarStory onClick={viewStory}/>
        <AvatarStory onClick={viewStory}/>
    </div>
  )
}

export default StoriesAvatar