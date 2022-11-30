import { createContext, useRef, useState } from "react";
import { evaluate } from 'mathjs'

export const CalculatorContext = createContext();

export default function CalulatorContextProvider({ children }) {
    
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState("");
    const [isResolved, setIsResolved] = useState(false);

    const putChar = (valor = null) => {
        let value = valor;
        let lastChar = operation.split('')[operation.length - 1];
        
        const ops = ["+", "-", "/", "%", "*", "^"]
        const funcs = ["(", ")", "cos(", "tan(", "inv("]

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
    };

    const data = { input, putChar, resetAll, deleteChar, operation, showResult, resetOperation }

    return(
        <CalculatorContext.Provider value={data}>
                {children}
        </CalculatorContext.Provider>
    )
}

