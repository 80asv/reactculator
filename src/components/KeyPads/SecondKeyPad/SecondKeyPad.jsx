import React, { useContext } from 'react'
import { CalculatorContext } from '../../../context/CalculatorContext'
import Button from '../../Button/Button'
import './SecondKeyPad.scss'

const operations = [
    {id: 1, text: "Inv", name: "inv", value: "inv("},
    {id: 2, text: "Mod", name: "mod", value: "%"},
    {id: 3, text: "sin", name: "sin", value: "sin("},
    {id: 4, text: "cos", name: "cos", value: "cos("},
    {id: 5, text: "Tan", name: "tan", value: "tan("},
    {id: 6, text: "%", name: "percentage", value: "%"},
    {id: 7, text: "In", name: "in", value: "log2("},
    {id: 8, text: "Log", name: "log", value: "log("},
    {id: 9, text: "!", name: "factorial", value: "!"},
    {id: 10, text: "^", name: "exponential", value: "^"},
    {id: 12, text: "e", name: "euler", value: "2.71828"},
    {id: 13, text: "(", name: "bracket-left", value: "("},
    {id: 14, text: ")", name: "bracket-right", value: ")"},
]

const SecondKeyPad = () => {

    const {putChar} = useContext(CalculatorContext);

    return (
        <div className='second-keypad'>
            { operations.map((btn) => <Button key={btn.id} className={`second-keypad__op-btn ${btn.name}`} value={btn.value} handleClick={putChar}>{btn.text}</Button>)}
            <Button className="second-keypad__op-btn sqrt" value="sqrt(" handleClick={putChar}>
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_189)">
                    <path d="M12.6426 1.57391C12.7884 0.991486 13.3217 0.581329 13.9342 0.581329H23.2676C24.0051 0.581329 24.6009 1.16785 24.6009 1.89383C24.6009 2.61981 24.0051 3.20633 23.2676 3.20633H14.9759L10.5592 20.5888C10.4259 21.122 9.96756 21.5157 9.40922 21.5731C8.85089 21.6305 8.32172 21.3475 8.07172 20.8554L3.77589 12.3938H1.93422C1.19672 12.3938 0.600891 11.8073 0.600891 11.0813C0.600891 10.3554 1.19672 9.76883 1.93422 9.76883H4.60089C5.10506 9.76883 5.56756 10.0477 5.79256 10.4948L8.84672 16.5077L12.6426 1.57391ZM16.9926 10.1544C17.5134 9.64168 18.3592 9.64168 18.8801 10.1544L20.6009 11.8483L22.3259 10.1503C22.8467 9.63758 23.6926 9.63758 24.2134 10.1503C24.7342 10.663 24.7342 11.4956 24.2134 12.0083L22.4884 13.7063L24.2134 15.4044C24.7342 15.9171 24.7342 16.7497 24.2134 17.2624C23.6926 17.7751 22.8467 17.7751 22.3259 17.2624L20.6009 15.5643L18.8759 17.2624C18.3551 17.7751 17.5092 17.7751 16.9884 17.2624C16.4676 16.7497 16.4676 15.9171 16.9884 15.4044L18.7134 13.7063L16.9884 12.0083C16.4676 11.4956 16.4676 10.663 16.9884 10.1503L16.9926 10.1544Z" fill="#656565"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2_189">
                    <rect width="24" height="21" fill="white" transform="translate(0.600891 0.581329)"/>
                    </clipPath>
                    </defs>
                </svg>
            </Button>
            <Button className="second-keypad__op-btn pi" value="3.1416" handleClick={putChar}>
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7.58801" y1="2.53537" x2="7.58801" y2="17.4887" stroke="#656565" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="15.9275" y1="2.53537" x2="15.9275" y2="15.2143" stroke="#656565" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="20.267" y1="2.53537" x2="2.28106" y2="2.53537" stroke="#656565" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </Button>
        </div>
    )
}
export default SecondKeyPad