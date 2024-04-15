import { useCart } from '../hooks/useCart'
import ItemCart from './ItemCart'

export default function Cart() {

    const { cart, clearCart } = useCart()

    return (
        <div className="cart">
            <h3>Carrito de compras</h3>
            <div className="container_cart">
                {
                    cart.length > 0 ?
                        cart.map((item) => (
                            <ItemCart key={item.id} product={item} />
                        ))
                        :
                        <div className='container_error'>
                            <p>No hay productos</p>
                        </div>
                }

            </div>
            {cart.length > 0 && <button className='clear_cart' onClick={clearCart}>Limpiar carrito</button>}
        </div>
    )
}
