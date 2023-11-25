import React from 'react'

function Button({onclick, variant, className, children}) {

    let klass = ''

    if(variant !== 'outlined'){
        klass = 'bg-indigo-500  text-white'
    }

  return (
    <button className={`p-2 border-indigo-500 border-2 rounded ${klass} ${className}`}
                        onClick={onclick}
    >
        {children}
    </button>
  )
}

export default Button