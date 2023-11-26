import React from 'react'

function Button({onClick, variant, className, children}) {

    let klass = ''

    if(variant !== 'outlined'){
        klass = 'bg-indigo-500  text-white'
    }

  return (
    <button className={`p-2 border-indigo-500 border-2 rounded ${klass} ${className}`}
                        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button