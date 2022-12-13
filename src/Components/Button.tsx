import React from 'react'

const Button = ({
    className = '',
    children = ''
}) => {
  return (
    <div className={`mt-6 p-1 bg-gray-400 text-center ${className}`} >
      {children}
    </div>
  )
}

export default Button