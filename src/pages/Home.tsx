import { createContext, useState } from "react";
import Dashboard from "./Dashboard";
import Productpage from "./Productpage.tsx";

interface CartContextType {
    count: number;
    setCount: (count: number) => void;
}

export const CartContext = createContext<CartContextType>({ count: 0, setCount: () => { } });

export default function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <CartContext.Provider value={{count, setCount}}>
                <Dashboard />
                <Productpage />
            </CartContext.Provider>
        </>
    )
}