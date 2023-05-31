import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"
import MiContenedor from "./ejemplos/MiContenedor"
import MiBoton from "./ejemplos/MiBoton/MiBoton"
import { Clicker2 } from "./ejemplos/Clicker2"
import Nosotros from "./ejemplos/Nosotros"
import { useEffect, useState } from "react"

function App() {

  const [mostrar, setMostrar] = useState(true)

  const handleMostrar = () => {
    setMostrar(!mostrar)
  }

  return (
    <div>
      <Header />

      <button onClick={handleMostrar}>Mostrar</button>

      {
        mostrar ? <Clicker2 /> : null
      }

    </div>
   
  )
}

export default App
