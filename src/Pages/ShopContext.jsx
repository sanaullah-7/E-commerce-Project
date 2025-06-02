import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import all_product from '../../Ecommerce_Frontend_Assets (1)/Assets/all_product'

export const ShopContextData = createContext()

function getDefaultCart() {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
function ShopContext({ children }) {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    function AddToCart(itemId) {
        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    function RemoveFromCart(itemId) {
        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const contextValue = {
        all_product,
        cartItem,
        AddToCart,
        RemoveFromCart,
    };

    return (
        <div>
            <ShopContextData.Provider value={contextValue}>

                {children}
            </ShopContextData.Provider>
        </div>
    )
}

export default ShopContext
