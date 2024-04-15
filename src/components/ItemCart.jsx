import { useCart } from "../hooks/useCart"

function ItemCart({ product }) {

    const { removeFromCart } = useCart()

    const { title, price, quantity, image } = product

    return (
        <article className="cart_item">
            <div>
                <img src={image} alt={""} />
                <div className="cart_details">
                    <p className="cart_title">{title}</p>
                    <div>
                        <span className="cart_price">$ {price}</span>
                        <span className="qnty_price">Cantidad: {quantity} pza.</span>
                    </div>
                </div>
            </div>
            <button onClick={() => removeFromCart(product)}>
                Quitar del carrito
            </button>
        </article>
    )
}

export default ItemCart