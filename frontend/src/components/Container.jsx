import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[600px] mx-auto relative ${className}`}>
        {children}
    </div>
  )
}

export default Container