import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/calculatorContext'
import Button from '../Button/Button'
import MainPanel from '../Panel/MainPanel/MainPanel'


const Buttons =[
    {id: 0, text: "1"},
    {id: 1, text: "2"},
    {id: 2, text: "3"},
    {id: 3, text: "4"},
    {id: 4, text: "5"},
    {id: 5, text: "6"},
    {id: 6, text: "7"},
    {id: 7, text: "8"},
    {id: 8, text: "9"},
    {id: 9, text: "0"},
    {id: 10, text: "+"},
    {id: 11, text: "-"},
    {id: 12, text: "X"},
    {id: 13, text: "/"},
    {id: 14, text: "="},
]

const Calculator = () => {

    const { input, handleClick, handleReset } = useContext(CalculatorContext)

    return (
        <div>
            <MainPanel operation={input}/>
            { Buttons.map((button) => <Button key={button.id} handleClick={handleClick} text={button.text}/>) }
            <button onClick={handleReset} value="prueba">reset</button>
        </div>
    )
}

export default Calculator