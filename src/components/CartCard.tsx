import { useContext } from "react";
import { CartContextType, Product } from "../type/AppTypes";
import Button from "./Button";
import Image from './Image'
import { CartContext } from "../context/CartContextProvider";

export default function CartCard({ cartItem }: { cartItem: Product }) {
    const cart = useContext<CartContextType>(CartContext);

    return (
        <li className="p-2">
            <div className="flex gap-6 bg-gray-100 rounded shadow-md p-4 text-center">
                <Image source={cartItem.image} style="w-16 h-16 object-cover rounded-t"/>
                <div className="flex items-center">
                    <h2 className="text-lg font-bold">{cartItem.name}</h2>
                </div>
                <div className="flex items-center">
                    <p className="text-lg font-normal">Price: {cartItem.price}</p>
                </div>
                <div className="flex items-center">
                    <Button title='-' click={() => cart.removeCartItem(cartItem)} />
                    <p className="text-lg font-bold mx-4">{cartItem.count}</p>
                    <Button title='+' click={() => cart.addCartItem(cartItem)} />
                </div>
            </div>
        </li>
    )
}