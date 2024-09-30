import { products } from "../utils/ProductList"
import ProductCard from "../components/ProductCard.tsx"

export default function ProductPage() {
    return (
        <> <div className="text-center border-y-black border">
            <h2 className="text-lg text-black font-bold">Products</h2>
            <ul className="flex flex-wrap justify-center">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </ul>
            </div>
        </>
    )
}