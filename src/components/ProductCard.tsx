import Button from "./Button.tsx";
import Image from "./Image.tsx";
import "../scss/image.scss";
import { useContext, useState } from "react";
import { CartContextType, Product } from "../type/AppTypes.tsx";
import { CartContext } from "../context/CartContextProvider.tsx";

export default function ProductCard({ product }: { product: Product }) {
  const { addCartItem, removeCartItem, productState, setProductState } =
    useContext<CartContextType>(CartContext);

  function handleDecreament() {
    removeCartItem(product);
    if (product.count == 0)
      setProductState((prevStates) => ({
        ...prevStates,
        [product.id]: false,
      }));
  }

  function handleIncreament() {
    addCartItem(product);
  }

  function handleAddToCart() {
    addCartItem(product);
    setProductState((prevStates) => ({ ...prevStates, [product.id]: true }));
  }

  return (
    <li className="p-4 w-72">
      <div className="flex flex-col items-center bg-gray-100 rounded shadow-md p-4">
        <Image source={product.image} varient="product" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-lg">Price : {product.price}</p>
        <div className="flex items-center">
          {productState[product.id] === true ? (
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
