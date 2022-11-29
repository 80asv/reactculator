import React, { useContext } from 'react'
import { CalculatorContext } from '../../../context/calculatorContext'
import Button from '../../Button/Button'
import './MainKeypad.scss'

const MainKeypad = () => {

    const {putChar} = useContext(CalculatorContext);
  return (
    <div className='main-keypad'>
        <div className='main-keypad__numbers'>
            <Button className="main-keypad__number">1</Button>
            <Button className="main-keypad__number">2</Button>
            <Button className="main-keypad__number">3</Button>
            <Button className="main-keypad__number">4</Button>
            <Button className="main-keypad__number">5</Button>
            <Button className="main-keypad__number">6</Button>
            <Button className="main-keypad__number">7</Button>
            <Button className="main-keypad__number">8</Button>
            <Button className="main-keypad__number">9</Button>
            <Button className="main-keypad__operation">+</Button>
            <Button className="main-keypad__operation">-</Button>
            <Button className="main-keypad__operation">x</Button>
            <Button className="main-keypad__operation">/</Button>
        </div>
    </div>
  )
}

export default MainKeypad