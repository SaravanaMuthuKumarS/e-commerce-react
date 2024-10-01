import { useContext } from "react";
import { CartContextType, Product } from "../type/AppTypes.tsx";
import Button from "./Button.tsx";
import Image from "./Image.tsx";
import { CartContext } from "../context/CartContextProvider.tsx";

export default function ProductCard({ product }: { product: Product }) {
    const cart = useContext<CartContextType>(CartContext);

    return (
        <li className="p-4 w-72">
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-md p-4">
                <Image source={product.image} style='h-44 w-36 rounded-t mb-2' />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-lg">Price : {product.price}</p>
                <div className="flex items-center">
                    <Button title='-' click={() => cart.removeCartItem(product)} />
                    <p className="text-lg font-bold mx-4">{product.count}</p>
                    <Button title='+' click={() => cart.addCartItem(product)} />
                </div>
            </div>
        </li>
    )
}