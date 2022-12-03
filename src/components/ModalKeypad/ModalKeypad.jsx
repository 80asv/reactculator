import React from 'react'
import { motion } from 'framer-motion'
import './ModalKeypad.scss'

const ModalKeypad = ({ children, handleClose, isOpen }) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
            delayChildren: 0.1,
            staggerDirection: -1,
            }
        }
    }
    
    const item = {
        hidden: { opacity: 0, scale: 0},
        show: { opacity: 1, scale: 1},
    }

    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className={`modal ${isOpen && "open" }`} onClick={(e) => handleClose(e, "modal")}
        >
            <motion.div
                variants={item}
                className='modal__container'>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default ModalKeypad