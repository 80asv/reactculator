import Calculator from "./components/Calculator/Calculator"
import CalulatorContextProvider from "./context/calculatorContext"

function App() {
    return (
      <CalulatorContextProvider>
          <div className="App">
            <h2>REACTCULATORRRR</h2>
            <Calculator/>
          </div>
      </CalulatorContextProvider>
    )
}

export default App
