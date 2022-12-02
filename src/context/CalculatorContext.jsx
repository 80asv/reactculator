import { createContext, useRef, useState } from "react";
import { evaluate } from 'mathjs'

export const CalculatorContext = createContext();

export default function CalulatorContextProvider({ children }) {
    
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState("");
    const [isResolved, setIsResolved] = useState(false);

    const putChar = (value = null) => {
        
        let lastChar = operation.split('')[operation.length - 1];
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        const ops = ["+", "-", "/", "%", "*", "^", ".", "e"];
        const funcs = ["(", ")", "cos(", "tan(", "inv(", "sin(", "log2(", "log(", "!", "^", "3.1416", ""];

        if(!numbers.includes(value) && !ops.includes(value) && !funcs.includes(value)) return;

        if(isResolved) resetOperation();

        if(!ops.includes(value)){
            setInput(input+value);
        } else {
            if(ops.includes(lastChar) && !input){
                if(funcs.includes(value) && ops.includes(lastChar)){
                    setOperation(operation + value);
                } else {
                    setOperation(operation.substring(0, operation.length - 1) + value)
                    setInput("");
                }
            } else {
                if(isResolved){
                    resetOperation();
                    setInput(input+value);
                } else {
                    let concat = input + value
                    setOperation(operation + concat);
                    setInput("");
                }
            }
        }
    };

    const showResult = () => {
        if(isResolved){
            setInput("");
            setOperation("");
        } else {
            try {
                setIsResolved(true);
                let concat = operation + input;
                setOperation(concat);
                setInput(evaluate(concat));
                
            } catch (error) {
                setOperation("");
                setInput("!Error");
            }
        }
    }

    const resetAll = () => {
        setIsResolved(false);
        setInput("");
        setOperation("");
    }

    const resetOperation = () => {
        setOperation("")
        setIsResolved(false);
    }

    const deleteChar = () => {
        let del = input.substring(0, input.length - 1);
        setInput(del);
    }

    const handleKeyPress = (event) => {
        console.log('enter press here! ' + event)
    }

    const data = { input, putChar, resetAll, deleteChar, operation, showResult, resetOperation, handleKeyPress }

    return(
        <CalculatorContext.Provider value={data}>
                {children}
        </CalculatorContext.Provider>
    )
}

