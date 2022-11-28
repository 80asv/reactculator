import React from 'react'

const Button = ({ value,text, handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick} value={value ? value : text }>{text}</button>
  )
}

export default Button