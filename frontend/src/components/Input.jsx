import React from 'react'

const Input = ({className, label, multiline, ...inputProps}) => {
  return (
    <div className='w-full '>
        <p className='text-gray-300'>
            {label}
        </p>
        {
          multiline?
          <textarea className={`p-2 border border-indigo-200 w-full rounded focus:outline-indigo-300 ${className}`}
                    {...inputProps}
          />
          :
        <input className={`p-2 border border-indigo-200 w-full rounded focus:outline-indigo-300 ${className}`}
                {...inputProps}
        />
        }
    </div>
  )
}

export default Input