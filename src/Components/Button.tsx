import React from 'react'

const Button = ({
    className = '',
    children = ''
}) => {
  return (
    <div className={`bg-gray-400 ${className}`} >
      {children}
    </div>
  )
}

export default Button
