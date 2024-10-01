import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ContextProvider.tsx";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartCard from "../components/CartCard";
import empty from '../asserts/empty.png';

export default function Cart() {
    const [cost, setCost] = useState(0);
    const [gst, setGst] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const cart = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        setCost(0);
        setGst(0);
        setTotalCost(0);
        cart.cartItems.map((item) => {
            setCost((cost) => cost + item.price * item.count);
        });
        setGst(cost * 0.18);
        setTotalCost(cost + gst);
    }, [cart.cartItems, cost])

    return (
        <>
            <div className="text-center border-y-black border">
                {cart.count == 0 ?
                    <>
                        <div className="flex flex-col p-4 items-center">
                            <h2 className="text-lg font-bold">Your Cart is Empty</h2>
                            <img className="w-72 h-72" src={empty} />
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
                                <p>₹ {cost.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p>GST (18%):</p>
                                <p>₹ {gst.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-2 font-bold">
                                <p>Total:</p>
                                <p>₹ {totalCost.toFixed(2)}</p>
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
    )
}