import ProductCard from "../components/ProductCard.tsx";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider.tsx";
import { CartContextType } from "../type/AppTypes.tsx";
import CategoryNavigator from "./CategoryNavigator.tsx";

export default function ProductPage() {
  const { productItems } = useContext<CartContextType>(CartContext);
  return (
    <>
      <CategoryNavigator />
      <div className="text-center p-4 font-mono">
        <h2 className="text-lg text-black font-bold">Our Valuable Products</h2>
        <ul className="flex flex-wrap justify-center">
          {productItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
}
