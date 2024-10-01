import { useContext } from "react";
import { Product } from "../utils/AppTypes.tsx";
import Button from "./Button.tsx";
import { CartContext } from "../context/ContextProvider.tsx";

export default function ProductCard({ product }: { product: Product }) {
    const cart = useContext(CartContext);

    function handleIncreament(product: Product) {
        cart.addCartItem(product);
    }

    function handleDecreament(product: Product) {
        cart.removeCartItem(product);
    }

    return (
        <li className="p-4 w-72">
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-md p-4">
                <img src={product.image} className="h-44 w-36 rounded-t mb-2" />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-lg font-bold">Price : {product.price}</p>
                <div className="flex items-center">
                    <Button title='-' click={() => handleDecreament(product)} />
                    <p className="text-lg font-bold mx-4">{product.count}</p>
                    <Button title='+' click={() => handleIncreament(product)} />
                </div>
            </div>
        </li>
    )
}