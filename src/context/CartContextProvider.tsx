import { createContext, useCallback, useEffect, useState } from "react";
import { CartContextType, Product } from "../type/AppTypes";
import { products } from "../data/ProductList";

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  productItems: [],
  selectedCategory: "",
  searchValue: "",
  productState: {},
  setProductState: () => {},
  setSearchValue: () => {},
  setProductItems: () => {},
  setSelectedCategory: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  setCartItems: () => {},
});

export default function CartContextProvider(props: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [productState, setProductState] = useState<{ [id: number]: boolean }>(
    {}
  );
  const [productItems, setProductItems] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedCategory === "") setProductItems(products);
    else
      setProductItems(
        products.filter((item) => item.category === selectedCategory)
      );
  }, [selectedCategory]);

  useEffect(() => {
    if (searchValue === "") setProductItems(products);
    else
      setProductItems(
        productItems.filter((item) =>
          item.name.toLowerCase().includes(searchValue)
        )
      );
  }, [searchValue]);

  const addCartItem = useCallback(
    (product: Product) => {
      if (product.count === 0) {
        product.count += 1;
        setCartItems([...cartItems, product]);
      } else {
        const cartItem = cartItems.find((item) => item.id == product.id)!;
        cartItem.count += 1;
        setCartItems([...cartItems]);
      }
    },
    [cartItems]
  );

  const removeCartItem = useCallback(
    (cartItem: Product) => {
      if (cartItem.count === 1) {
        cartItem.count -= 1;
        const newCartItems = cartItems.filter(
          (item) => item.id !== cartItem.id
        );
        setCartItems(newCartItems);
      } else if (cartItem.count >= 2) {
        cartItem.count -= 1;
        setCartItems([...cartItems]);
      }
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        productItems,
        selectedCategory,
        searchValue,
        productState,
        setProductState,
        setSearchValue,
        setSelectedCategory,
        setProductItems,
        addCartItem,
        removeCartItem,
        setCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
