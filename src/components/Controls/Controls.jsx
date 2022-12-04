import { CalculatorContext } from '../../context/CalculatorContext'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import Button from '../Button/Button'
import './Controls.scss'


const Controls = () => {
    const { resetOperation, resetAll, showResult, deleteChar } = useContext(CalculatorContext);

    return (
        <div className='controls'>
            <Button className="controls__equals-btn" handleClick={showResult}>
                <svg width="54" height="34" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="54" height="12" rx="6" fill="#191919"/>
                    <rect y="22" width="54" height="12" rx="6" fill="#191919"/>
                </svg>
            </Button>
            <Button className="controls__clear-btn c" handleClick={resetOperation}>C</Button>
            <Button className="controls__clear-btn ce" handleClick={resetAll}>CE</Button>
            <Button className="controls__clear-btn del" handleClick={deleteChar}>
                <FontAwesomeIcon icon={faDeleteLeft}/>
            </Button>
        </div>
    )
}

export default Controls