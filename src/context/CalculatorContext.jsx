import { createContext, useState } from "react";
import { evaluate } from 'mathjs'

export const CalculatorContext = createContext();

export default function CalulatorContextProvider({ children }) {
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState("");
    const [isResolved, setIsResolved] = useState(false);

    const putChar = (e) => {
        
        let value = e.target.value;
        let lastChar = operation.split('')[operation.length - 1];

        const ops = ["+", "-", "/", "%", "*", "^"]
        const funcs = ["(", ")", "cos(", "tan("]

        if(isResolved) resetOperation(); // si antes ya se ha ejecutado una respuesta resetea todos los campos

        if(!ops.includes(value)){
            setInput(input+value);
            console.log(1)
        } else {
            console.log(2)
            if(ops.includes(lastChar) && !input){
                console.log(3)
                if(funcs.includes(value) && ops.includes(lastChar)){
                    console.log(4)
                    setOperation(operation + value);
                } else {
                    console.log(5)
                    setOperation(operation.substring(0, operation.length - 1) + value)
                    setInput("");
                }
            } else {
                console.log(6)
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
        try {
            setIsResolved(true);
            let concat = operation + input;
            setOperation(concat);
            setInput(evaluate(concat));
        } catch (error) {
            console.log(error);
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

