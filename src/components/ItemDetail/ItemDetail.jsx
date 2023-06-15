import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../SelectTalle/SelectTalle"



const talles = [
    {
        value: "XS",
        label: "Extra Small"
    },
    {
        value: "M",
        label: "Medium"
    },
    {
        value: "XL",
        label: "Extra Large"
    },
]

const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad, 
            talle
        }
        console.log(item)
    }

    

    return (
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br/>
            <small>categoría: {category}</small>

            <SelectTalle 
                setSelect={setTalle}
                opciones={talles}
            />

            <ItemCount 
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail