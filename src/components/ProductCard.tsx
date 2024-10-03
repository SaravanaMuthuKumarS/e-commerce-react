import { useContext, useEffect, useState } from "react";
import { CartContextType, Product } from "../type/AppTypes.tsx";
import Button from "./Button.tsx";
import Image from "./Image.tsx";
import { CartContext } from "../context/CartContextProvider.tsx";
import '../scss/image.scss'

export default function ProductCard({ product }: { product: Product }) {
    const cart = useContext<CartContextType>(CartContext);
    const [productStates, setProductStates] = useState<{ [id: number]: boolean }>({});

    return (
        <li className="p-4 w-72">
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-md p-4">
                <Image source={product.image} varient='product' />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-lg">Price : {product.price}</p>
                <div className="flex items-center">
                    {productStates[product.id] === true ? <>
                        <Button title='-' click={() => {
                            cart.removeCartItem(product);
                            if (product.count == 0)
                                setProductStates((prevStates) => ({ ...prevStates, [product.id]: false }));
                        }} />
                        <p className="text-lg font-bold mx-4">{product.count}</p>
                        <Button title='+' click={() => cart.addCartItem(product)} /></> :
                        <><Button title="Add to Cart" click={() => {
                            cart.addCartItem(product);
                            setProductStates((prevStates) => ({ ...prevStates, [product.id]: true }));
                        }} /></>}
                </div>
            </div>
        </li>
    )
}