import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/calculatorContext'
import Button from '../Button/Button'
import History from '../History/History'
import MainPanel from '../Panel/MainPanel/MainPanel'
import SecondPanel from '../Panel/SecondPanel/SecondPanel'
import './Calculator.scss'

const btns_basics = [
    {id: 1, text: "0", name: "zero"},
    {id: 1, text: "1", name: "one"},
    {id: 1, text: "2", name: "two"},
    {id: 1, text: "3", name: "three"},
    {id: 1, text: "4", name: "four"},
    {id: 1, text: "5", name: "five"},
    {id: 1, text: "6", name: "six"},
    {id: 1, text: "7", name: "seven"},
    {id: 1, text: "8", name: "eight"},
    {id: 1, text: "9", name: "nine"},
    {id: 1, text: "=", name: "equals"},
    {id: 1, text: "+", name: "add"},
    {id: 1, text: "-", name: "subtract"},
    {id: 1, text: "*", name: "multiply"},
    {id: 1, text: "/", name: "split"},
    {id: 1, text: "CE", name: "clear"},
    {id: 1, text: "C", name: "clear-all"},
    {id: 1, text: "DEL", name: "del"},
    {id: 1, text: ".", name: "dot"},
]

const operations = [
    {id: 1, text: "Inv", name: "inv"},
    {id: 2, text: "Rad", name: "rad"},
    {id: 3, text: "Sin", name: "sin"},
    {id: 4, text: "Cos", name: "cos"},
    {id: 5, text: "Tan", name: "tan"},
    {id: 6, text: "%", name: "percentage"},
    {id: 7, text: "In", name: "in"},
    {id: 8, text: "Log", name: "log"},
    {id: 9, text: "!", name: "factorial"},
    {id: 10, text: "^", name: "exponential"},
    {id: 11, text: "PI", name: "pi"},
    {id: 12, text: "e", name: "euler"},
    {id: 13, text: "(", name: "bracket-left"},
    {id: 14, text: ")", name: "bracket-right"},
    {id: 15, text: "sqrt()", name: "sqrt"},
]


const Calculator = () => {

    const { input, handleClick, handleReset } = useContext(CalculatorContext)

    return (
        <div className='calc'>
            <History/>
            <div className='calc__panels'>
                <SecondPanel/>
                <MainPanel operation={input}/>
                <div className="calc__btns">
                    <div className="calc__btns-basic">
                        {
                            btns_basics.map((btn) => {
                                return <Button 
                                    className={`calc__btn-basic ${btn.name}`} 
                                    key={btn.id} 
                                    text={btn.text} 
                                />
                            })
                        }
                    </div>
                    <div className="calc__btns-op">
                        {
                            operations.map((btn) => {
                                return <Button
                                    className={`calc__btn-op ${btn.name}`}
                                    key={btn.id}
                                    text={btn.text}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator