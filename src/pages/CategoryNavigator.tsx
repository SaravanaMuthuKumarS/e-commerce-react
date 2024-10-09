import { Icons, IconType } from "../components/Icons";
import { useContext } from "react";
import { categories } from "../data/categoryList";
import { CartContext } from "../context/CartContextProvider";
import { CartContextType } from "../type/AppTypes";
import { CartReducer } from "../enums/appEnums";

export default function CategoryNavigator() {
  const { state, dispatch } = useContext<CartContextType>(CartContext);

  function handleAllProducts() {
    dispatch({ type: CartReducer.SearchProduct, searchValue: "" });
    dispatch({ type: CartReducer.SetCategory, selectedCategory: "" });
  }

  return (
    <div className="flex h-20 justify-around p-2 font-mono mx-4 mt-4 rounded border border-y-black">
      <div
        onClick={handleAllProducts}
        className="flex border shadow p-2 m-2 cursor-pointer gap-2 bg-gray-100"
      >
        <Icons type={IconType.AllIcon} />
        <p className="flex flex-col justify-center">All-Products</p>
      </div>
      <select
        className="m-2 p-2 text-sm text-black border border-gray-300 rounded-md shadow-sm bg-gray-100"
        value={state.category}
        onChange={(e: any) =>
          dispatch({
            type: CartReducer.SetCategory,
            selectedCategory: e.target.value,
          })
        }
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="search"
        value={state.search}
        onChange={(e: any) =>
          dispatch({
            type: CartReducer.SearchProduct,
            searchValue: e.target.value,
          })
        }
        placeholder="Search..."
        className="m-2 p-2 text-sm text-black border border-gray-300 rounded-md shadow-sm bg-gray-100"
      />
    </div>
  );
}
