import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'



const ItemListContainer = () => {

    const { productos, loading } = useProductos()

    console.log(loading, productos)

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer

// const promesa = new Promise((resolve, reject) => {
//     // cuerpo promesa
//     setTimeout(() => {
//         // resolve("Promesa resuelta")
//         reject("Promesa rechazada")
//     }, 5000)
// })

// promesa
//     .then(() => {
//         console.log("Hola mundo")
//     })
//     .catch(() => {
//         console.log("Chau mundo")
//     })


// const procesoAsync = (bool) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bool) {
//                 resolve("Juan Carlos")
//             } else {
//                 reject("Promesa rechazada")
//             }
//         }, 2000)
//     })
// }

// procesoAsync(true)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         console.log(error)
//     })