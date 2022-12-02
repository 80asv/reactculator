import React, { useContext, useState } from 'react'
import { CalculatorContext } from '../../context/calculatorContext'
import { useResize } from '../../hooks/useResize'
import Controls from '../Controls/Controls'
import MainKeypad from '../KeyPads/MainKeypad/MainKeypad'
import SecondKeyPad from '../KeyPads/SecondKeyPad/SecondKeyPad'
import MainPanel from '../Panel/MainPanel/MainPanel'
import SecondPanel from '../Panel/SecondPanel/SecondPanel'
import './Calculator.scss'

const Calculator = () => {
    const { input, operation } = useContext(CalculatorContext)
    const { width } = useResize();
    return (
        <div className='calc'>
            <div className='calc__panels'>
                <SecondPanel result={operation}/>
                <MainPanel operation={input}/>
            </div>
            <div className='calc__keypads'>
                <Controls/>
                <MainKeypad/>
                { width >= 660 && <SecondKeyPad/>}
            </div>
        </div>
    )
}

export default Calculator