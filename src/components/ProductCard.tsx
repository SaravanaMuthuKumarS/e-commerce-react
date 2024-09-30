import { Product } from "../utils/AppTypes.tsx";
import Button from "./Button.tsx";

export default function ProductCard({ title, product, click }: {title: string, product: Product, click: any}) {
    return (
        <li className="p-4 w-72">
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-md p-4">
                <img src={product.image} className="h-44 w-36 rounded-t mb-2" />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-lg font-bold">Price : {product.price}</p>
                <Button title={title} click={click}/>
                <p className="text-lg font-bold">Count : {product.count} </p>
            </div>
        </li>
    )
}