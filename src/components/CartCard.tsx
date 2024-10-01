import { useContext } from "react";
import { Product } from "../utils/AppTypes";
import Button from "./Button";
import { CartContext } from "../context/ContextProvider";

export default function CartCard({ cartItem }: { cartItem: Product }) {
    const cart = useContext(CartContext);

    function handleIncreament(cartItem: Product) {
        cart.addCartItem(cartItem);
    }

    function handleDecreament(cartItem: Product) {
        cart.removeCartItem(cartItem);
    }

    return (
        <li className="p-2">
            <div className="flex gap-6 bg-gray-100 rounded shadow-md p-4 text-center">
                <img src={cartItem.image} className="w-16 h-16 object-cover rounded-t" />
                <div className="flex items-center">
                    <h2 className="text-lg font-bold">{cartItem.name}</h2>
                </div>
                <div className="flex items-center">
                    <p className="text-lg font-normal">Price: {cartItem.price}</p>
                </div>
                <div className="flex items-center">
                    <Button title='-' click={() => handleDecreament(cartItem)} />
                    <p className="text-lg font-bold mx-4">{cartItem.count}</p>
                    <Button title='+' click={() => handleIncreament(cartItem)} />
                </div>
            </div>
        </li>
    )
}