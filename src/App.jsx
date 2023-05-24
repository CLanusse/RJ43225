import { Usuario } from "./components/Usuario"
import { Clicker } from "./ejemplos/Clicker"

function App() {

  
  return (
    <div>
      <h2>React JS</h2>
      <hr/>

      <Clicker init={15} step={5}/>
      {/* <Clicker init={50} step={2}/>
      <Clicker /> */}

      {/* <Usuario nombre="Lucia Dias" curso="Javascript" edad={21} estado="Activo" rol="Tutor"/>
      <Usuario nombre="Lautaro Zalazar" curso="React" edad={24} estado="Inactivo" rol="Estudiante"/>
      <Usuario nombre={profe.nombre} curso={profe.curso} edad={profe.edad} estado="Activo" rol={profe.rol}/> */}
    </div>
    
  )
}

export default App
