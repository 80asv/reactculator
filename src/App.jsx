import Calculator from "./components/Calculator/Calculator"
import Header from "./components/Header/Header"
import History from "./components/History/History"
import CalulatorContextProvider from "./context/calculatorContext"
import './App.scss'

function App() {
    return (
      <CalulatorContextProvider>
          <div className="App">
            <Header/>
            <Calculator/>
          </div>
      </CalulatorContextProvider>
    )
}

export default App
