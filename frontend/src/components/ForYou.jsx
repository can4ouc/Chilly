import React from 'react'
import SmallCardEvent from './SmallCardEvent'

const ForYou = ({events}) => {
  return (
    <div className='flex flex-col gap-2 w-full bg-white [&>*:first-child]:ml-4 py-4'>
        <h1 className='font-bold text-lg'>
            For you
        </h1>
        <div className='flex gap-4 w-full overflow-x-auto py-2 [&>*:first-child]:ml-4'>
          {
            events.map((itm, ind)=>(
              <SmallCardEvent key={ind} {...itm}/>
            ))
          }
            
            {/* <SmallCardEvent />
            <SmallCardEvent />
            <SmallCardEvent />
            <SmallCardEvent /> */}
        </div>

    </div>
  )
}

export default ForYou