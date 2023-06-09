import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import PokeApi from "./ejemplos/PokeApi/PokeApi"
import PokeList from "./ejemplos/PokeApi/PokeList"
import Nosotros from "./components/Nosotros/Nosotros"
import ItemList2 from "./ejemplos/hoc/ItemList2"
import Nosotros2 from "./ejemplos/hoc/Nosotros2"
import ItemList3 from "./ejemplos/renderprops/ItemList3"

function App() {

  return (
    <div>
      <Header />

      {/* <ItemList3 /> */}
      {/* <Nosotros2 saludo="hola"/> */}
      {/* <ItemList2 /> */}
      {/* <PokeList /> */}
      <PokeApi />
      {/* <ItemListContainer /> */}
      {/* <Nosotros /> */}
    </div>
   
  )
}

export default App
