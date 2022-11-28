import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/calculatorContext'
import Button from '../Button/Button'
import History from '../History/History'
import MainPanel from '../Panel/MainPanel/MainPanel'
import SecondPanel from '../Panel/SecondPanel/SecondPanel'
import './Calculator.scss'

const btns_basics = [
    {id: 1, text: "0", name: "zero"},
    {id: 2, text: "1", name: "one"},
    {id: 3, text: "2", name: "two"},
    {id: 4, text: "3", name: "three"},
    {id: 5, text: "4", name: "four"},
    {id: 6, text: "5", name: "five"},
    {id: 7, text: "6", name: "six"},
    {id: 8, text: "7", name: "seven"},
    {id: 9, text: "8", name: "eight"},
    {id: 10, text: "9", name: "nine"},
    {id: 11, text: "=", name: "equals"},
    {id: 12, text: "+", name: "add"},
    {id: 13, text: "-", name: "subtract"},
    {id: 14, text: "*", name: "multiply"},
    {id: 15, text: "/", name: "split"},
    {id: 16, text: ".", name: "dot"},
]

const operations = [
    {id: 1, text: "Inv", name: "inv", value: ""},
    {id: 2, text: "rad", name: "rad", value: ""},
    {id: 3, text: "sin", name: "sin", value: "sin("},
    {id: 4, text: "cos", name: "cos", value: "cos("},
    {id: 5, text: "Tan", name: "tan", value: "tg("},
    {id: 6, text: "%", name: "percentage", value: "%"},
    {id: 7, text: "In", name: "in", value: "log2("},
    {id: 8, text: "Log", name: "log", value: "log("},
    {id: 9, text: "!", name: "factorial"},
    {id: 10, text: "^", name: "exponential", value: ""},
    {id: 11, text: "PI", name: "pi", value: "3.1416"},
    {id: 12, text: "e", name: "euler", value: "e("},
    {id: 13, text: "(", name: "bracket-left"},
    {id: 14, text: ")", name: "bracket-right"},
    {id: 15, text: "sqrt()", name: "sqrt", value: "sqrt("},
]

const manejadorCambio = () => console.log("cambiaaaaa");

const Calculator = () => {

    const { input, handleClick, handleReset, handleDel, handleResult, result } = useContext(CalculatorContext)


    return (
        <div className='calc'>
            <History/>
            <div className='calc__panels'>
                <SecondPanel result={result}/>
                <MainPanel operation={input} handleChange={manejadorCambio}/>
                <div className="calc__btns">
                    <div className="calc__btns-basic">
                        {
                            btns_basics.map((btn) => {
                                return <Button 
                                    className={`calc__btn-basic ${btn.name}`} 
                                    key={btn.id} 
                                    text={btn.text}
                                    handleClick={handleClick}
                                />
                            })
                        }
                        <Button className={`calc__btn-basic clear`} text="C" />
                        <Button className={`calc__btn-basic clear-all`} text="CE" handleClick={handleReset}/>
                        <Button className={`calc__btn-basic del`} text="DEL" handleClick={handleDel}/>
                        <Button className={`calc__btn-basic equals`} text="=" handleClick={handleResult}/>
                    </div>
                    <div className="calc__btns-op">
                        {
                            operations.map((btn) => {
                                return <Button
                                    className={`calc__btn-op ${btn.name}`}
                                    key={btn.id}
                                    text={btn.text}
                                    value={btn.value}
                                    handleClick={handleClick}
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