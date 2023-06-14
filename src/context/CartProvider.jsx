import React, {createContext, useEffect, useState} from 'react';
import {getCartFromSessionStorage, saveCartInSessionStorage} from "../helpers/SessionStorage";
import {Alert, Slide, Snackbar} from "@mui/material";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);

    useEffect(() => {
        getCartFromSessionStorage('cart') && setCart(getCartFromSessionStorage('cart'));
    }, []);

    const addCart = (item) => {
        let localCart;
        if (checkIfItemExistInCart(item.id)) {
            localCart = updatedCart(item)
        } else {
            localCart = [...cart, item]
        }
        setCart(localCart);
        saveCartInSessionStorage('cart', localCart);
        setShowAddedToCartMessage(true);
    };

    const updatedCart = (item) => cart.map((cartItem) => {
        if (cartItem.id === item.id) {
            return {
                ...cartItem,
                count: cartItem.count + item.count
            };
        }
        return cartItem;
    });

    const checkIfItemExistInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const getTotalPaymentFromCart = () => {
        return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
    };

    const removeItemFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        saveCartInSessionStorage('cart', updatedCart);
    }

    const removeAllItemsFromCart = () => {
        setCart([]);
        saveCartInSessionStorage('cart', []);
    }

    const hideAddedToCartMessage = () => {
        setShowAddedToCartMessage(false);
    };

    return (
        <CartContext.Provider value={{cart, setCart, addCart, getTotalPaymentFromCart, removeItemFromCart, removeAllItemsFromCart}}>
            {children}
            <Snackbar open={showAddedToCartMessage} autoHideDuration={1000} onClose={hideAddedToCartMessage} TransitionComponent={Slide} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={hideAddedToCartMessage} severity="success">
                    Producto agregado al Carro de Compras
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    )

}
export default CartProvider;
