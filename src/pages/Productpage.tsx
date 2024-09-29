import { products } from "../utils/ProductList"
import ProductCard from "../components/ProductCard.tsx"
import { useContext } from "react";
import { CartContext } from "./Home.tsx";

export default function ProductPage() {
    const cartCount = useContext(CartContext)

    function handleClick(id: number) {
        cartCount.setCount(cartCount.count + 1)
    }

    return (
        <>
            <ul className="flex flex-wrap justify-center">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} click={() => handleClick(product.id)} />
                ))}
            </ul>
        </>
    )
}