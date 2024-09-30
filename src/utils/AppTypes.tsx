export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartContextType {
  count: number;
  setCount: (count: number) => void;
  cartItems: Cart[];
  setCartItems: (cartItems: Cart[]) => void;
  addCartItem: (product: Product) => void;
  removeCartItem: (cartItem: Cart) => void;
}