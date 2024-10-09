import Button from "./Button";
import Image from "./Image";
import "../scss/image.scss";
import { useContext } from "react";
import { CartContextType, Product } from "../type/AppTypes";
import { CartContext } from "../context/CartContextProvider";
import { CartReducer } from "../enums/reducerHelperEnum";

export default function CartCard({ cartItem }: { cartItem: Product }) {
  const { dispatch } =
    useContext<CartContextType>(CartContext);

  return (
    <li className="p-2">
      <div className="flex gap-6 bg-gray-100 rounded shadow-md p-4 text-center">
        <Image source={cartItem.image} varient="cart" />
        <div className="flex items-center">
          <h2 className="text-lg font-bold">{cartItem.name}</h2>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-normal">Price: {cartItem.price}</p>
        </div>
        <div className="flex items-center">
          <Button title="-" click={() => dispatch({ type: CartReducer.RemoveCartItem, payload: cartItem })} />
          <p className="text-lg font-bold mx-4">{cartItem.count}</p>
          <Button title="+" click={() => dispatch({ type: CartReducer.AddCartItem, payload: cartItem })} />
        </div>
      </div>
    </li>
  );
}
