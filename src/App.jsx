import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import PokeApi from "./ejemplos/PokeApi/PokeApi"
import PokeList from "./ejemplos/PokeApi/PokeList"
function App() {

  return (
    <div>
      <Header />
      {/* <ItemListContainer /> */}
      {/* <PokeApi /> */}
      <PokeList />
    </div>
   
  )
}

export default App
