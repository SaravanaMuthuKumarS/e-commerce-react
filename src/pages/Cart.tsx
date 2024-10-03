import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider.tsx";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Image from '../components/Image.tsx'
import CartCard from "../components/CartCard";
import empty from '../asserts/empty.png';
import { CartContextType } from "../type/AppTypes.tsx";

export default function Cart() {
    const cart = useContext<CartContextType>(CartContext);
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="text-center border-y-black border font-mono">
                {cart.count == 0 ?
                    <>
                        <div className="flex flex-col p-4 items-center">
                            <h2 className="text-lg font-bold">Your Cart is Empty</h2>
                            <Image source={empty} className="w-72 h-72"/>
                            <Button title="Close Cart" click={() => navigate(-1)} />
                        </div>
                    </> :
                    <>
                        <h2 className="text-lg text-black text-center font-bold">My Cart</h2>
                        <ul className="flex flex-wrap justify-center">
                            {cart.cartItems.map((cartItem) => (
                                <CartCard key={cartItem.id} cartItem={cartItem} />
                            ))}
                        </ul>
                        <div className="bg-gray-100 mx-2 p-4 mt-2 rounded-lg shadow-md text-lg">
                            <h3 className="font-bold">Order Summary</h3>
                            <div className="flex justify-between mb-2">
                                <p>Subtotal:</p>
                                <p>₹ {cart.cost.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p>GST (18%):</p>
                                <p>₹ {cart.gst.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-2 font-bold">
                                <p>Total:</p>
                                <p>₹ {cart.totalCost.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-8">
                            <Button title="Proceed To CheckOut" click={() => { }} />
                            <Button title="Close Cart" click={() => navigate(-1)} />
                        </div>
                    </>
                }
            </div>
        </>
    );
}