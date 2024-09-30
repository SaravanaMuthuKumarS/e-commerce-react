import { products } from "../utils/ProductList"
import ProductCard from "../components/ProductCard.tsx"
import { useContext } from "react";
import { CartContext } from "./Home.tsx";
import { Cart, Product } from "../utils/AppTypes.tsx";

export default function ProductPage() {
    const cart = useContext(CartContext)

    function handleClick(product: Product) {
        product.count += 1;
        const cartItem = cart.cartItems.find(item => item.id == product.id);
        if (cartItem !== undefined) {
            cartItem.quantity += 1;
            cart.setCartItems([...cart.cartItems])
        } else {
            const newItem: Cart = {...product, quantity:1}
            cart.setCount(cart.count + 1)
            cart.setCartItems([...cart.cartItems, newItem])
        }
    }

    return (
        <>
            <h2 className="text-lg text-black text-center font-bold">Products</h2>
            <ul className="flex flex-wrap justify-center">
                {products.map((product) => (
                    <ProductCard title="Add to Cart" key={product.id} product={product} click={() => handleClick(product)} />
                ))}
            </ul>
        </>
    )
}