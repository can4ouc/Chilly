import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[600px] mx-auto relative'>
        {children}
    </div>
  )
}

export default Container