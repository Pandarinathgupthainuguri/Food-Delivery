import { createContext, useState } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find((p) => p._id === item._id)
            if (exists) {
                return prev.map((p) => (p._id === item._id ? { ...p, qty: p.qty + 1 } : p))
            }
            return [...prev, { ...item, qty: 1 }]
        })
    }

    const changeQty = (id, delta) => {
        setCart((prev) => {
            return prev
                .map((p) => (p._id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p))
                .filter((p) => p.qty > 0)
        })
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p._id !== id))
    }

    const clearCart = () => setCart([])

    const contextValue = {
        food_list,
        cart,
        addToCart,
        changeQty,
        removeFromCart,
        clearCart,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;