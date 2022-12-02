import React, { useState } from 'react'
import './ModalKeypad.scss'
import { motion } from 'framer-motion'

const ModalKeypad = ({ children, handleClose, isOpen }) => {

    return (
        <div className={`modal ${isOpen && "open" }`} onClick={(e) => handleClose(e, "modal")}>
            <motion.div
                animate={{ 
                    backgroundColor: "#f74968",

                }}
                className='modal__container'>
                {children}
            </motion.div>
        </div>
    )
}

export default ModalKeypad