import React from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <div className='header__logo-img'></div>
        <h1 className='header__logo-h1'>REACTCULATOR</h1>
      </div>
      <ThemeToggle/>
    </div>
  )
}

export default Header