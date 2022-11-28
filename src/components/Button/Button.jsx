import React from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick} value={text}>{text}</button>
  )
}

export default Button