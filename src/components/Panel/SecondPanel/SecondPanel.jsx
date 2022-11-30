import React from 'react'
import './SecondPanel.scss'

const SecondPanel = ({ result }) => {
  return (
    <input type="text" className='second-panel' value={result === "" ? "0" : result} readOnly/>
  )
}

export default SecondPanel