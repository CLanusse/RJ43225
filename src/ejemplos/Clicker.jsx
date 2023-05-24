import { useState } from "react"


export const Clicker = ( {init = 0, step = 1} ) => {
    const [counter, setCounter] = useState(init)
    const [saludar, setSaludar] = useState(false)

    console.log(counter)

    const sumar = () => {
        setCounter(counter + step)
    }

    const restar = () => {
        setCounter(counter - step)
    }

    const reset = () => {
        setCounter(init)
    }

    const cambiar = () => {
        setSaludar(!saludar)
    }

    return (
        <div>
            <h2>Clicker</h2>
            <hr/>

            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={reset}>Reset</button>
            <p>{counter}</p>

            <hr/>
            <button onClick={cambiar}>Click me</button>
            
            <p>{saludar ? "Hola mundo" : "Chau mundo"}</p>
        </div>
    )
}