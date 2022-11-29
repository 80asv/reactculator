import React from 'react'
import './SecondPanel.scss'

const SecondPanel = ({ result }) => {
  return (
    // <div className='calc__second-panel'>
    //   <p>{result === "" ? "0" : result }</p>
    // </div>
    <input type="text" className='calc__second-panel' value={result === "" ? "0" : result}/>
  )
}

export default SecondPanel