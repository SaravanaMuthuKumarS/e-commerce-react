export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export interface CartContextType {
  count: number;
  setCount: (count: number) => void;
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
  addCartItem: (product: Product) => void;
  removeCartItem: (cartItem: Product) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: string;
  setUser: (user: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}