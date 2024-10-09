import { createContext, useReducer, useState } from "react";
import {
  CartContextType,
  ItemActionType,
  State,
} from "../type/AppTypes";
import { products } from "../data/productList";
import { CartReducer } from "../enums/reducerHelperEnum";

const initialState: State = {
  productItems: products,
  cartItems: [],
  category: "",
  search: "",
};

export const CartContext = createContext<CartContextType>({
  state: initialState,
  productState: {},
  dispatch: () => {},
  setProductState: () => {},
});

function cartReducer(state: State, action: ItemActionType): State {
  switch (action.type) {
    case CartReducer.AddCartItem: {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload.id) {
              item.count += 1;
              return item;
            }
            return item;
          }),
        };
      } else {
        action.payload.count = 1;
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    }

    case CartReducer.RemoveCartItem: {
      if (action.payload.count === 1) {
        action.payload.count -= 1;
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      } else if (action.payload.count >= 2) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload.id) {
              item.count -= 1;
              return item;
            }
            return item;
          }),
        };
      } else {
        return state;
      }
    }

    case CartReducer.SetCategory: {
      if (action.selectedCategory === "") {
        return {
          ...state,
          productItems: products,
          category: action.selectedCategory,
        };
      } else {
        return {
          ...state,
          productItems: products.filter(
            (item) => item.category === action.selectedCategory
          ),
          category: action.selectedCategory!,
        };
      }
    }

    case CartReducer.SearchProduct: {
      if (action.searchValue === "" && state.category === "") {
        return {
          ...state,
          productItems: products,
          search: action.searchValue,
        };
      } else if (action.searchValue === "" && state.category !== "") {
        return {
          ...state,
          productItems: products.filter(
            (item) => item.category === state.category
          ),
          search: action.searchValue,
        };
      } else {
        return {
          ...state,
          productItems: state.productItems.filter((item) =>
            item.name.toLowerCase().includes(action.searchValue!)
          ),
          search: action.searchValue!,
        };
      }
    }

    case CartReducer.AddProductItem: {
      return {...state, productItems: [...state.productItems, action.payload]}
    }

    default: {
      return state;
    }
  }
}

export default function CartContextProvider(props: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [productState, setProductState] = useState<{ [id: number]: boolean }>(
    {}
  );

  return (
    <CartContext.Provider
      value={{
        state,
        productState,
        dispatch,
        setProductState,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
