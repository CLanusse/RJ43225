import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tutores } from './Tutores'
// import { Profe } from './Profe'
// import { despedirse, saludar } from './Utilidades.js'
// import abc from './Utilidades.js'

function App() {
  // saludar()
  // despedirse()
  
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* <Profe /> */}
      <Tutores />
    </div>
    
  )
}

export default App
