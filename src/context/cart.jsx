import { createContext, useState } from 'react';

export const Cartcontext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if (productInCartIndex >= 0) {
            const newCart = [...cart];

            newCart[productInCartIndex].quantity += 1;

            return setCart(newCart);
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id));
    };

    return (
        <Cartcontext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </Cartcontext.Provider>
    );
}
