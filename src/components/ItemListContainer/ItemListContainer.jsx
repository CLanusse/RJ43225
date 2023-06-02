import { useState } from 'react'
import './ItemListContainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container my-5">
           <ItemList items={productos}/>
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