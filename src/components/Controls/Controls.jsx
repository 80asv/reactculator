import { faDeleteLeft, faEquals } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/calculatorContext'
import Button from '../Button/Button'
import './Controls.scss'


const Controls = () => {
    const { putChar, resetOperation, resetAll } = useContext(CalculatorContext);

    return (
        <div className='controls'>
            <Button className="controls__equals-btn" handleClick={putChar}>
                <FontAwesomeIcon icon={faEquals}/>
            </Button>
            <Button className="controls__clear-btn c" handleClick={resetOperation}>C</Button>
            <Button className="controls__clear-btn ce" handleClick={resetAll}>CE</Button>
            <Button className="controls__clear-btn del" handleClick={resetAll}>
                <FontAwesomeIcon icon={faDeleteLeft}/>
            </Button>
        </div>
    )
}

export default Controls