import { Product } from "../utils/AppTypes.tsx";
import Button from "./Button.tsx";

export default function ProductCard({ product, click }: {product: Product, click: any}) {
    return (
        <li className="p-4">
            <div className="bg-gray-100 rounded shadow-md p-4 text-center">
                <img src={product.image} className="w-full h-48 object-cover rounded-t" />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold">Price: ${product.price}</p>
                <Button title="Add to Cart" click={click}/>
            </div>
        </li>
    )
}