import React from 'react'

const Button = ({ value,text, handleClick, className, children }) => {
  return (
    <button className={className} onClick={handleClick} value={value ? value : text }>{children}</button>
  )
}

export default Button