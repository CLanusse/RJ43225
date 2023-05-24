import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"

function App() {

  const clickear = () => console.log("Hola mundo!")
  
  return (
    <div>
      <Header />
      <ItemListContainer mensaje="Hola mundo!"/>

      <div className="container">
        <Button onClick={clickear} size="lg" variant="warning">Click me</Button>
        <Button variant="success">Click me</Button>
        <Button size="sm" variant="danger">Click me</Button>
      </div>
    </div>
   
  )
}

export default App
