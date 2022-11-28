import { createContext, useState } from "react";

export const CalculatorContext = createContext();

const initialState = "";

export default function CalulatorContextProvider({ children }) {
    const [input, setInput] = useState("");

    const handleClick = (e) => {
        let inputValue = input;
        setInput((inputValue += e.target.value));
    };

    const handleChange = (e) => {
        let inputValue = input;
        setInput((inputValue += e.target.value));
    };

    const handleReset = () => {
        setInput("");
    };


    const data = { input, handleClick, handleChange, handleReset }

    return(
        <CalculatorContext.Provider value={data}>
                {children}
        </CalculatorContext.Provider>
    )
}

