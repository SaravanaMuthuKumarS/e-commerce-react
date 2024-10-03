export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export interface CartContextType {
  count: number;
  cost: number;
  gst: number;
  totalCost: number;
  cartItems: Product[];
  addCartItem: (product: Product) => void;
  removeCartItem: (cartItem: Product) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: string;
  setUser: (user: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}