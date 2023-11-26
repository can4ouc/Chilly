import React from 'react'
import images from '../assets/images'
import Badge from './Badge'

const SmallCardEvent = ({width}) => {
  return (
    <div className={`${width || 'w-[250px]'} flex-none aspect-[3/2] rounded-2xl relative overflow-hidden`}>
        <div className='z-10 w-full p-2 bg-gradient-to-b from-black to-transparent absolute top-0'>
            <Badge label='Festival'/>
        </div>

        <img src={images.onboarding[2]} alt='event'
             className='w-full h-full object-cover object-center'
        />

        <div className='bg-gradient-to-t w-full h-[80px] p-2 gap-1 flex flex-col from-black to-transparent absolute bottom-0'>
            <p className='text-white mt-auto'>
                Food Festival
            </p>
            <div className='flex items-center w-full justify-between'>
                <Badge label='From $10'/>
                <p className='text-white text-xs'>
                    Jul 29 - 21:00
                </p>
            </div>
        </div>
    </div>
  )
}

export default SmallCardEvent