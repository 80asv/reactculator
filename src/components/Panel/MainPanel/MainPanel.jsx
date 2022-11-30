import React from 'react'
import './MainPanel.scss'
import {motion} from 'framer-motion';

const MainPanel = ({ operation,  }) => {

    return (
      	<motion.input 
			type="text" 
			className='main-panel' 
			value={operation === '' ? "0" : operation} 
			readOnly
		/>
    )
}

export default MainPanel