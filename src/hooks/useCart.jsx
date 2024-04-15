import { useContext } from "react";
import { Cartcontext } from "../context/cart";

export const useCart = () => {
    const cart = useContext(Cartcontext)

    if(cart === undefined) {
        throw new Error ('useCart must be used within a CartProvider')
    }

    return cart
}