import { memo } from 'react'
import './button.css'

const Button = memo(function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
