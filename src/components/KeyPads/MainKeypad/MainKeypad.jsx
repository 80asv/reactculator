import React, { useContext } from 'react'
import { CalculatorContext } from '../../../context/calculatorContext'
import Button from '../../Button/Button'
import './MainKeypad.scss'

const MainKeypad = () => {

    const {putChar} = useContext(CalculatorContext);
  return (
    <div className='main-keypad'>
        <Button className="main-keypad__number one">1</Button>
        <Button className="main-keypad__number two">2</Button>
        <Button className="main-keypad__number three">3</Button>
        <Button className="main-keypad__number four">4</Button>
        <Button className="main-keypad__number five">5</Button>
        <Button className="main-keypad__number six">6</Button>
        <Button className="main-keypad__number seven">7</Button>
        <Button className="main-keypad__number eight">8</Button>
        <Button className="main-keypad__number nine">9</Button>
        <Button className="main-keypad__number zero">0</Button>
        <Button className="main-keypad__number dot">.</Button>
        <Button className="main-keypad__operation add">+</Button>
        <Button className="main-keypad__operation subtract">-</Button>
        <Button className="main-keypad__operation multiply">x</Button>
        <Button className="main-keypad__operation split">/</Button>
    </div>
  )
}

export default MainKeypad