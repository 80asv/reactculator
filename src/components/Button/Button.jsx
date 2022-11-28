import React from 'react'

const Button = ({text, handleClick, className}) => {
  return (
    <button className={className} onClick={handleClick} value={text}>{text}</button>
  )
}

export default Button