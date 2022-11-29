import React from 'react'
import './MainPanel.scss'

const MainPanel = ({ operation }) => {
  return (
    // <div className='calc__main-panel'>
    //   <p>{operation === "" ? "0" : operation }</p>
    // </div>
    <input type="text" className='calc__main-panel' value={operation === '' ? "0" : operation}/>
  )
}

export default MainPanel