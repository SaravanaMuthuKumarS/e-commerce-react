import { createContext, useState } from "react";
import { CartContextType, Product } from "../utils/AppTypes";

export const CartContext = createContext<CartContextType>({
    count: 0,
    setCount: () => { },
    cartItems: [],
    setCartItems: () => { },
    addCartItem: () => { },
    removeCartItem: () => { },
});

export default function ContextProvider(props: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    function addCartItem(product: Product) {
        if (product.count == 0) {
            product.count += 1;
            setCount(count + 1)
            setCartItems([...cartItems, product])
        } else {
            const cartItem = cartItems.find(item => item.id == product.id)!;
            cartItem.count += 1;
            setCartItems([...cartItems])
        }
    }

    function removeCartItem(cartItem: Product) {
        cartItem.count -= 1;
        if (cartItem.count == 0) {
            const newCartItems = cartItems.filter((item) => item.id !== cartItem.id);
            setCartItems(newCartItems);
            setCount(count - 1);
        } else {
            setCartItems([...cartItems])
        }
    }

    return (
        <CartContext.Provider
            value={{
                count,
                setCount,
                cartItems,
                setCartItems,
                addCartItem,
                removeCartItem,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}