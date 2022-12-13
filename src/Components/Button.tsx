import React from 'react'

const Button = ({
    className = '',
    children = ''
}) => {
  return (
    <button className={`bg-gray-400 ${className}`} >
      {children}
    </button>
  )
}

export default Button
