import { createContext, useState } from "react";
import { Cart, CartContextType, Product } from "../utils/AppTypes";
import { products } from "../utils/ProductList";

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
    const [cartItems, setCartItems] = useState<Cart[]>([]);

    function addCartItem(product: Product) {
        product.count += 1;
        const cartItem = cartItems.find(item => item.id == product.id);
        if (cartItem !== undefined) {
            cartItem.quantity += 1;
            setCartItems([...cartItems])
        } else {
            const newItem: Cart = { ...product, quantity: 1 }
            setCount(count + 1)
            setCartItems([...cartItems, newItem])
        }
    }

    function removeCartItem(cartItem: Cart) {
        const productItem = products.find(item => item.id == cartItem.id);
        productItem!.count -= 1;
        const data = cartItems.find(item => item.id == cartItem.id);
        if (data!.quantity !== 1) {
            data!.quantity -= 1;
            setCartItems([...cartItems])
        } else {
            const newCartItems = cartItems.filter((item) => item.id !== cartItem.id);
            setCartItems(newCartItems);
            setCount(count - 1);
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