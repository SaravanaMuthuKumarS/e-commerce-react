import { Cart } from "../utils/AppTypes";
import Button from "./Button";

export default function CartCard({ title, cart, click }: { title: string, cart: Cart, click: any }) {
    return (
        <li className="p-2">
            <div className="flex gap-6 bg-gray-100 rounded shadow-md p-4 text-center">
                <img src={cart.image} className="w-16 h-16 object-cover rounded-t" />
                <div className="mt-2">
                    <h2 className="text-lg font-bold">{cart.name}</h2>
                    <p className="text-gray-600">{cart.description}</p>
                </div>
                <div className="mt-2">
                    <p className="text-lg font-bold">Quantity: {cart.quantity}</p>
                    <p className="text-lg font-bold">Price: {cart.price}</p>
                </div>
                <Button title={title} click={click} />
            </div>
        </li>
    )
}