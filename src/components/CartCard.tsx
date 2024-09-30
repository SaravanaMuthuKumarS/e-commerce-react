import { useContext } from "react";
import { Cart } from "../utils/AppTypes";
import Button from "./Button";
import { CartContext } from "../context/ContextProvider";
import { products } from "../utils/ProductList";

export default function CartCard({ cartItem }: { cartItem: Cart }) {
    const cart = useContext(CartContext);

    function handleIncreament(cartItem: Cart) {
        cart.addCartItem(products.find((item) => item.id == cartItem.id)!);
    }

    function handleDecreament(cartItem: Cart) {
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
                    <p className="text-lg font-bold mx-4">{cartItem.quantity}</p>
                    <Button title='+' click={() => handleIncreament(cartItem)} />
                </div>
            </div>
        </li>
    )
}