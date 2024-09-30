import { products } from "../utils/ProductList"
import ProductCard from "../components/ProductCard.tsx"
import { useContext } from "react";
import { CartContext } from "../context/ContextProvider.tsx";
import { Product } from "../utils/AppTypes.tsx";

export default function ProductPage() {
    const cart = useContext(CartContext)

    function handleClick(product: Product) {
        cart.addCartItem(product);
    }

    return (
        <> <div className="text-center border-y-black border">
            <h2 className="text-lg text-black font-bold">Products</h2>
            <ul className="flex flex-wrap justify-center">
                {products.map((product) => (
                    <ProductCard title="Add to Cart" key={product.id} product={product} click={() => handleClick(product)} />
                ))}
            </ul>
            </div>
        </>
    )
}