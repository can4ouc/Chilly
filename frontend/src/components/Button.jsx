import React from 'react'

function Button({onClick, variant, className, children}) {

    let klass = ''

    if(variant !== 'outlined'){
        klass = 'bg-[#f82b99]  text-white'
    }else{
      klass = 'text-[#f82b99]'
    }

  return (
    <button className={`p-2 border-[#f82b99] border-2 rounded ${klass} ${className}`}
                        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button