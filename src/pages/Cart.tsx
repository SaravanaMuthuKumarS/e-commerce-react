import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ContextProvider.tsx";
import { Cart as CartType } from "../utils/AppTypes";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartCard from "../components/CartCard";

export default function Cart() {
    const [cost, setCost] = useState(0);
    const cart = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        setCost(0);
        cart.cartItems.map((item) => {
            setCost((cost) => cost += item.price * item.quantity)
        })
    }, [cart.cartItems])

    function handleClick(cartItem: CartType) {
        cart.removeCartItem(cartItem);
    }

    return (
        <>
            <div className="text-center border-y-black border">
                {cart.count == 0 ? <><h2 className="text-lg font-bold">Your Cart is Empty</h2><Button title="Close Cart" click={() => navigate(-1)} /></> :
                    <>
                        <h2 className="text-lg text-black text-center font-bold">My Cart</h2>
                        <ul className="flex flex-wrap justify-center">
                            {cart.cartItems.map((cartItem) => (
                                <CartCard key={cartItem.id} title="Remove from Cart" cart={cartItem} click={() => handleClick(cartItem)} />
                            ))}
                        </ul>
                        <p className="text-lg text-black text-center font-semibold"> Total Cost : {cost}</p>
                        <Button title="Close Cart" click={() => navigate(-1)} />
                    </>
                }
            </div>
        </>
    )
}