import React from 'react'
import './MainPanel.scss'

const MainPanel = ({ operation }) => {
  return (
    <div className='main-panel'>{operation === "" ? "0" : operation }</div>
  )
}

export default MainPanel