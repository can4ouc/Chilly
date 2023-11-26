import React from 'react'
import images from '../assets/images'
import Badge from './Badge'

const EventCard = () => {
  return (
    <div className='w-full bg-white'>
        {/* Avatar name and photo */}
        <div className='flex items-center p-4 gap-3'>
            <div className='w-[40px] aspect-square rounded-full bg-slate-200 overflow-hidden'>
                <img src={images.onboarding[0]} alt="avatar" className='w-full h-full'/>
            </div>

            <div className='flex flex-col'>
                <p className='text-bold text-sm'>
                    Jasmina Clouse
                </p>
                <p className='text-gray-400 text-xs'>
                    today at 12:00
                </p>
            </div>
        </div>

        {/* Photo */}
        <div className='w-full aspect-[4/3] relative'>
            <img src={images.onboarding[1]} alt="event" 
                 className='w-full h-full object-center object-cover'
            />
            <div className='px-2 py-1 rounded bg-orange-500 absolute top-[16px] right-[16px]'>
                <p className='text-xs text-white'>
                    From $40
                </p>
            </div>
        </div>

        {/* Information */}
        <div className='p-4 flex flex-col '>
            <div className='flex justify-between items-center'>
                <p className='text-indigo-500 text-xs font-light uppercase'>
                    Sat, 30 nov at 20:30
                </p>
                <Badge label={'Festival'}/>
            </div>

            <p className='font-bold'>
                The biggest music festival
            </p>

            <div className='flex  items-center'>
                {/* <div className='h-[10px] aspect-square bg-slate-400'/> */}
                <p className='text-sm text-gray-400'>
                    Athinon 38, Nicosia
                </p>
            </div>
        </div>

        {/* Action div */}
        <div className='border-t flex items-center justify-between p-4'>
            <div className='h-[14px] aspect-square bg-slate-400'/>
            <div className='h-[14px] aspect-square bg-slate-400'/>
            <div className='h-[14px] aspect-square bg-slate-400'/>
        </div>

    </div>
  )
}

export default EventCard