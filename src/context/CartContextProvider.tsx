import { createContext, useState } from "react";
import { CartContextType, Product } from "../type/AppTypes";

export const CartContext = createContext<CartContextType>({
    count: 0,
    setCount: () => { },
    cartItems: [],
    setCartItems: () => { },
    addCartItem: () => { },
    removeCartItem: () => { },
});

export default function CartContextProvider(props: { children: React.ReactNode }) {
    const [count, setCount] = useState<number>(0);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    function addCartItem(product: Product) {
        if (product.count == 0) {
            product.count += 1;
            setCount(count + 1);
            setCartItems([...cartItems, product]);
        } else {
            const cartItem = cartItems.find(item => item.id == product.id)!;
            cartItem.count += 1;
            setCartItems([...cartItems]);
        }
    }

    function removeCartItem(cartItem: Product) {
        if (cartItem.count == 1) {
            cartItem.count -= 1;
            const newCartItems = cartItems.filter((item) => item.id !== cartItem.id);
            setCartItems(newCartItems);
            setCount(count - 1);
        } else if (cartItem.count >=2) {
            cartItem.count -= 1;
            setCartItems([...cartItems]);
        }
    }

    return (
        <CartContext.Provider 
            value={{ count, setCount, cartItems, setCartItems, addCartItem, removeCartItem,}}>
            {props.children}
        </CartContext.Provider>
    );
}