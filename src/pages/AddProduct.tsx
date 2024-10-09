import Button from "../components/Button";
import Input from "../components/Input";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContextType } from "../type/AppTypes";
import { CartContext } from "../context/CartContextProvider";
import "../constants/navigationConstants";
import { PREVIOUS_PAGE, PRODUCT_ROUTE } from "../constants/navigationConstants";
import { CartReducer } from "../enums/reducerHelperEnum";

export default function AddProduct() {
  const navigate: NavigateFunction = useNavigate();
  const { state, dispatch } =
    useContext<CartContextType>(CartContext);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch({type: CartReducer.AddProductItem, payload: {
      id: state.productItems.length,
      name: name,
      price: price,
      image: image,
      count: 0,
      category:"Fashion",
    }});
    navigate(PRODUCT_ROUTE);
  };

  return (
    <div className="bg-white w-full h-96 flex flex-col items-center justify-center font-mono mt-14">
      <div className="bg-gray-200 rounded-lg shadow-md p-3 w-96">
        <h3 className="text-lg text-center font-bold mb-4">Add Product</h3>
        <form onSubmit={(e: any) => handleClick(e)}>
          <div className="flex gap-4 items-center justify-between">
            <p>ProductName :</p>
            <Input
              type="text"
              name="ProductName"
              content="Enter Product Name"
              change={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-6 items-center justify-between mt-2">
            <p>Price : </p>
            <Input
              type="number"
              name="price"
              content="Enter Price"
              change={(e: any) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex gap-6 items-center justify-between mt-2">
            <p>Image : </p>
            <Input
              type="file"
              name="image"
              content="Choose Image"
              change={(e: any) =>
                setImage(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <Button title="Add to Products" />
          </div>
        </form>
      </div>
      <div className="flex items-center mt-6">
        <Button title="Back" click={() => navigate(PREVIOUS_PAGE)} />
      </div>
    </div>
  );
}