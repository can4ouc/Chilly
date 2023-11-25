import React from 'react'

const Input = ({className, label, ...inputProps}) => {
  return (
    <div className='w-full '>
        <p className='text-gray-300'>
            {label}
        </p>
        <input className={`p-2 border border-indigo-200 w-full rounded focus:outline-indigo-300 ${className}`}
                {...inputProps}
        />
    </div>
  )
}

export default Input