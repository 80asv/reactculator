import React from 'react'
import './MainPanel.scss'
import {motion} from 'framer-motion';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const MainPanel = ({ operation }) => {
    return (
		<>
			<CopyToClipboard text={operation}>
				<motion.input 
					onClick={() => toast.success("Copied text!")}
					type="text" 
					className='main-panel' 
					value={operation === '' ? "0" : operation} 
					readOnly
				/>
			</CopyToClipboard>
			<Toaster position="top-center" reverseOrder={false}/>
		</>
    )
}
export default MainPanel