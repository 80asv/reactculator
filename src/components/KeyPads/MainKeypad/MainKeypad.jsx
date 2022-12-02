import React, { useContext, useEffect } from 'react'
import { CalculatorContext } from '../../../context/calculatorContext'
import Button from '../../Button/Button'
import './MainKeypad.scss'

const MainKeypad = () => {

    const {putChar } = useContext(CalculatorContext);
    
    return (
        <div className='main-keypad'>
            <Button className="main-keypad__number one" handleClick={putChar} value="1">1</Button>
            <Button className="main-keypad__number two" handleClick={putChar} value="2">2</Button>
            <Button className="main-keypad__number three" handleClick={putChar} value="3">3</Button>
            <Button className="main-keypad__number four" handleClick={putChar} value="4">4</Button>
            <Button className="main-keypad__number five" handleClick={putChar} value="5">5</Button>
            <Button className="main-keypad__number six" handleClick={putChar} value="6">6</Button>
            <Button className="main-keypad__number seven" handleClick={putChar} value="7">7</Button>
            <Button className="main-keypad__number eight" handleClick={putChar} value="8">8</Button>
            <Button className="main-keypad__number nine" handleClick={putChar} value="9">9</Button>
            <Button className="main-keypad__number zero" handleClick={putChar} value="0">0</Button>
            <Button className="main-keypad__number dot" handleClick={putChar} value=".">.</Button>
            <Button className="main-keypad__operation add" handleClick={putChar} value="+">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="0.5" width="8" height="32" rx="4" fill="#191919"/>
                    <rect x="32" y="12.5" width="8" height="32" rx="4" transform="rotate(90 32 12.5)" fill="#191919"/>
                </svg>
            </Button>
            <Button className="main-keypad__operation subtract" handleClick={putChar} value="-">
                <svg width="36" height="9" viewBox="0 0 36 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="36" y="0.5" width="8" height="36" rx="4" transform="rotate(90 36 0.5)" fill="#191919"/>
                </svg>
            </Button>
            <Button className="main-keypad__operation multiply" handleClick={putChar} value="*">
                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10.4436" y="15.6005" width="8" height="36" rx="4" transform="rotate(-45 10.4436 15.6005)" fill="#191919"/>
                    <rect x="35.8995" y="9.94366" width="8" height="36" rx="4" transform="rotate(45 35.8995 9.94366)" fill="#191919"/>
                </svg>
            </Button>
            <Button className="main-keypad__operation split" handleClick={putChar} value="/">
                <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="0.5" width="8" height="8" rx="4" fill="#191919"/>
                    <rect x="36" y="12.5" width="8" height="36" rx="4" transform="rotate(90 36 12.5)" fill="#191919"/>
                    <rect x="14" y="24.5" width="8" height="8" rx="4" fill="#191919"/>
                </svg>
            </Button>
            <button className='more-ops'>more</button>
        </div>
    )
}

export default MainKeypad