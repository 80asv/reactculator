import { createContext, useState } from "react";
import { evaluate } from 'mathjs'

export const CalculatorContext = createContext();

export default function CalulatorContextProvider({ children }) {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        const ops = ["+", "-", "/", "%", "*", "^"]
        const funcs = ["(", ")", "cos(", "tan("]
        let value = e.target.value;
        //let lastChar = input.split('')[input.length - 1];
        let lastChar = result.split('')[result.length - 1];

        // if(!ops.includes(value)){
        //     setInput(input + value);
        // } else {
        //     if(ops.includes(lastChar)){
        //         setInput(input.substring(0, input.length - 1) + value);
        //         handleResult();
        //     } else{
        //         setInput(input + value);
        //     }
        // }

        if(!ops.includes(value)){
            setInput(input+value);
        } else {
            if(ops.includes(lastChar) && !input){
                if(funcs.includes(value) && ops.includes(lastChar)){
                    setResult(result + value);
                } else {
                    setResult(result.substring(0, result.length - 1) + value)
                    setInput("");
                }
            } else {
                let concat = input + value
                setResult(result + concat);
                setInput("");
            }
        }
    };

    const handleResult = () => {
        let res = evaluate(input);
        setResult(res);
    }

    const handleReset = () => {
        setInput("");
        setResult("");
    };

    const handleDel = () => {
        let del = input.substring(0, input.length - 1);
        setInput(del);
    };




    const data = { input, handleClick, handleReset, handleDel, result, handleResult }

    return(
        <CalculatorContext.Provider value={data}>
                {children}
        </CalculatorContext.Provider>
    )
}

