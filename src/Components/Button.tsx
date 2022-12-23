import { Link } from 'react-router-dom';

const Button = ({
    className = '',
    children = '',
}) => {
  return (
    <button className={`bg-gray-400 ${className}`} >
      {children}
    </button>
  )
}

export default Button
