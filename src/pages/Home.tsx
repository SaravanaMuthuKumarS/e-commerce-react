import { createContext, useState } from "react";
import Dashboard from "./Dashboard";
import Productpage from "./Productpage.tsx";
import { Cart } from "../utils/AppTypes.tsx";

interface CartContextType {
    count: number;
    setCount: (count: number) => void;
    cartItems: Cart[];
    setCartItems: (cartItems: Cart[]) => void
}

export const CartContext = createContext<CartContextType>({ count: 0, setCount: () => {}, cartItems: [], setCartItems: () => {}});

export default function Home() {
    const [count, setCount] = useState(0)
    const [cartItems, setCartItems] = useState<Cart[]>([]);
    return (
        <>
            <CartContext.Provider value={{count, setCount, cartItems, setCartItems}}>
                <Dashboard />
                <Productpage />
            </CartContext.Provider>
        </>
    )
}