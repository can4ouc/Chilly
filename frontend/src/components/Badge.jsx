import React from 'react'

const Badge = ({label}) => {
 
  return (
    <div className='bg-indigo-500 px-1 w-fit rounded bg-gradient-to-r from-[#f82b99] to-orange-500'>
        <p className='text-white text-sm'> 
            {label}
        </p>
    </div>
  )
}

export default Badge