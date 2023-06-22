import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className='fs-5' style={{color: 'white'}}>
            <FaShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget