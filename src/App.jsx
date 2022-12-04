import CalulatorContextProvider from "./context/CalculatorContext"
import Calculator from "./components/Calculator/Calculator"
import { createContext, useState } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.scss'

export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState("light"); 
	const toggleTheme = () => setTheme(curr => curr === "light" ? "dark" : "light");
	const data = { theme, toggleTheme }
	return (
		<ThemeContext.Provider value={data}>
			<CalulatorContextProvider>
				<div className="App" id={theme}>
					<Header/>
					<Calculator/>
					<Footer/>
				</div>
			</CalulatorContextProvider>
		</ThemeContext.Provider>
    )
}
export default App
