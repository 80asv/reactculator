import {motion} from 'framer-motion';
import React from 'react'

const Button = ({ value, handleClick, className, children }) => {
  return (
    <motion.button 
        className={className} 
		onClick={() => handleClick(value)}
		whileHover={{ scale: 1.08 }}
    	whileTap={{ scale: 0.9 }}
	>
		{children}
	</motion.button>
  )
}
export default Button