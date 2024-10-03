export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export interface UserDetail {
  id: number;
  name: string;
  password: string;
  contact: number;
  email: string;
  dob: string;
  gender: string;
  location: string;
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
  userId: number;
  setUserId: (userId: number) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}