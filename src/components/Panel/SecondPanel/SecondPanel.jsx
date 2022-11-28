import React from 'react'
import './SecondPanel.scss'

const SecondPanel = ({ result }) => {
  return (
    <div className='second-panel'>{result === "" ? "-" : result }</div>
  )
}

export default SecondPanel