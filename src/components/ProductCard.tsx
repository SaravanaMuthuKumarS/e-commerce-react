import Button from "./Button.tsx";
import Image from "./Image.tsx";
import "../scss/image.scss";
import { useContext } from "react";
import { CartContextType, Product } from "../type/AppTypes.tsx";
import { CartContext } from "../context/CartContextProvider.tsx";
import { CartReducer } from "../enums/appEnums.ts";

export default function ProductCard({ product }: { product: Product }) {
  const { state, dispatch } =
    useContext<CartContextType>(CartContext);

  function handleDecreament() {
    dispatch({ type: CartReducer.RemoveCartItem, payload: product });
    dispatch({type: CartReducer.ProductState, payload: product});
  }

  function handleIncreament() {
    dispatch({ type: CartReducer.AddCartItem, payload: product });
  }

  function handleAddToCart() {
    dispatch({ type: CartReducer.AddCartItem, payload: product });
    dispatch({type: CartReducer.ProductState, payload: product});
  }

  return (
    <li className="p-4 w-72">
      <div className="flex flex-col items-center bg-gray-100 rounded shadow-md p-4">
        <Image source={product.image} varient="product" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-lg">Price : {product.price}</p>
        <div className="flex items-center">
          {state.productState[product.id] === true ? (
            <>
              <Button title="-" click={handleDecreament} />
              <p className="text-lg font-bold mx-4">{product.count}</p>
              <Button title="+" click={handleIncreament} />
            </>
          ) : (
            <Button title="Add to Cart" click={handleAddToCart} />
          )}
        </div>
      </div>
    </li>
  );
}
